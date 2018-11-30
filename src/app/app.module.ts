import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './user/user.module';
import {RxjsModule} from './rxjs/rxjs.module';

@NgModule({
  declarations: [// 声明组件/管道/指令
    AppComponent
  ],
  imports: [ // 导入ng模块
    BrowserModule,
    HttpClientModule,
    UserModule,
    RxjsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
