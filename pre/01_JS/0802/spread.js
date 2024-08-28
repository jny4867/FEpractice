// function foo(...rest){
//     console.log(rest);
// }
// foo(...[1,2,3]);

// var arr3 =[1,4];
// var arr4 =[2,3];
// arr3.splice(1,0,arr4);
// console.log(arr3);

// arr3.splice(1,0,...arr4);
// console.log(arr3);

// const origin = [1,2];
// const copy = origin.slice();

// console.log(copy);
// console.log(copy === origin);

// const origin = [1,2];
// const copy = [...origin];
// console.log(copy);
// console.log(copy === origin);

// function sum(){
//     return [...argument].reduce((pre, cur) => pre + cur, 0);
// }
// console.log(sum(1,2,3));


// const sum(...args) => args.reduce((pre, cur) => pre + cur, 0);
// console.log(sum(1,2,3));

// const obj = {x: 1, y:2};
// const copy = {...obj};
// console.log(copy);
// console.log(obj === copy);

// const merged = {x: 1, y: 2, ... {a: 3, b: 4}};
// console.log(merged);
// const merged = Object.assign({},{x: 1, y: 2},{y: 10, x: 3});
// console.log(merged);
// const merged = {...{x: 1, y: 2}, ... {y: 10, x: 3}};
// console.log(merged);

// const arr = [1,2,3];
// const [one, two, three] = arr;
// console.log(one,two,three);

// const [a,b] = [1,2];
// console.log(a,b);

// const [c,d] = [1];
// console.log(c,d);

// const user = {firstName : 'Minji', lastName: 'Choi'};
// const firstName = user.firstName;
// const lastName = user.lastName;
// console.log(firstName, lastName);

// const user = {firstName: 'Minji', lastName: 'Choi'};
// const {lastName, firstName} = user;
// console.log(lastName, firsrtName);

// function printTodo(todo){
//     console.log(`할 일 ${todo.content}은 ${todo.completed ? '완료' : '미완료'}상태입니다.`);
// }
// printTodo({id: 1, content: 'HTML', completed: true});
// function printTodo({content, completed}){
//     console.log(`할 일 ${content}은 ${completed ? '완료' : '미완료'} 상태입니다.`);
// }
// printTodo({id: 1, content: 'HTML', completed: true});

// const user = {
//     name:'LEE',
//     address: {
//         zipCode: '03068',
//         city : 'Seoul'
//     }
// }
// const {address: {city}} = user;
// console.log(city);


const person = { userName: 'Jeon', userAge: 25};
const userName = person.userName;
const userAge = person.userAge;
console.log(`제 이름은 ${userName}이고 나이는 ${userAge}세 입니다.`)