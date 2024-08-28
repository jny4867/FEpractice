// const x = document.forms[0].id;
// console.log(x);
// document.getElementById('show').innerHTML = x;

// function getInput() {
//     const x = document.form['form1'];
//     let text = '';
//     for(let i = 0; i<x.length; i++)
//         text += x.elements[i].value + '<br>'
//     document.getElementById('show').innerHTML = text;
// }

// function myFunction(){
//     let id = document.getElementById('id').value;
//     let pw = document.getElementById('pass').value;

//     if(id.length < 1) {
//         document.getElementById('show').innerHTML = '비밀번호를 입력해 주세요'
//     }else if (pw.length > 10){
//         document.getElementById('show'.innerHTML = '아이디는 10자리 이하로 입력해 주세요.')
//     }else{
//         document.getElementById('show').innerHTML = '입력 OK'
//     }
//     ["id", "pass"].forEach(field => documentByID(field).value = "");




//     if(pw.length < 1) {
//         document.getElementById('show').innerHTML = '비밀번호를 입력해 주세요'
//     }else if (pw.length > 10){
//         document.getElementById('show'.innerHTML = '비밀번호는 10자리 이하로 입력해 주세요.')
//     }else{
//         document.getElementById('show').innerHTML = '입력 OK'
//     }
//     ["id", "pass"].forEach(field => document.getElementByID(field).value = "");

//     setTimeout(() => )
// }

const x = document.getElementById('name');
x.onfocus = function() {changeBgcolorFo();}
x.onblur = function() {changeBgcolorBl();}

function changeBgcolorFo(){
    x.style.backgroundColor = "pink";
}
function changeBgcolorFo(){
    x.style.backgroundColor = "gray";
}

const keyInput = document.getElementById("keyInput");
// let text = "";
// keyInput.addEventListener("keydown",showKey);
// function showKey(e){
//     text += e.key;
//     document.getElementById("show").innerHTML = text ;
// }

keyInput.addEventListener("keyup", changeUpper );
function changeUpper(){
    keyInput.value = keyInput.value.toUpperCase();
}
const selectFruits = document.getElementById("selectFlu");
selectFruits.addEventListener('change', (e) => {
    document.getElementById("show").innerHTML = "내가 좋아하는 과일은" + e.target.value + "입니다."
})