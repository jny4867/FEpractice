// function Point(x,y) {
//     this.x=x;
//     this.y=y;
// }
// Point.prototype = {
//     toString: function() {
//         return `(${this.x}, ${this.y})`;
//     }
// }

// let pt1 = new Point(10,20);
// let pt2 = new Point(100,200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// console.log(pt1 instanceof Point);
// console.log(pt2 instanceof Point);

// function Circle(radius){
//     this.radius = radius;
//     this.getArea = function() {
//         return Math.PI * this.radius ** 2;
//     }
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

// function Circle(radius){
//     this.radius = radius;
// }

// Circle.prototype.getArea = function() {
//     return Math.PI * this.radius ** 2;
// };

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

// class Person{}
// const me = new Person{};
// const Person = class MyClass{};
// const me = new Person();
// console.log(me);

// const Person = (function(){
//     function Person(name){
//         this.name = name;
//     }
//     Person.prototype.sayHi = function() {
//         console.log('Hi'+this.name);
//     };
    
//     Person.sayHello = function() {
//         console.log('Hello');
//     };

//     return Person;
// }());
// const me = new Person('Lee');
// console.log(me.name);
// me.sayHi();
// Person.sayHello();


// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log(`Hi ${this.name}`);
//     }

//     static sayHello(){
//         console.log('Hello');
//     }
// }
// const me = new Person('Lee');
// me.sayHi();
// Person.sayHello();

// class Person{

//     constructor(name){
//         this.name = name;
//     }
// }

// class Person {
//     constructor(name, address){
//         this.name = name;
//         this.address = address;
//     }
// }
// const me = new Person('Lee', 'Seoul');
// console.log(me);
// class Person {
//     constructor(name, address){
//         this.name = name;
//         this.address = address;

//         return {};
//         return 100;
//     }
// }
// const me = new Person('Lee', 'Seoul');
// console.log(me);
// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log(`Hi ${this.name}`);
//     }
//     static sayHello(){
//         console.log('Hello');
//     }
// }
// const me = new Person('Lee');
// me.sayHi();
// Person.sayHello();

// class Square{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     area(){
//         return this.width * this.height;
//     }
// }
// const square = new Square(10, 20);
// console.log(square.area());
// class Square{
//     static area(width, height){
//         return width * height;
//     }
// }
// console.log(Square.area(10, 10));

// const person = {
//     firstName: 'Minji',
//     lastName: 'Choi',

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fulName(name){
//         [this.firstName, this.lastName] = name.split('');
//     }
// };
// console.log(`${person.firstName} ${person.lastName}`);
// console.log(person.fulName);

// class Person {
//     name = 'Lee';
//     constructor(){
//         this.name = name;
//     }
// }
// new Person();

// class Person {
//     #name = '';
//     constructor(name) {
//         this.#name = name;
//     }

// }
// const me = new Person('Lee');
// console.log(me.#name); //SyntaxError: Private field '#name' must be declared in an enclosing class (at class.js:171:15) 클래스 외부에서 참조할 수없다
// class Person {
//     #name = '';
//     constructor(name) {
//         this.#name = name;
//     }
//     get name(){ //접근자 프로퍼티를 이용하여 참조 가능
//         return this.#name.trim();
//     }
// }
// const me = new Person('Lee');
// console.log(me.name);

// class Vehicle {
//     constructor(name, wheel){
//         this.name = name;
//         this.wheel = wheel;
//     }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//     constructor(name, wheel){
//         super(name, wheel)
//     }
// }
// const myBicycle = new Bicycle('따릉이',2)
// const kidsBicycle = new Bicycle('세발',3)
// console.log(myBicycle)
// console.log(kidsBicycle)

// class Car extends Vehicle{
//     constructor (name, wheel, license){
//         super(name, wheel)
//         this.license = license
//     }
// }
// const myCar = new Car('벤츠', 4, true)
// const wifeCar = new Car('포르쉐', 4, false)

// console.log(myCar)
// console.log(wifeCar)

// class Base {
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }
// }

// class Derived extends Base{
//     constructor(a,b,c){
//         super(a,b);
//         this.c=c;
//     }
// }
// const derived = new Derived(1,2,3);
// console.log(derived)


// class Base {
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         return `Hi! ${this.name}. How are you doing?`;
//     }
// }

// class Derived extends Base{
//     sayHi(){
//         return `${super.sayHi}`
//     }
// }
// const derived = new Derived('Lee');
// console.log(derived.sayHi());


// // Book 생성자 함수 정의
// function Book(title, author, price) {
//     this.title = title;
//     this.author = author;
//     this.price = price;
// }

// // 프로토타입을 이용하여 공통 프로퍼티 추가
// Book.prototype.publicationDate = null;
// Book.prototype.pageCount = 0;

// // 예시: Book 객체 생성
// const book1 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', 29.99);
// book1.publicationDate = '2008-05-15';
// book1.pageCount = 176;

// const book2 = new Book('Eloquent JavaScript', 'Marijn Haverbeke', 39.99);
// book2.publicationDate = '2018-12-04';
// book2.pageCount = 472;

// // 결과 출력
// console.log(book1);
// console.log(book2);
// console.log(book1.title); // JavaScript: The Good Parts
// console.log(book1.publicationDate); // 2008-05-15
// console.log(book2.pageCount); // 472

/*****************************************************************************/
class Person {
    // 생성자 함수: name과 age를 받아 객체를 초기화합니다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // introduce 메서드: "저는 {name}이고 {age}살 입니다."라는 문장을 출력합니다.
    introduce() {
        console.log(`저는 ${this.name}이고 ${this.age}살 입니다.`);
    }
}

// Person 객체 생성
const person1 = new Person('홍길동', 25);
const person2 = new Person('이순신', 30);

// introduce 메서드 호출
person1.introduce(); // 출력: 저는 홍길동이고 25살 입니다.
person2.introduce(); // 출력: 저는 이순신이고 30살 입니다.


/*****************************************************************************/



// Calculator 클래스 정의
class Calculator {
    // 정적 메서드: 두 숫자를 더합니다.
    static add(a, b) {
        return a + b;
    }

    // 정적 메서드: 두 숫자를 뺍니다.
    static subtract(a, b) {
        return a - b;
    }
}

// 정적 메서드를 사용하여 숫자를 더하고 뺍니다.
const sum = Calculator.add(10, 5); // 10 + 5 = 15
const difference = Calculator.subtract(10, 5); // 10 - 5 = 5

// 결과 출력
console.log(`Sum: ${sum}`); // 출력: Sum: 15
console.log(`Difference: ${difference}`); // 출력: Difference: 5
