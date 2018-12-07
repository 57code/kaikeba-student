import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
  // 发送数据源
  private subject = new Subject<string>();
  // 消费者用来监听的Observable
  ob = this.subject.asObservable();

  emit(msg) {
    this.subject.next(msg);
  }

}
