import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CommunicateService} from '../communicate.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  private _uname: string;
  private changeLog: string[] = [];

  get uname(): string {
    return this._uname;
  }

  @Input()
  set uname(value: string) {
    this._uname = (value && value.trim()) || '无名氏';
  }

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cs: CommunicateService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 当前组件中成员属性值发生变化时，我有额外的事情要做时
    const chng = changes['uname'];
    let log: string;

    if (chng) { // 确定变化发生在uname上
      // 获取当前值和之前值，日志记录
      const currValue = chng.currentValue;
      // 是否首次赋值
      if (chng.isFirstChange()) {
        log = `设置uname初始值为${currValue}`;
      } else {
        const previousValue = chng.previousValue;
        log = `uname值由${previousValue}为${currValue}`;
      }
      this.changeLog.push(log);
    }
  }

  changeName() {
    this.uname = 'BlaBla';
    // 通知父组件
    this.change.emit(this.uname);
    // 通知其他组件
    this.cs.emit('大哥，我改名了！！');
  }
}
