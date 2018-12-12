import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {PanelComponent} from './panel/panel.component';
import {BoxComponent} from './box/box.component';
import {StPipe} from './st.pipe';
import {PathItemComponent} from './path-item/path-item.component';
import {PlanItemComponent} from './plan-item/plan-item.component';

const comps = [
  MenuComponent,
  PanelComponent,
  BoxComponent,
  StPipe,
  PathItemComponent,
  PlanItemComponent
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
