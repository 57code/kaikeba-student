import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompCommunicateComponent} from './comp-communicate/comp-communicate.component';
import {CompCommunicateRoutingModule} from './comp-communicate-routing.module';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [CompCommunicateComponent, ChildComponent, Child2Component],
  imports: [
    CommonModule,
    CompCommunicateRoutingModule
  ]
})
export class CompCommunicateModule {
}
