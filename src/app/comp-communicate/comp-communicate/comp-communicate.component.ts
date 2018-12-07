import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-comp-communicate',
  templateUrl: './comp-communicate.component.html',
  styleUrls: ['./comp-communicate.component.css']
})
export class CompCommunicateComponent implements OnInit, AfterViewInit {
  uname = 'Jerry';
  names = ['Mike', ' ', ' Jackson '];

  @ViewChild('child') child: ElementRef;

  constructor() {
    // console.log(this.child);
  }

  ngAfterViewInit(): void {
    // console.log(this.child);
    console.log(this.child['uname']);
    // console.log(this.child.nativeElement);
  }

  ngOnInit() {
    // console.log(this.child);
  }

  onchange(newName) {
    alert('儿子改名了：' + newName);
  }
}
