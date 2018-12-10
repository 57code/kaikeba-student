import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {PanelComponent} from './panel/panel.component';
import {BoxComponent} from './box/box.component';
import {StPipe} from './st.pipe';

const comps = [
  MenuComponent,
  PanelComponent,
  BoxComponent, StPipe
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
