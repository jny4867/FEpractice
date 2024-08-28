// let div = document.querySelector("div");
// console.log(div);
// function changeContent() {
//     div.outerHTML = "<h1>DOM API</h1><p>선수 조건: 없음</p>"
// }

// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele =>{ele.style.color = 'red'}); 

//getElementById는 첫번째 요소만 반환

// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach(elem => {elem.style.color = "red"});

// const apple = document.getElementsByClassName('fruit apple');
// [...apple].forEach(elem => {elem.style.color = "blue"});

// // const boxEl = document.querySelector('.box');
// // boxEl.addEventListener('click', function(){
// //     console.log("Click!");
// //     boxEl.classList.toggle('active');
// //  })
// const boxEl = document.querySelectorAll('.box');
// boxEl.forEach(function(boxEl, index){
//     boxEl,classList.add(`order-${index + 1}`);
// })

// const div = document.getElementById('my_div');
// const clearbtn = document.getElementById('clearbtn');
// const result = document.getElementById('result');

// div.addEventListener('click', () => {
//     result.innerHTML += '<div>click</div>'
// })
// div.addEventListener('mousedown', () => {
//     result.innerHTML += '<div>mousedown</div>'
// })
// div.addEventListener('mouseup', () => {
//     result.innerHTML += '<div>mouseup</div>'
// })

// clearbtn.addEventListener('click', () =>{
//     result.innerHTML = ""
// })

// function sayhi(name){
//     console.log(`Hi ${name}.`);
// }

// const button = document.querySelector('button');
// button.onclick = function () {
//     console.log('button clicked! 1')
// }
// button.onclick = function () { //하나의 이벤트에 하나의 이벤트 핸들러만을 바인딩할 수 있다.
//     console.log('button clicked! 2')
// }

// button.addEventListener('click', function () {
//     console.log('button clicked! 2');
// });

// const button =document.querySelector('button');
// const handleClick = () => console.log('button click');
// button.addEventListener('click!');
// button.removeEventListener('click', handleClick);

const box = document.querySelector(".box");
const initialMousePos = {x: 0, y: 0};
const offset = {x:0, y:0};

const move = e => {
    offset.x = e.clientX - initialMousePos.x;
    offset.y = e.clientY - initialMousePos.y;
    box.style.transform = `translate(${offset.x}px, ${offset.y}px, 0)`
};

box.addEventListener('mousedown', e => {
    initialMousePos.x = e.clientX - offset.x;
    initialMousePos.y = e.clientY - offset.y;

    document.addEventListener('mousemove', move);
})

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', move);
})