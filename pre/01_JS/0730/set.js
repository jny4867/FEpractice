// const set = new Set;
// console.log(set);

// const set1 = new Set([1,2,3,3]);
// console.log(set1); //중복된 값이 허용되지 않음을 확인

// const uniq = array => [...new Set(array)];
// console.log(uniq([2,1,2,3,4,5,4])); //array 배열을 set으로 바꾸어서 출력하면 중복된 값은 제외됨을 확인

// const {size} = new Set([1,2,3,3]); //size는 property이기 때문에 중괄호
// console.log(size);

// const set = new Set();
// console.log(set);
// set.add(1).add(2); //연속 호출, 체이닝 가능
// console.log(set);

// const set = new Set([1,2,3]);
// // console.log(set.has(2)); //해당 set이 2를 포함하기 때문에 true 반환

// set.delete(2); //delete는 연속 호출 불가
// set.clear(); //전체 삭제
// console.log(set); //2가 삭제되고 1,3만 출력


// let odds = new Set([1,3,5,7,9]);
// let sum = 0;
// for(let o of odds) //모든 요소를 순환하면 종료
//     sum += o;
// console.log(sum);

// let product = 1;
// odds.forEach(o => product *= o);
// console.log(product);

// const userIDs = [101,102,101, 103, 102];
// const uniqUserIDs = new Set (userIDs);
// uniqUserIDs.forEach(userID => {
//     console.log(`ID: ${userID}`);
// });

// const tags = ['javascript', 'css', 'HTML', 'HTML'];
// const uniqTags = new Set(tags)
// uniqTags.forEach(tags => {
//     console.log(`tag: ${tags}`);
// })

// const set = new Set([1,2,3]);
// console.log([...set]);

// const [a, ...rest] = set;
// console.log(a ,rest); //다시 보기

// let set1 = new Set([1,2,3]);
// let set2 = new Set([4,3,2]);
// let union = new Set([...set1], [...set2]);
// let Intersection = new Set([...set1].filter(x => set2.has(x)));
// console.log(Intersection); //교집합
// let difference = new Set([...set1].filter(x => !set2.has(x)));
// console.log(difference); // set1에서 set2를 뺀 차집합


// const set1 = new Set('I am a student');
// console.log(set1.size);

// const map1 = new Map([['key1', 'value1'], ['key2','value2']]);
// console.log(map1);
// const map2 = new Map([[1, 2]]);
// console.log(map2)

// const map = new Map([['key1', 'value1'], ['key1','value2']]); // key값이 겹치므로 key1 => value2로 출력됨
// console.log(map);
 
// const {size} = new Map([['key1', 'value1'], ['key2','value2']]);
// console.log(size);

// const map = new Map();
// console.log(map);
// map.set('key1', 'value1'); //map에 요소를 추가할 때는 set 메소드 사용
// console.log(map);

// const map = new Map();
// console.log(map);
// map.set('key1','value1').set('key2','value2'); //연속 호출 가능, 체이닝?
// console.log(map);

// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'Kim'};
// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map); // Map 객체는 키 타입에 제한이 없다.

// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'Kim'};
// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map.delete(kim));// .delete 메서드는 삭제 성공 여부를 boolen으로 반환한다.
// console.log(map.has(kim));// has 메서드는 존재 여부를 boolen으로 반환한다.
// console.log(map); 


// const lee = {name: 'Lee'};
// const kim = {name: 'Kim'};
// const map = new Map([[lee, 'developer'],[kim, 'deginer']]);
// console.log(map); 
// map.clear();  // 일괄 삭제, clear는 언제나 undefined 반환
// console.log(map); 

// let map = new Map();
// map.set(0, 'zero');
// map.set(1, 'one');
// map.forEach((value, key) => console.log(key, value)); 
// // 첫번째는 인수값, 두번째는 키

// const scores = new Map([['국어', 85], ['영어', 90], ['수학', 95]]);
// let sum = 0 ;
// scores.forEach(function(value){
//     sum += value;
// })
// average = sum / scores.size;
// console.log(sum);
// console.log(average);



// Map 객체를 생성할 때, 첫 번째 배열은 각 항목을 쌍으로 나타내야 하므로 올바른 구문으로 수정해야 합니다. forEach 문을 사용하여 Map 객체의 항목을 출력하는 방법도 추가해 보겠습니다.
// 먼저, 올바르게 Map 객체를 생성합니다:
// const books = new Map([
//     ['title', '유럽 책방 문화 탐구'],
//     ['author', '한미화'],
//     ['price', 23000]
// ]);
// // forEach 문을 사용하여 Map 객체의 항목을 출력합니다.
// books.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });

// const numbers = new Set([3, 7, 12, 3, 12, 3]);
// console.log(numbers);

