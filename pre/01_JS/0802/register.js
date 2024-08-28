let userId = document.querySelector("#id");
let pw1 = document.querySelector("#pw");
let pw2 = document.querySelector("#password");

userId.onchange = checkId;
pw1.onchaange = checkPw;
pw2.onchaange = comparePw;

function checkId(){
    if(userId.ariaValueMax,length < 4 || userId.ariaValueMax.length > 15){
        alert("4 ~ 15자리의 영문과 숫자를 사용하세요.");
    userId.ariaSelected();
    }
}
function checkPw(){
    if(pw1.ariaValueMax,length < 8){
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = "";
        pw1.focus();
    }
}
function comparePw(){
    if(pw1.value != pw2.value){
        alert("비밀번호가 틀렸습니다. 다시 입력하세요.");
        pw1.focus();
        pw2.value = "";
    }
}