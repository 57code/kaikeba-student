import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {PanelComponent} from './panel/panel.component';

const comps = [
  MenuComponent,
  PanelComponent
];

@NgModule({
  declarations: [comps],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [comps]
})
export class MyCompsModule {
}
