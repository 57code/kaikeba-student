import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {MenuItem, MenuItemType} from '../common/menu/menu.component';
import {UserCenterService} from './ucenter/user-center.service';
import {of, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Result} from '../common/result';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showMenu = false;
  showUserMenu = false;

  // 菜单数据
  menuData: MenuItem[] = [
    {label: '设计学吧', url: 'http://uxd.kaikeba.com', type: MenuItemType.Link},
    {label: '产品学吧', url: 'http://pm.kaikeba.com', type: MenuItemType.Link},
  ];
  userMenuData: MenuItem[] = [
    {label: '我的课程', url: 'usercenter/course', type: MenuItemType.Route},
    {label: '我的消息', url: 'usercenter/message', type: MenuItemType.Route},
    {
      label: '退出', cb: () => {
        // 注销并跳转至登录页
        // ...
        this.us.logout().subscribe(
          (result: boolean) => {
            if (result) {
              // 去登陆页面
              this.router.navigate(['/user/login']);
            }
          }
        );
      }, type: MenuItemType.Callback
    },
  ];

  // 搜索课程结果
  searchResult: MenuItem[];
  subject: Subject<string> = new Subject<string>();

  constructor(private router: Router,
              private us: UserService,
              private ucs: UserCenterService) {
    // 设置subject
    this.subject.pipe(
      debounceTime(300), // 防抖
      distinctUntilChanged(), // 去重：加入紧挨着两次输入值相同则不发送
      switchMap(keyword => { // 将Observable<string>类型转换为Observable<Result<any>>
        // 判空
        if (keyword === '') {
          return of(null);
        }
        return this.ucs.searchCourse(keyword);
      })
    ).subscribe(// 搜索结果处理
      (result: Result<any[]>) => {
        if (result && result.success) {
          // 映射结果结构为MenuItem
          // 这里有另外两个处理方式：
          // 方式一：后台直接按照这个格式返回，最佳方式
          // 方式二：服务中做map映射结果为MenuItem[], 次佳方式
          this.searchResult = result.data.map(item => {
            return {
              label: item.name,
              url: item.url,
              type: MenuItemType.Link
            };
          });
        } else {
          this.searchResult = null;
        }
      }
    );
  }

  ngOnInit() {
  }

  gotoCourse(courseId) {
    // 紧跟着path是必选参数（参数类型不能是对象）
    // 可选参数传递对象即可
    // 查询参
    this.router.navigate(['/main/course/', courseId, {
      username: 'tom', age: 20,
    }], {
      queryParams: {foo: 'bar'}
    });
  }

  search(keyword) {
    this.subject.next(keyword);
  }
}
