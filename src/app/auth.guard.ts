import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user/user.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private us: UserService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next, state);

    return this.us.isLogin().pipe(
      tap(// 监听返回结果，如果没有登录则跳转至登录页
        isLogin => {
          if (!isLogin) {
            this.router.navigate(['/user/login']);
          }
        }
      )
    );
  }
}
