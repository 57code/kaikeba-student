import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {UcenterComponent} from './ucenter/ucenter.component';
import {CourseComponent} from './course/course.component';
import {CourseComponent as CourseListComponent} from './ucenter/course/course.component';
import {MessageComponent} from './ucenter/message/message.component';
import {CommentComponent} from './ucenter/comment/comment.component';
import {CollectionComponent} from './ucenter/collection/collection.component';
import {AccountComponent} from './ucenter/account/account.component';
import {AuthGuard} from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'ucenter', component: UcenterComponent, children: [
          {path: 'course', component: CourseListComponent},
          {path: 'message', component: MessageComponent},
          {path: 'comment', component: CommentComponent},
          {path: 'collection', component: CollectionComponent},
          {path: 'account', component: AccountComponent},
          {path: '', pathMatch: 'full', redirectTo: '/main/ucenter/course'}
        ]
      },
      {path: 'course/:classId', component: CourseComponent},
      // /main/
      {path: '', pathMatch: 'full', redirectTo: '/main/ucenter'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
