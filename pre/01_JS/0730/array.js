// //배열의 각 요소에서 값을 풀어서 한번에 여러 변수에 저장하는 구조 해체 대입

// let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450]
// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] = carSales;

// //for... of 문을 사용하여 배열에서 요소를 하나씩 가져오기
// let sum = 0;
// for(let sale of carSales)
//     sum += sale;
// let average = sum / carSales.length;
// let roundedAverage = average.toFixed(2);

// //for ... of문과 entries() 메서드를 사용하여 배열에서 인덱스와 배열 요소 값을 한꺼번에 하나씩 가져올 수 있다.
// let sum = 0;
// for(let [index, sale] of carSales.entries()){
//     if(index % 2 == 0)
//         sum += sale; 
// }
// let average = sum / (carSales.length / 2);

// //for of 와 for in의 차이
// let list = [4, 5, 6];
// for(let i in list) {
//     console.log(i);
// }
// for(let i of list){
//     console.log(i);
// }
// const me = [1,2,3,4,5]
// console.log(me);

// let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620]
// console.log(carSales)

//let carSales2 = new Array (300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620)
//console.log(carSales2)

/*let copy = Array.from(carSales)
//기존 배열을 목사해서 새로운 배열 생성 (생성 뒤에는 서로 영향을 미치지 않는다.)
console.log(copy)

let duple = [1, 2, 3, carSales, 5 ];
console.log(duple);

let numbers = [..."0123456789"];
console.log(numbers)*/

/*let may = carSales[4];
console.log(may)

carSales[4] = 680
console.log(carSales[4])

let june = carSales['5'];
console.log(june)

carSales[12] = -12
console.log(carSales)

let a = [1, 2, 3, 4, 5]
let len = a.legth
console.log(len);
a.length = 0;
console.log(a);*/

// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] = carSales;
// console.log(jan,fab,mar);
// console.log(rest);

// let sum = 0; //for of 문
// for(let sale of carSales)
//     sum  += sale;
// let average = sum / carSales.length;
// let roundedAverage = average.toFixed(2);
// console.log(average)
// console.log(roundedAverage)

// let sum = 0;
// for (let [index, sale ] of carSales.entries()) {
//     if(index % 2 === 0)
//         sum += sale; 
//     }
//     let average = sum / (carSales.length / 2);
//     console.log(average);
//     let roundedAverage = average.toFixed(2);
//     console.log(roundedAverage)

// let list = [4,5,6];
// for (let i in list){ //키의 목록을 반환 (인덱스 번호)
//     console.log(i);
// }
// for (let i of list){
//     console.log(i); //키의 값을 반환
// }

// const car = {
//     maker: "BMW",
//     color:"red",
//     year:"2012"
// }
// for(let prop of car){ //in으로 하면 오류하는 이유 체크
//     console.log(prop);
// }

//forEach는 새로운 배열을 반환하지 않는다.

// let sum = 0;
// carSales.forEach (sale => (sum += sale));
// let average = sum / carSales.length;
// console.log(average)

// carSales.forEach((sale, index, array) => {array[index] = sale + 50});
// console.log(carSales)

// let newCarSales = carSales.map(sale => sale + 50); //map은 새로운 배열을 생성하여 반환
// console.log(newCarSales);
// console.log(carSales);

// let highSales = carSales.filter( sale => sale > 500);
// console.log(highSales);

// let evenSales = carSales.filter((sale, index) => index % 2 ===1);
// console.log(evenSales)

// let firstSaleSix = carSales.find(sale => sale > 600)
// console.log(firstSaleSix); //find 메소드는 앞에서부터 찾아서 한가지 요소만 반환

// firstSalesSixIndex = carSales.findIndex(sale => sale > 600);
// console.log(firstSalesSixIndex)

// let allSaleSix = carSales.every( sale => sale >600);
// console.log(allSaleSix); //모든 요소가 600 이상인 게 아니기 때문에 false 

//  let anySaleSix = carSales.some(sale => sale >600)
//  console.log(anySaleSix); //600보다 큰 요소가 존재하기 때문에 true 반환

// let sum = carSales.reduce((t1, t2) => t1 + t2, 0); 
// // reduce 메소드 다시 확인  MDN문서
// console.log(sum);
// let average = sum / carSales.length;
// console.log(average);

// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1 : t2)); // t1이 t2보다 크면 t1 반환, 아니면 t2 반환
// console.log(highest)

// let flat = [1, [2, 3]].flat(); //2차원 배열까지만 풀어줄 수 있음
// console.log(flat);

// let message = ['오늘 날씨가', '너무 더워요']
// let words = message.flatMap(msg => msg.split('')); //split 함수 다시 보기
// console.log(words)

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2) //두 배열을 합해준다?
// console.log(array3)

// let original = [1,2,3]
// let newArray;
// newArray = original.concat(4,5)
// newArray = original.concat([4,5],[6,7])
// console.log(newArray)

//let stack = [];

// stack.push(1);
// stack.push(2,3);

// stack.pop() //뒤에 추가, 뒤에 삭제 LIFO
// console.log(stack)

// stack.push(4)
// console.log(stack)

// stack.unshift(1);
// console.log(stack);
// stack.unshift(2,3); //unshift는 배열의 앞에 요소를 추가
// console.log(stack);
// stack.shift(); //배열의 처음에 있는 요소를 삭제 LIFO인 건 매한가지...
// console.log(stack);







//예제1
//  let numbers =  [20, 37, -21, 32, -2]
//  document.write(numbers.filter(numbers => numbers > 30))
//  document.write(numbers[1]+ ",");
//  document.write(numbers[3]+ ",");


// let a = [1, 2, 3, 4, 5]
// // a.splice(0,2) // 인덱스 0에서 부터 두개 요소를 삭제
// // a.splice(2); // 인덱스 2부터 전부 삭제 
// a.splice(0,2,10,20); //0에서 부터 두개 요소를 삭제한 자리에 10,20 집어넣기
// console.log(a);

// let a = [1, 2, 3, 4, 5];
// let b = a.slice(0, 2);
// console.log(b);
// console.log(a); // slice는 잘라낸 부분을 새로운 배열에 담을 수 있지만 원래 배열은 변하지 않는다.
// let c = a.slice(1, -1);
// console.log(c);
// let a = new Array(5)
// a.fill(0);
// //a.fill(1, 1); //1로 채울건데 시작인덱스를 1로 할 거야
// a.fill(1, 1, -1); 
// // 첫번째 인수 = 채울 값, 두번째 인수 = 시작 인덱스, 세번째 인수= 끝 인덱스
// console.log(a);

// let a = [0, 1, 2, 3, 2, 1, 0];
// let b = a.indexOf(2); //값과 일치하는 첫번째 인덱스
// let c = a.lastIndexOf(2); //값과 일치하는 마지막 인덱스
// let d = a.indexOf(5); //없는 숫자를 물어봄
// console.log(b);
// console.log(c);
// console.log(d); // 찾지 못하면 -1 반환

// let a = [0, true, 2, false, NaN]
// let b = a.includes(true); // 괄호 안의 값이 배열에 존재하면 true 반환
// let c = a.includes(2);
// let d = a.includes(NaN);
// let e = a.includes(3); // 없으면 false 반환
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let a = ['apple', 'cherry', 'banana'];
// let b = a.sort(); //알파벳 순으로 정렬
// console.log(b);

// let c = [22, 333, 121];
// let d = c.sort(); //첫번째 수가 빠른 순서대로 정렬, 문자처럼 인식함
// console.log(d);

// let e = c.sort((a,b) => a - b); //우리가 원하는 크기순 정렬이 됨, 그러나 숫자를 sort하는 건 좋지 않은 듯?

// let a = [1, 2, 3];
// let b = a.join();
// let c = a.join('');
// console.log(b); // 쉼표로 구분된 문자열이 그대로 나옴
// console.log(c); //쉼표 없이 결합한 문자열이 나옴





//예제2
// const scores = [67, 82, 97, 100, 92];

// for (let i = 0; i < scores.length; i++){
//     document.write(scores[i]+'<br>');
// }

// for (let score of scores){ //for of 보기
//     document.write(score + '<br>');
// }





//예제3
// const tel = ['010', '1245', '5678'];
// let full = [tel[0] + '-' + tel[1] +'-'+ tel[2] ];
// console.log(full);
// let a = full.length;
// console.log(a);

// let tel2 = tel.join("-");
// console.log(tel2);




//예제4
// const colors = ['빨강', '노랑', '파랑', '주황'];
// let arr = colors.shift() // shift한 colors가 아니라 삭제된 요소가 저장됨
// document.write(colors + '/');
// document.write(arr);

// let arr = new Array(2);
// for (let i = 0; i < arr.length; ++i)
//     arr[i] = new Array(3);
//     console.log(arr);

// let arr= Array.from(new Array(2), ( )=> new Array(3));
// console.log(arr);

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;
// console.table(arr);

// for(let i=0; i<arr.length; ++i){
//     for(let j=0; j < arr[i].length; ++j){
//         console.log(arr[i][j]); //i,j가 늘어나야 반복문이 끝나므로 늘려주는 값은 반복자를 포함해야하는 듯?
//     }
// }

// const a = [83,90,70,87]
// const b = [87,93,62,83]
// const c = [98,90,77,97]
// let arrA = (a[0]+b[0]+c[0])/3
// let arrB = (a[1]+b[1]+c[1])/3
// let arrC = (a[2]+b[2]+c[2])/3
// let arrD = (a[3]+b[3]+c[3])/3
// console.log(arrA)
// console.log(arrB)
// console.log(arrC)
// console.log(arrD)







//다시 해보기
// const scores = [[83,90,70,87], [87,93,62,83], [98,90,77,97]];
// text = '';
//let sum = 0, average = 0;
// for (let i = 0; i< 3; i++){
//     for(let j = 0; j<4; j++){
//         sum += scores[i][j];
//     }
//     average = sum/4;
//     text += i+'번째 학생의 합계:' + sum + ',' + ", 평균:" + average + '<br>';
// }

// document.write(text);


//예제6
// const mathScores= [90,85,70,86,97];
// let sum = 0, average = 0;
// for (let i = 0; i < mathScores.length; i++){
//     sum += mathScores[i];
//     average = sum/5;
// }
// for (let mathscore of mathScores){
//     sum += mathscore;
// }
// console.log(sum);
// console.log(average);


//예제7
// let tempNumbers= [7,-24,-8,10,17,-18];
// // let ex = tempNunbers.filter(tempNunbers => tempNunbers < 0);
// // console.log(ex[0]);


// tempFind = tempNumbers.find(number => number < 0)
// console.log(tempFind)



//예제9
// let a =[12,0,2,5,4];
// let b =[0,2,3,12,8];
// let common = a.filter(element => b.includes(element));
// console.log(common); 
//a.filter가 배열 a의 각 요소에 대해 콜백 함수를 호출합니다. 각 요소는 element로 전달되며, b.includes(element)가 호출되어 배열 b에 그 요소가 포함되어 있는지 확인합니다. 만약 포함되어 있다면(true), 그 요소는 common 배열에 추가됩니다. 최종적으로 common 배열에는 a와 b에서 공통으로 포함된 요소들만 남게 됩니다.


//예제10
// let numbers2 =[1,3,5];
// let mul = 0;
// for(let i =0; i<numbers2.length; i++){
//     mul = numbers2[i] * 10 ;
//     document.write(mul + ',')
// }

// const numbers = [1,3,5];
// let numbersArray = numbers.map(num => num * 10);
// document.write(numbersArray);






// // 배열 메서드 forEach()
// let sum = 0;
// carSales.forEach(sale => {sum += sale;});
// let average = sum / carSales.length;

// carSales.forEach((sale, index, array) => {array[index] = sale + 50});

// // 메서드 map() / forEach()와 비교
// let newCarSales = carSales.map(sale => sale + 50);

// //메서드 filter()
// let highSales = carSales.filter(sale => sale > 500) ;

// let evenSales = carSales.filter((sale, index) => index % 2 == 1);

// //find(), findIndex() 처음 찾은 요소와 처음 찾은 요소의 인덱스
// let firstSaleSix = carSales.find(sale => sale > 600);
// let firstSaleSixIndex = carSales.findIndex(sale => sale > 600);

// //every() 모든 배열 요소에 대한 조건연산에서의 결과 반환(true, false), 
// //some() 모든 배열 요소에서 하나라도 참 또는 거짓을 반환하는 경우 결과 반환(true, false)

// let allSaleSix = carSales.every(sale => sale > 600);
// let anySaleSix = carSales.some(sale => sale > 600);


// //reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고 하나의 결과값 반환
// let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
// let average = sum / carSales.length;

// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1: t2));

// //flat() 배열 요소에 다른 배열을 포함하고 있을 때 풀어준다.
// let flat = [1, [2, 3]].flat();


// //flatMap() 
// let message = ["오늘 날씨가", "좋습니다."]
// let words = message.flatMap(msg => msg.split(""));


// //map() + flat()
// let message = ["오늘 날씨가", "좋습니다."]
// let map = message.map(msg => msg.split(""));
// let words = map.flat();
// console.log(words);

// //concat() 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4, 5);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(original);
// console.log(newArray);

// //push() 배열의 끝에 요소를 추가, pop() 배열 끝에 있는 요소를 꺼내와 반환하고 해당 요소를 배열에서 삭제
// let stack = [];
// stack.push(1);
// stack.push(2, 3);
// stack.pop();
// console.log(stack);
// stack.push(4);

// //unshift() 배열의 처음에 요소를 추가, shift() 배열의 처음에 있는 요소를 꺼내와 삭제
// let stack = [];
// stack.unshift(1);
// stack.unshift(2, 3);
// stack.shift();


// //slice() 배열을 잘라서 분할된 서브 배열을 반환
// let a = [1, 2, 3, 4, 5];
// let b = a.slice(0, 2);
// let c = a.slice(1, -1);


// // splice() slice와 유사하지만 원래의 배열을 변경시킨다.
// let a = [1, 2, 3, 4, 5]
// a.splice(0, 2);
// a.splice(2);
// a.splice(0, 2, 10, 20);
// a.splice(3, 0, 100, 200);
// console.log(a);

// // fill() 배열을 첫 번째 인수에 지정된 값으로 채운다.
// let a = new Array(5);
// a.fill(0);
// a.fill(1, 1);
// a.fill(1, 1, -1);


// // // indexOf() 인수값과 일치하는 맨 처음 요소의 인덱스를 반환
// let a = [0, 1, 2, 3, 2, 1, 0, NaN];
// let b = a.indexOf(2);
// let c = a.lastIndexOf(2);
// let d = a.indexOf(NaN);
// let e = a.indexOf(5);


// // includes() 인수에 지정된 값이 배열에 포함되어 있으면 true / 아니면 false

// let a = [0, true, 2, false, NaN];
// let b = a.includes(true);
// let c = a.includes(2);
// let d = a.includes(NaN);

// // sort() 배열을 정리할 때 사용, 알파벳 순으로 정렬한다.
// let a = ["apple", "cherry", "banana"];
// let b = a.sort();

// let c = [22, 333, 121];
// let d = c.sort();
// let e = c.sort((a, b) => a - b);

// // join() 배열의 모든 요소를 문자열로 뱐환하여 결합한 문자열을 반환
// let a = [1, 2, 3];
// let b = a.join();
// let c = a.join("")
// console.log(c);

// 다차원 배열
// let arr = new Array(2);
// for(let i = 0; i < arr.length; ++i)
//     arr[i] = new Array(3);
// console.log(arr);

// let arr = Array.from(new Array(2), () => new Array(3));


// //2차원 배열 접근

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;
// console.table(arr);

 //for문을 사용하여 각 요소에 접근
// for(let i = 0; i < arr.length; ++1){
//     for(let j = 0; j < arr[i].length; ++1){
//         console.log(arr[i][j])
//     }
// }
// // forEach() 메서드를 사용하여 각 요소에 접근
// arr.forEach(r => r.forEach(c => console.log(c)));

// // push() 메서드를 사용하여 배열 끝에 요소를 추가
// arr.push([7, 8, 9]);

// // splice 메서드를 사용하여 첫 번째 인수 위치에 배열 추가
// arr.splice(2, 0, [10, 11, 12]);
// console.log(arr);