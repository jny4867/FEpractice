// function callback(){
//     console.log('콜백 함수가 호출됨');
// }
// setTimeout(callback, 1000);
// console.log('작업을 수행함');

// function getUsers(callback){
//     setTimeout (() => {
//     callback([
//             {name:'Kim', email:'kim@email.com'},
//             {name:'Lee', email:'lee@email.com'},
//             {name:'Park', email:'park@email.com'}
//         ]);
//     }, 1000)
// }

// function findUser(name, callback){
//     getUsers (users => {
//         const user = users.find(user => user.name === name);
//         callback(user.email);
//     })
// }

// let user = findUser('Kim', user => {
//     console.log(user);
// });

// let greeting = document.querySelector('#greeting');
// greeting.addEventListener('click', sayHello);
// function sayHello(){
//     alert('안녕하세요');
// }

// function increase(n, callback){
//     setTimeout( () => {
//         const increased = n + 1;
//         console.log(increased);
//         callback(increased);
//     },1000);
// }
// increase(0, n =>
//     increase(n, n =>
//         increase(n, n =>
//             increase(n, n =>
//                 console.log('콜백')
//             )
//         )
//     )
// )


// let success = true;
// function getUser() { //Promise를 반환하는 함수
//     return new Promise((resolve, reject) => {
//         if(success){
//             setTimeout(() => {
//                 resolve(
//                     [
//                         {name:"Kim", email:'kim@rmail.com'},
//                         {name:'Lee', email:'lee@email.com'},
//                         {name:'Park', email:'park@email.com'}
//                     ]
//                 )
//             }, 1000);
//         }else{
//             reject('실패');
//         }
//     })
// } 
// let promise = getUser(); //getUser함수를 호출하여 반환된 Promise를 저장

// promise .then(users => users.find(user => user.name ==='Kim'))
// .then(user => console.log(user.email))
// .catch(error => console.error(error))
// .finally(() => console.log('작업완료'))


// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000));
// // const p2 = new Promise((resolve, reject) => setTimeout(() => reject('실패함'), 1000)); //p2가 reject 되면서 연산 자체가 실패함
// const p3 = new Promise((resolve, reject) => setTimeout(() => resolve(30), 3000));
// let promises = [p1, p2, p3]

// Promise.all(promises) // promise.all() 메서드에서 reject 되면서 연산 실패
// .then(results => {
//     const total = results.reduce((s, r) => s + r);
//     console.log(`결과: ${results}`);
//     console.log(`합계: ${total}`);

// }) // 병렬 promise

// Promise.allSettled(promises) //allSettled는 실행을 완료하기를 기다렸다가 객체 반환
// .then(results => {
//     const fulfilledResults= results
//     .filter(result => result.status === 'fullfilled')
//     .map(result => result.status === 'fulfilled')
//     const total = fulfilledResults.reduce((sum, value) => sum + value, 0)
//     console.log(`결과: ${fulfilledResults}`);
//     console.log(`합계: ${total}`);

// }) // 병렬 promise

// function getUser() { //순차 Promise
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve([
//                {name:"Kim", email:'kim@rmail.com'},
//                {name:'Lee', email:'lee@email.com'},
//                {name:'Park', email:'park@email.com'}
//         ])
//     }, 1000);
// });
// }

// function findUser(users){
//     return new Promise((resolve, reject) => {
//         console.log(users);
//         setTimeout(() => {
//             resolve(users.find(user => user.name === 'Kim'), 1000);
//         });
//     })
// }
// function getEmail(user){
//     return new Promise((resolve, reject) => {
//         console.log(user);
//         setTimeout(() => {
//             resolve(user.eamil);
//         }, 3000);
//     });
//     }
//     getUser()
//     .then(findUser)
//     .then(getEmail)
//     .then(console.log)


//     const promise1 = new Promise((resolve, reject) => {
//         setTimeout(resolve, 500, 'first value');

//     })
//     const promise2 = new Promise((resolve, reject) => {
//         setTimeout(resolve, 100, 'second value');

//     })
//    Promise.race([promise1, promise2]).then(function(value){
//     console.log(value) //race 함수는 이터러블에 포함된 프로미스들 중 가장 먼서 성공/실패한 결과를 반환한다. (second value 출력)
//    })



//예제 1
//    const promiseA = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'A');
//    })
//    const promiseB = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'B');
//    })
//    Promise.allSettled([promiseA, promiseB]).
//    then((results) => {
//     console.log('완료!');
//    }
// );

// const promisea = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('A');
//     },1000);
// });
// const promiseb = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('B');
//     },2000);
// });

// let promises = [promisea, promiseb];
// Promise.all(promises).then((results) => {
//     console.log('완료', results);
// })


//예제 2
// let result = 5
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, result)
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1500, result*10)
// })

// let promises = [promise1, promise2];
// Promise.all(promises)
// .then((results) => {
//     console.log('완료', results);
// })
// .catch((error) => {
//     console.error('에러!');
// })


//async
//비동기 연산을 처리하는 함수를 정의하는데 사용
// async function sayHello(){ //function 앞에
//     return "안녕";
// }
// sayHello()
// .then(console.log)


// let sayHello = async function() { //함수 표현식
//     return "안녕2"
// }
// sayHello()
// .then(console.log)

// let sayHello = async() => "안녕3" //화살표 함수
// sayHello()
// .then(console.log)

// class Greeter { //class
//     async sayHello() {
//         return '안녕4'
//     }
// }
// const greeter = new Greeter();
// greeter.sayHello()
// .then(console.log)

// async function sayHello() { //Promise 객체를 반환
//     return Promise.resolve('안녕5');
// }
// sayHello()
// .then(console.log);

// async function sayHello() { //Promise 객체를 반환
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('안녕6'), 1000);
//     })
// }
// sayHello()
// .then(console.log)


//await resolve
// async function sayHello(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('안녕'), 1000);
//     })
// }
// async function display() {
//     let result = await sayHello();
//     console.log(result);
// }
// display();

// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject('거부'),1000);
//     })
// }
// async function display() { //거부됨 상태가 되면 try-catch 구문 실행
//     try{
//         let result = await sayHello();
//         console.log(result);
//     }catch(e) {
//         console.log(e);
//     }
// }
// display();

// function getUser() { //순차 Promise처럼 만들기
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve([
//                {name:"Kim", email:'kim@rmail.com'},
//                {name:'Lee', email:'lee@email.com'},
//                {name:'Park', email:'park@email.com'}
//         ])
//     }, 1000);
// });
// }
// function getEmail(user){
//     return new Promise((resolve, reject) => {
//         console.log(user);
//         setTimeout(() => {
//             resolve(user.email);
//         }, 3000);
//     });
// }

// function findUser(users, name){
//     return new Promise((resolve, reject) => {
//         console.log(users);
//         setTimeout(() => {
//             resolve(users.find(user => user.name === name));
//         }, 1000);
//     })
// }

// async function getUserEmail(name){
//     let users = await getUser();
//     let user = await findUser(users, name);
//     let email = await getEmail(user);
//     return email;
// }
// async function displayUserEmail(){
//     let email = await getUserEmail('Kim');
//     console.log(email);
// }
// displayUserEmail();

// const myPromise = () => new Promise((resolve) => {
//     resolve('Value is...');
// });

// function* gen() {
//     let result = '';
//     yield myPromise().then(data => {result = data});
//     yield result + '2';
// }

// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1);

// val1.value.then(() => {
//     console.log(asyncFunc.next());
// }); 

// async function* asyncSequence (from = 0, to = Infinity, interval = 1, timeout = 1000){
//     let next = from;
//     while(next <= to){
//         yield new Promise((resolve, reject) => {
//             setTimeout(() => resolve(next), timeout);
//         });
//         next += interval;
//     }
// }
// (async () => {
//     let seq = asyncSequence(2, 10, 2);
//     for await (let value of seq){
//     console.log(value);
//     }
// })();


//예제
// function asyncTask(duration, result) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => resolve(result), duration);
//     });
// }

// function* asyncGenerator() {
//     const result1 = yield asyncTask(1000, 'Task1');
//     console.log(result1);

//     const result2= yield asyncTask(1000, 'Task2');
//     console.log(result2);

//     const result3 = yield asyncTask(1000, 'Task3');
//     console.log(result3);
// }

// function runGenerator(gen){
//     const iterator = gen();

//     function handleNext(next){
//         if(next.done) return;
//         next.value.then(result => {
//             handleNext(iterator.next(result));
//         });
//     }
//     handleNext(iterator.next());
// }
// runGenerator(asyncGenerator);






/****************************************************************************/






// // Task 함수: 비동기 작업을 시뮬레이션하는 함수로, 지정된 시간 후에 결과를 반환하는 Promise를 반환합니다.
// function Task(time, result) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result), time);
//     });
// }

// // TaskGen 제너레이터 함수: 여러 비동기 작업을 순차적으로 실행합니다.
// function* TaskGen() {
//     // 첫 번째 비동기 작업을 수행하고 결과를 출력합니다.
//     const result1 = yield Task(1000, 'Task1 Fin');
//     console.log(result1);

//     // 두 번째 비동기 작업을 수행하고 결과를 출력합니다.
//     const result2 = yield Task(2000, 'Task2 Fin');
//     console.log(result2);

//     // 세 번째 비동기 작업을 수행하고 결과를 출력합니다.
//     const result3 = yield Task(3000, 'Task3 Fin');
//     console.log(result3);
// }

// // runGen 함수: 제너레이터를 실행하여 비동기 작업을 순차적으로 처리합니다.
// function runGen(gen) {
//     // 제너레이터 객체를 생성합니다.
//     const iterator = gen();

//     // handleNext 함수: 제너레이터의 next 메서드를 재귀적으로 호출하여 비동기 작업을 처리합니다.
//     function handleNext(next) {
//         // 제너레이터가 완료되면 함수를 종료합니다.
//         if (next.done) return;

//         // next.value는 Promise 객체입니다.
//         // Promise가 완료되면 다음 값을 제너레이터에 전달합니다.
//         next.value.then(result => {
//             handleNext(iterator.next(result));
//         });
//     }

//     // 제너레이터의 첫 번째 next 메서드를 호출하여 첫 번째 비동기 작업을 시작합니다.
//     handleNext(iterator.next());
// }

// // runGen 함수를 호출하여 TaskGen 제너레이터를 실행합니다.
// // 이 함수는 여러 비동기 작업을 순차적으로 처리합니다.
// runGen(TaskGen);



// /****************************************************************************/

// function* taskGenerator() {
//     yield new Promise((resolve) => setTimeout(() => resolve('1완료'), 2000));
//     yield new Promise((resolve) => setTimeout(() => resolve('2완료'), 2000));
//     yield new Promise((resolve) => setTimeout(() => resolve('3완료'), 2000));
// }

// const tasksDisplay = async () => {
//     const tasks =taskGenerator();
//     for(let task of tasks){
//         const result = await task;
//         console.log(result);
//     }
// }
// tasksDisplay();

// /****************************************************************************/

//async, await를 사용하여 비동기함수 호출
// async function userData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {name: 'kim', age:25},
//                 {name: 'lee', age:30},
//                 {name: 'jung', age:35}
//             ])
//         }, 1000);
//     });
// }
// async function display(){
//     let result = await userData();
//     console.log(result);
// }
// display();
