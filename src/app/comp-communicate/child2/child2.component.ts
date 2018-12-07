import {Component, OnInit} from '@angular/core';
import {CommunicateService} from '../communicate.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private cs: CommunicateService) {
  }

  ngOnInit() {
    this.cs.ob.subscribe(
      msg => alert(msg)
    );
  }

}
