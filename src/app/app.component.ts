import {Component} from '@angular/core';
// 具名导入
import Student, {HOST as host, add, Foo, Bar, ooxx} from './myModule';

// console.log(host);
// console.log(add(1, 1));
// console.log(Bar);

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
// console.log(c); // 3
// console.log(Color[1]); // Red


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
// console.log(myname);

// 接口 interface
interface Person3 {
  firstName: string;
  lastName: string;
}

function greeting3(person: Person3) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

greeting3({firstName: 'tom', lastName: 'jerry'});

// 类 class
class Greeter { // 类中三种成员：属性、构造函数、方法
  greeting: string; // 属性

  constructor(msg: string) { // 构造函数：通常用于属性初始化
    this.greeting = msg;
  }

  greet() { // 方法
    return 'Hello, ' + this.greeting;
  }
}

const greeter = new Greeter('world');
// console.log(greeter.greet());

// 继承
class Animal {
  // name: string;

  constructor(protected myName: string) {
  }

  move(distance: number = 0) {
    console.log(`${this.myName}移动了${distance}米`);
  }
}

class Dog extends Animal {
  // readonly age: number; // 只读属性，只能在声明时或者构造函数中赋值

  constructor(theName: string, readonly age: number) {
    super(theName); // 使用super()调用父类构造函数
  }

  bark() {
    console.log(this.myName);
    console.log('汪汪！');
  }

  move(distance: number = 5) { // 方法重写overiding
    console.log('奔跑');
    super.move(distance); // 使用super.xx访问父类成员
  }

  eat(food: string): boolean;
  eat(food: { name: string, amount: number }): { canEat: boolean, msg: string };
  eat(food: string | { name: string, amount: number }): any {
    if (typeof food === 'string') { // 方法1实现
      return food === 'bone';
    } else { // 方法2实现
      const canEat = food.name === 'bone' && food.amount < 3;
      let msg = '';
      if (food.name !== 'bone') {
        msg += '我只吃骨头！';
      }

      if (food.amount >= 3) {
        msg += '我只能吃两根！';
      }
      return {canEat, msg};
    }
  }
}

const dog = new Dog('汪星人', 2);

// dog.bark();
// dog.move();

// console.log(dog.name);

interface Point {
  x: number;
  y: number;
}

// 静态成员
class Grid {
  // origin原点是所有网格都会用到的属性
  static origin = {x: 0, y: 0};

  distance(point: Point) {
    const xDist = point.x - Grid.origin.x;
    const yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist);
  }
}

const grid = new Grid();
// console.log(Grid.origin.x, Grid.origin.y);
// console.log(grid.distance({x: 3, y: 4}));

// 存储器
class Employee {
  // 封装局部变量
  // 额外逻辑处理
  private firstName: string;
  private lastName: string;

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  // 'tom cruse'
  set fullName(value: string) {
    this.firstName = value.split(' ')[0];
    this.lastName = value.split(' ')[1];
  }
}

const e = new Employee();
e.fullName = 'James Harden';
// console.log(e.fullName);

// 函数参数必要性
function buildName(first: string = 'James', last?: string) {
  return first + last;
}

buildName('tom', 'jerry');
buildName('tom'); // 可选参 last?
buildName(); // 默认值

// 不使用泛型
function noGeneric1(arg: number): number {
  return arg;
}

function noGeneric2(arg: any): any {
  return arg;
}

interface Lengthwise {
  length: number;
}

// 使用泛型
// T称为类型变量，它是一种特殊的变量，只用于表示类型而不是值
function useGeneric<T extends Lengthwise>(arg: T): T {
  // console.log(arg.length);
  return arg;
}

// 用法1：完整语法
useGeneric<string>('myString'); // myString
// 用法2：利用类型推论省略<number>
useGeneric({length: 1, other: 'bla'}); // 1

// 泛型接口
interface Result<T, U> {
  success: boolean;
  data?: T;
  message?: U;
}

interface User {
  id: number;
  name: string;
}

const r: Result<User, string> = {
  success: true,
  data: {id: 1, name: 'tom'},
  message: 'lalala'
};

// 泛型类
class Result2<T> {
  constructor(public success: boolean, public data: T) {
  }
}

const r2: Result2<User> = new Result2<User>(true, {id: 1, name: 'tom'});
// console.log(r2.success);
// console.log(r2.data);

// 泛型约束

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
