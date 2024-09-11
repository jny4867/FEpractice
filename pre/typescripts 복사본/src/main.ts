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

// const a: any ='123';

// const any1 = a + 1;
// const any2 = a - 1;
// const any3 = a * 1;
// const any4 = a + '1';
// const any5 = a / 1;

// fetch('url').then<{data}>((response) => {
//     return response.json();
// }).then((result) => {

// })
// const result: {hello:string} = JSON.parse('{"hello":"json"}');

// try{

// }catch (e){
//     const error = e as Error; //as로 타입 주장
//     console.log(error.message);
// }

// const obj = {name: 'kim'};

// function add(a:number,b:number){
//     return a + b;
// }

// function isEven(num: number) {
//     return num % 2 === 0;
// }

// function plus(x: number, y:number):number{ //소괄호 뒤의 타입은 반환값의 타입
//     return x+y;
// }

// const minus = (x:number, y:number): number => x - y;

// function getBigger<T>(num1: T, num2:T):T {
//     return num1 > num2 ? num1 : num2;
// }

// console.log(getBigger(3,7));
// console.log(getBigger('one','two'));

// type IsString<T> = T extends string ? true : false
// type Test1 = IsString<string>;
// type Test2 = IsString<number>;

// type StringS<T> = T extends string ? T : never;
// type Test1 = StringS<string | boolean | number>;


// function IsString<T>(item:T){
//     if(typeof(item) === "string"){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(IsString(4));
// console.log(IsString("Hello"));

// function add(a:string, b:string):string;
// function add(a: number, b: number): number;
// function add(a:any, b:any):any{
//     return a+b;
// }

// function removeD<T>(array: T[]): T[] {
//     return Array.from(new Set(array));
// }

// // 사용 예시:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeD(numbers);
// console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// const strings = ["a", "b", "a", "c", "b"];
// const uniqueStrings = removeD(strings);
// console.log(uniqueStrings); // ["a", "b", "c"]

// const mixed = [1, "a", 1, "a", 2];
// const uniqueMixed = removeD(mixed);
// console.log(uniqueMixed); // [1, "a", 2]




// function getLength(value: string): number;
// function getLength<T>(value: T[]): number;

// function getLength(value: any): number {
//     return value.length;
// }

// // 사용 예시:
// console.log(getLength([1, 2, 3, 4])); // 4
// console.log(getLength("Hello, TypeScript!")); // 18


// class Person{
//     name?: string;
//     age: number;
//     married: number;
//     value: number;
//     constructor( name: string, age: number, married: boolean){
//         this.name = name;
//         this.age = age;
//         this.married = married;

//     }
// }

// type FirstElement<T> = T extends [infer First, ...any[]] ? First : never;

// type Tuple1 = [string, number, boolean];
// type Tuple2 = [boolean, number];

// type FirstOfTuple1 = FirstElement<Tuple1>; // string
// type FirstOfTuple2 = FirstElement<Tuple2>; // boolean

// // 테스트
// const first1: FirstOfTuple1 = "Hello"; // 올바른 타입
// const first2: FirstOfTuple2 = true;    // 올바른 타입

// // 오류 예시 (타입이 일치하지 않음)
// // const first1Error: FirstOfTuple1 = 123; // 오류 발생
// // const first2Error: FirstOfTuple2 = "wrong"; // 오류 발생


class Animal {
    // name은 private 접근제어자
    private name: string;

    // age는 protected 접근제어자
    protected age: number;

    // 생성자는 name과 age를 초기화
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // getName() 메서드: name을 반환
    public getName(): string {
        return this.name;
    }

    // getAge() 메서드: age를 반환
    public getAge(): number {
        return this.age;
    }
}

// Dog 클래스는 Animal을 상속
class Dog extends Animal {
    // breed는 문자열 타입 속성
    public breed: string;

    // 생성자에서 name, age, breed를 초기화
    constructor(name: string, age: number, breed: string) {
        super(name, age); // 부모 클래스의 생성자 호출
        this.breed = breed;
    }

    // bark() 메서드: "Woof!" 문자열을 반환
    public bark(): string {
        return "Woof!";
    }
}

// 사용 예시
const myDog = new Dog("Buddy", 3, "Golden Retriever");

console.log(myDog.getName()); // Buddy
console.log(myDog.getAge());  // 3
console.log(myDog.bark());    // Woof!
console.log(myDog.breed);     // Golden Retriever