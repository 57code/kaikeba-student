import {Component} from '@angular/core';

// 变量、常量
let name = 'tom';
const PI = 3.1415926;
let foo: string; // 声明变量类型
foo = 'foo'; // ok
let isDone: boolean; // 声明布尔型
isDone = true; // ok
name = 'jerry';

const names: string[] = ['a', 'b'];

// 元组
let x: [string, number];
x = ['hello', 10]; // ok

// 任意类型any
let notSure: any;
notSure = 4;
notSure = 'aaaa';

// any也能用于数组
const list: any[] = [1, true, 'aaa'];
list[1] = 100;

// 枚举
enum Color {Red = 1, Green = 2, Blue = 3}

const c: Color = Color.Blue;
console.log(c); // 3
console.log(Color[1]); // Red


// 函数中使用类型约束
function greeting(person: string): string {
  return 'Hello, ' + person;
}

greeting('tom');

// void类型
function warnUser(): void {
  alert('aaaaaaaa');
}

// 接口
interface Person {
  firstName: string;
  lastName: string;
}

function greeting2(person: Person) {
  return 'hello, ' + person.firstName + ' ' + person.lastName;
}

const myname = greeting2({firstName: 'tom', lastName: 'cruise'});
console.log(myname);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
