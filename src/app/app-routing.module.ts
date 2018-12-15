import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy.service';

// 配置路由
const routes: Routes = [
  // {path: '**', component: NotFoundComponent},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule',
    data: {preload: true}
  },
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: '**', redirectTo: '/user/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: SelectivePreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
