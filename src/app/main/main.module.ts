import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {UcenterComponent} from './ucenter/ucenter.component';
import {CourseComponent} from './course/course.component';
import {CourseComponent as PathComponent} from './ucenter/course/course.component';
import {MessageComponent} from './ucenter/message/message.component';
import {CommentComponent} from './ucenter/comment/comment.component';
import {CollectionComponent} from './ucenter/collection/collection.component';
import {AccountComponent} from './ucenter/account/account.component';
import {MyCompsModule} from '../common/my-comps.module';
import {MenuComponent} from '../common/menu/menu.component';
import {NgxUploaderModule} from 'ngx-uploader';

@NgModule({
  declarations: [
    MainComponent, // 当前模块根组件
    UcenterComponent, // 子组件usercenter
    CourseComponent, // 子组件course
    PathComponent, // 孙子组件path
    MessageComponent,
    CommentComponent,
    CollectionComponent,
    AccountComponent,
    // MenuComponent,
  ],
  imports: [
    CommonModule,
    MyCompsModule,
    MainRoutingModule,
    NgxUploaderModule
  ]
})
export class MainModule {
}
