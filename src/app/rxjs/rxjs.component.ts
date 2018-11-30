import {Component, OnInit} from '@angular/core';
import {fromEvent, interval, Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {filter, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  template: `
    <p id="p1">
      rxjs works!
    </p>
  `,
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // Observable对象创建, 构造函数中传入订阅函数，其参数是观察者
    const ob1 = new Observable((observer) => {
      setInterval(() => {
        // 请求成功，发送数据
        observer.next({success: true, data: 1});
        observer.next({success: true, data: 2});
        observer.next({success: true, data: 3});
        // 如果出错，执行error()
        // observer.error({success: false, data: 1});
        // 如果请求结束，执行complete()
        // observer.complete();
      }, 2000);
    });

    // 获得实例后，订阅
    const subscription = ob1.subscribe((result) => {
      console.log(result);
      // 通过订阅对象可取消
      subscription.unsubscribe();
    }, (error) => {
      console.error(error);
    }, () => {
      console.log('complete！');
    });


    // 通过promise创建
    const ob2 = fromPromise(fetch('assets/data.json'));
    ob2.subscribe({
      next(resp) {
        console.log(resp);
      },
      error(error) {
        console.log(error);
      }
    });

    // 通过定时器构造
    const ob3 = interval(1000).pipe(
      take(5)
    );
    ob3.subscribe(val => console.log('计数：' + val));

    // 通过事件构造
    const ob4 = fromEvent(document.getElementById('p1'), 'click');
    ob4.subscribe((evt: MouseEvent) => {
      console.log(evt.clientX + '-' + evt.clientY);

    });

    // 通过已存在的值
    const ob5 = of(1, 2, 3, 4); // Observable<number>
    const ob6 = of([1, 2, 3, 4]); // Observable<Array<number>>
    const ob7 = of({foo: 'bar'}); // Observable<{foo:string}>


    // 操作符
    ob5.pipe(
      filter(n => n % 2 !== 0), // 过滤奇数
      map(n => n * n), // 求平方
      // ...
    ).subscribe(
      n => console.log(n)
    );

  }

}
