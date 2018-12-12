import {Component, Input, OnInit} from '@angular/core';
import {Stage} from '../../main/ucenter/course/course.service';

@Component({
  selector: 'app-path-item',
  templateUrl: './path-item.component.html',
  styleUrls: ['./path-item.component.css']
})
export class PathItemComponent {
  @Input() stage: Stage;
  open = false;
  showButton = false;
}
