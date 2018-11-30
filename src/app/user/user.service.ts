import {Injectable} from '@angular/core';
import {LoginUser} from './login/login-user';
import {HttpClient} from '@angular/common/http';
import {Result} from '../common/result';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {RegisterUser} from './register/register-user';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '/api/users/';

  user: User = null; // 缓存登录用户信息

  // 依赖注入
  constructor(private http: HttpClient) {
  }

  login(user: LoginUser) {
    // 返回的结果是Observable对象
    return this.http
      .post<Result<User>>(this.url + 'login', user)
      .pipe(
        map((r: Result<User>) => {
          if (r.success) {
            // 缓存用户信息
            this.user = r.data;
            // 登录成功
            return true;
          } else {
            return false;
          }
        }),
        catchError(error => of(false))
      );
  }

  getCodeImg() {
    return this.http.get(this.url + 'code-img');
  }

  verifyPhone(phone) {
    return this.http.post(this.url + 'verify-phone', {phone});
  }

  verifyCodeImg(code) {
    return this.http.post(this.url + 'verify-code-img', {code});
  }

  getCodeSms(phone) {
    return this.http.get('api/code/' + phone);
  }

  // 注册方法
  register(user: RegisterUser) {
    return this.http.post(this.url + 'register', {
      phone: user.phone,
      password: user.password
    });
  }
}
