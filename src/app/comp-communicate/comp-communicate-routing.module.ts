import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompCommunicateComponent} from './comp-communicate/comp-communicate.component';

const routes: Routes = [
  {path: 'cc', component: CompCommunicateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompCommunicateRoutingModule {
}
