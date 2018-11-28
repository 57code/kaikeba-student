import {Component, OnInit} from '@angular/core';
import {RegisterUser} from './register-user';
import {UserService} from '../user.service';
import {Result} from '../../common/result';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: RegisterUser;

  codeImgSrc: string = null; // 验证码图片base64数据

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

  register() {

  }
}
