// [1, 2, 3].myForEach(() => {});
// [1, 2, 3].myForEach((v, i, a) => {console.log(v,i,a)});
// [1, 2, 3].myForEach((v, i) => {console.log(v)});
// [1, 2, 3].myForEach((v) => 3);
// ['1', '2', '3'].myForEach((v) => {
//     console.log(v.slice(0))
// })
// [true, 2, '3'].myForEach((v) => {
//     if(typeof v === 'string'){
//         v.slice(0);
//     }else{
//         v.toFixed();
//     }
// })

// [1, 2, 3].myForEach(function(){
//     console.log(this);
// })
// interface Array<T>{
//     myForEach<K = Window>(callback: (this: K, v: T, i: number, a: T[]) => void, thisArg?: K): void;
// }

// const r1 = [1, 2, 3].myReduce((a, c) => a + c )
// const r2 = [1, 2, 3].myReduce((a, c, i, arr) => a + c, 10 )
// // const r3 = ['1', '2', '3'].myReduce((v): v is string => typeof v === 'string')
// const r3 = [{num:1}, {num:2}, {num:3}].myReduce(
//     function( a, c){
//     return {...a, + c.num
// },
// {},
// )
// const r4 = [{num:1}, {num:2}, {num:3}].myReduce(
//     function( a, c){
//     return {a, + c.num
// },
// '',
// )
// interface Array<T>{
//     myReduce(callback: (v: T, c: T, i: number, a: T[]) => T, iV?: T) : T;
// }