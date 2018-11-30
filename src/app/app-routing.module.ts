import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// 配置路由
const routes: Routes = [
  // {path: '**', component: NotFoundComponent},
  {path: '', pathMatch: 'full', redirectTo: '/user/login'},
  {path: '**', redirectTo: '/user/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
