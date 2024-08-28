"use strict";
// const add = function(a: number,b: number):number{
//     return a + b
// }
// function add2(a: number,b: number):number{
//     return a + b
// }
// const result = add2(1,2);
// const str ="hello"
// const num = 123;
// const bool=false;
// const n =null;
// const u = undefined;
// const sym = Symbol('sym');
// const obj = {hello: 'world'}
// let str ="hello"
// let num = 123;
// let bool=false;
// let n =null; //any
// let u = undefined; //any
// let sym = Symbol('sym');
// let obj = {hello: 'world'}
// let str: 'hello' = 'hello';
// str = 'world'
// const obj = {name: 'kim'};
// const arr = [1, 2, 'three'];
// const obj = {name : 'kim'} as const;
// const arr = [1, 2, 'three'] as const;
// obj.name = 'lee'
// arr.push(4);
// const arr1 : string[] = ['1', '2', '3'];
// const arr2 : Array<number> = [1,2,3];
// arr1.push('4');
// console.log(arr1);
// const arr3 = [1,2,3];
// const arr4 = [1,'2',3];
// const arr5 = [];
// const tuple: [number, boolean, string] = [1, true, 'hello'];
// tuple[0] = 3;
// tuple[2] = 'world';
// tuple.push('hello');
// console.log(tuple);
// const strNumBools: [string, number, ...boolean[]] 
// = ['hello', 1, false, true, false,];
// const arr1 = ['hello', true];
// const arr = [1, ...arr1];
// const [ a, ...rest] = ['hello', 1, 2, 3];
// const [b, ...rest2]: [string, ...number[]] = ['hello', 1, 2, 3];
// function add(x: Number, y:Number) {return x + y};
// const str1: String = 'hello';
// const str2: String = str1;
// function add(x: number, y: number){return x + y}
// // const result1: add(1,2) = add(1,2);
// // const reault2: typeof add(1,2) = add(1,2);
// const add2: typeof add = (x:number, y:number) => x + y
// let strNum: string | number = 'hello';
// strNum = 1;
// const arr = [1, '2', 3]
// function unionType(value: string | number): number{
//     if(typeof value ==='string'){
//         return parseInt(value);
//     }
//     return value;
// }
// unionType(1);
// unionType('1');
// let str: any = 'hello';
// const result = str.toFixed(); //str은 문자열인데 any 때문에 toFixed에 들어갈 수 있게됨; any는 웬만하면 쓰지 말자. 타입 검사를 포기한다는 선언과 같기 때문이다.
// const arr: string[] = [];
// const arr = [];
// arr.push('1');
// arr;
const a = '123';
const any1 = a + 1;
const any2 = a - 1;
const any3 = a * 1;
const any4 = a + '1';
const any5 = a / 1;
