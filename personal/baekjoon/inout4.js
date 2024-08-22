// console.log("Hello World");

// let a = 2;
// let b = 3;
// console.log(a+b);


// //1
// function calculateSum(){
//     const num1 =  parseFloat(document.getElementById('num1').value);
//     const num2 =  parseFloat(document.getElementById('num2').value);

//     if(isNaN(num1) || isNaN(num2)){
//         document.getElementById('result').innerText = '숫자를 입력해 주세요.'
//     }else{
//         const sum = num1 + num2;
//         document.getElementById('result').innerText = `두 수의 합 = ${sum}`;
//     }
// }

// function calculateSub(){
//     const num1 =  parseFloat(document.getElementById('num1').value);
//     const num2 =  parseFloat(document.getElementById('num2').value);

//     if(isNaN(num1) || isNaN(num2)){
//         document.getElementById('result').innerText = '숫자를 입력해 주세요.'
//     }else{
//         const sub = num1 - num2;
//         document.getElementById('result').innerText = `두 수의 차 = ${sub}`;
//     }
// }

// function calculateMul(){
//     const num1 =  parseFloat(document.getElementById('num1').value);
//     const num2 =  parseFloat(document.getElementById('num2').value);

//     if(isNaN(num1) || isNaN(num2)){
//         document.getElementById('result').innerText = '숫자를 입력해 주세요.'
//     }else{
//         const mul = num1 * num2;
//         document.getElementById('result').innerText = `두 수의 곱 = ${mul}`;
//     }
// }

// function calculateDiv(){
//     const num1 =  parseFloat(document.getElementById('num1').value);
//     const num2 =  parseFloat(document.getElementById('num2').value);

//     if(isNaN(num1) || isNaN(num2)){
//         document.getElementById('result').innerText = '숫자를 입력해 주세요.'
//     }else{
//         const div = num1 / num2;
//         document.getElementById('result').innerText = `두 수의 나누기 해 = ${div}`;
//     }
// }

// function calculateAll(){
//     const num1 =  parseFloat(document.getElementById('num1').value);
//     const num2 =  parseFloat(document.getElementById('num2').value);

//     if(isNaN(num1) || isNaN(num2)){
//         document.getElementById('result').innerText = '숫자를 입력해 주세요.'
//     }else{
//         const sum = num1 + num2;
//         const sub = num1 - num2;
//         const mul = num1 * num2;
//         const div = num1 / num2;
        
//         document.getElementById('result1').innerText = `두 수의 합 = ${sum}`;
//         document.getElementById('result2').innerText = `두 수의 차 = ${sub}`;
//         document.getElementById('result3').innerText = `두 수의 곱 = ${mul}`;
//         document.getElementById('result4').innerText = `두 수의 나누기 해 = ${div}`;
//     }
// }



// //2
// function isIdInArray(arr, id){
//     if(id.length > 50){
//         document.getElementById('result1').innerText = `입력된 문자열의 길이가 50자를 초과합니다.`;
//     }
//     return arr.includes(id);
// }

// function duplicateId(){
//     const id = document.getElementById('input-id').value;
//     let arr = ['12', '23', '34'];

//     if(isIdInArray(arr, id)){
//         document.getElementById('result').innerText = `${id}는 배열에 이미 존재합니다.`;
//     }else{
//         document.getElementById('result').innerText = "...";
//     }

// }




//3
// function transYear(){
//     const year = parseFloat(document.getElementById('input-year').value);
//     let thaiYear = year + 543;
//     document.getElementById('result').innerText = `해당 연도는 불기 ${thaiYear}년 입니다.`;
// }







