import {Component, OnInit} from '@angular/core';
import {RegisterUser} from './register-user';
import {User, UserService} from '../user.service';
import {Result} from '../../common/result';
import {interval} from 'rxjs';
import {scan, take} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: RegisterUser;

  codeImgSrc = 'assets/loading.gif'; // 验证码图片base64数据

  isDisabled = false; // 开始禁用短信获取按钮
  btnText = '获取短信验证码'; // 动态按钮文字

  constructor(private us: UserService) {
    this.model = new RegisterUser();
  }

  ngOnInit() {
    // 程序初始化完毕调用一次验证码
    this.getCodeImg();
  }

  getCodeImg() {
    this.us.getCodeImg().subscribe(
      (result: Result<string>) => {
        if (result.success) {
          // 获取成功
          this.codeImgSrc = 'data:image/png;base64,' + result.data;
        } else {
          alert('获取验证码失败，请重试！');
        }
      }
    );
  }

  getCodeSms() {
    this.us.getCodeSms(this.model.phone).subscribe(
      (result: Result<string>) => {
        if (result.success) {
          // 获取成功: 开启60s倒计时，禁用按钮
          this.isDisabled = true;
          interval(1000).pipe(
            scan(i => i - 1, 60),
            take(60)
          ).subscribe(i => {
            if (i > 0) {
              this.btnText = i + 's';
            } else {
              this.btnText = '获取短信验证码';
              this.isDisabled = false;
            }
          });
        } else {
          alert('获取验证码失败，请重试！');
        }
      }
    );
  }

  register() {
    this.us.register(this.model).subscribe(
      (result: Result<User>) => {
        if (result.success) {
          // 登录成功，跳转主页
          alert('注册成功');
        } else {
          alert('注册失败');
        }
      }
    );
  }
}
