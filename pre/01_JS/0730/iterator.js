// function* generate(){
//     console.log("제너레이터 실행");
//     console.log("1생성");
//     yield 1;
//     console.log("2생성");
//     yield 2;
//     console.log("3생성");
//     yield 3;
// };

// let gen = generate();
// let result = gen.next();
// result = gen.next();
// result = gen.next();
// console.log(gen);

// //while 문을 사용하여 제너레이터가 생성한 값을 순회하여 가져올 수 있다.

// gen = generate();
// result = gen.next();
// while(!result.done){
//     console.log(result.value);
//     result = gen.next();
// }

// //for... of
// gen = generate();
// for(let ge of gen)
//     console.log(gen)


// // [Symbol.iterator]() 메서드를 호출하여 이터레이터를 가져올 수 있다.
// gen = generate();
// let iterator = gen[Symbol.iterator]();
// console.log(iterator);

// //Sequence 이터레이터를 제너레이터 함수로 구현
// function* sequence(from = 0, to = Infinity, interval = 1){
//     let next = from;
//     while(next <=to){
//         yield next;
//         next += interval;
//     }
// }

// let evenSeq = sequence(2, 10, 2);
// for(let seq of evenSeq)
//     console.log(seq);

// let oddSeq = sequence(1, 10, 2);
// for(let seq of oddSeq)
//     console.log(seq);

// //제너레이터 함수를 객체의 메서드로 정의
// let o = {
//     x: 1,
//     y: 2,
//     z: 3,
//     *values() {
//         for(let value of Object.values(this))
//             yield value;   
//     }
// }
// let generator = o.values();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for(let value of o.values())
//     console.log(value);

// // [Symbol.iterator]() 메서드를 제너레이터 메서드로 구현하여 제너레이터 객체를 반환하게 한다.
// class Sequence {
//     constructor(from = 0, to = Infinity, interval = 1){
//         this.from = from;
//         this.to = to;
//         this.interval = interval;
//     }
//     *[Symbol.iterator]() {
        
//         let num = this.from;
//         while(num <= this.to){
//             yield num;
//             num +=this.interval;
//         }
//     }    
// }
// let evenNumbers = new Sequence(2, 10, 2);
// console.log(evenNumbers);
// for (const num of evenNumbers) {
//     console.log(num);
// }

// for(let num of evenNumbers){
//     if(num > 7)
//         break;
//     console.log(num);
// }

// 여러 개의 순회할 수 있는 객체를 펼쳐서 각 요소를 순차적으로 생성하는 제너레이터 함수를 구현

// function* generateIterables(...iterables){
//     for(let iterable of iterables)
//         for(let item of iterable)
//             yield item;
// }

// //중첩된 for문 대신 yield를 사용할 수 있다.
// function* generateIterables(...iterables){
//     for(let iterable of iterables)
//         yield* iterable;
// }

// let evenNumbers = new Sequence(2, 10, 2);
// let generator = generateIterables("abc", [1, 2, 3], evenNumbers);
// let arr = [...generator];
// console.log(arr);