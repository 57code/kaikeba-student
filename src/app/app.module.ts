import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RxjsModule} from './rxjs/rxjs.module';
import {HomeComponent} from './home/home.component';
import {CompCommunicateModule} from './comp-communicate/comp-communicate.module';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {SecureModule} from './secure/secure.module';

// 注册语言数据
registerLocaleData(zh);

@NgModule({
  declarations: [// 声明组件/管道/指令
    AppComponent, HomeComponent
  ],
  imports: [ // 导入ng模块
    BrowserModule,
    HttpClientModule,
    // UserModule,
    RxjsModule,
    SecureModule,
    CompCommunicateModule,
    // MainModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'zh'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
