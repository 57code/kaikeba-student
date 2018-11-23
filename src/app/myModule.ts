// 具名导出
export const HOST = 'http://localhost:4200';

export function add(a, b) {
  return a + b;
}

export class Foo {
  bar: string;
}

// 导出语句
const Bar = 'bar';
const abc = 'abc';
export {Bar, abc as ooxx};

// 默认导出
export default class Student {
  name: string;
}
