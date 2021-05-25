// let a;
// a = 12;
// data types
let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[];
let f: string[] = [];
let g: any[] = ['a', true, 0];

function add(v1: number, v2: number) {
  console.log('result', v1 + v2);
}

add(20, 20);

let str: string;
str = 'hello';
console.log(str.toUpperCase());

// type assersion
let str2: any;
// 1 way
const way1 = (<string>str2).toLowerCase();
// 2 way
const way2 = (str2 as string).toLowerCase();
