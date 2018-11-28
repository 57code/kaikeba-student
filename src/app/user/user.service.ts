import {Injectable} from '@angular/core';
import {LoginUser} from './login/login-user';
import {HttpClient} from '@angular/common/http';
import {Result} from '../common/result';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '/api/users/';

  // 依赖注入
  constructor(private http: HttpClient) {
  }

  login(user: LoginUser) {
    // 返回的结果是Observable对象
    return this.http.post<Result<User>>(this.url + 'login', user);
  }

  getCodeImg() {
    return this.http.get(this.url + 'code-img');
  }

  verifyPhone(phone) {
    return this.http.post(this.url + 'verify-phone', {phone});
  }

}
