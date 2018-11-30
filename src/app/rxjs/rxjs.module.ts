import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RxjsRoutingModule} from './rxjs-routing.module';
import {RxjsComponent} from './rxjs.component';

@NgModule({
  declarations: [RxjsComponent],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule {
}
