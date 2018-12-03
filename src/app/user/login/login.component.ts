import {Component, OnInit} from '@angular/core';
import {LoginUser} from './login-user';
import {User, UserService} from '../user.service';
import {Result} from '../../common/result';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: LoginUser;

  constructor(private userService: UserService,
              private router: Router) {
    this.model = new LoginUser();
  }

  login() {
    console.log(this.model);
    // 发送请求
    this.userService.login(this.model).subscribe(
      (result: boolean) => {
        if (result) {
          // 登录成功，跳转至主页/main
          this.router.navigate(['/main']);
        } else {
          alert('登录失败！');
        }
      }
    );
  }

}
