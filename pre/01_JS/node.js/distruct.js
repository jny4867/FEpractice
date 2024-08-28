// const car = {brand: '현대', model: '아이오닉', year: 2023};

// const newCar = {...car, model: '전기차'};
// console.log(newCar);

// const array1 = [1,2,3,4,5]; 
// const array2 = [4,5,6,7,8];
// const array3 = [...array1,...array2];
// const mergedArray = [...new Set([...array1, ...array2])];

// console.log(mergedArray);

// export default  function(a, b){
//     return a + b;
// }

// const arrs = [10, 20, 30, 40];
// function getName() {
//     return 'aaaaaa'
// }

const user = {
    name: "mings",
    age: 20,
    emails: [
        '111@hgmail.com',
        '222@gmail.com'
    ]
}
// localStorage.setItem('user', JSON.stringify(user))
// console.log(localStorage.getItem('user'))
// console.log(JSON.parse(localStorage.getItem('user')))

const str = localStorage.getItem('user');
const obj = JSON.parse(str);
obj,age = 22
console.log(obj);
localStorage.setItem('user', JSON.stringify(obj))