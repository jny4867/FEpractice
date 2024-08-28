// let str1 = "I go to a mart. I go to a MART.I go to a MART12.I go to a ddMARTsf."
// let pattern = /mart/ig;
// let result = str1 = str1.replace(pattern, "office");
// document.getElementById("show").innerHTML = result;

// let str1 = "A cat gets haircut c3t c_t"
// let pattern = /c.t/g;
// let result = str1 = str1.match(pattern);
// document.getElementById("show").innerHTML = result;

// let str1 = "Discount rate: 30%"
// let pattern = /\w/g;
// let result = str1 = str1.match(pattern);
// document.getElementById("show").innerHTML = result;

// let str1 = "Phone number: 010 - 1234 -5678"
// let pattern = /\D/g;
// let result = str1 = str1.match(pattern);
// document.getElementById("show").innerHTML = result;









// let str1 = "I love Apple pie and apple juice" //apple문제
// let pattern = /Apple/ig;
// let pattern2 = /e\B/g;
// let result = str1.match(pattern);
// let result2 = str1.replace(pattern2, "_");
// let text = "";
// text += result + "<br>"
// text += result2 + "<br>"
// document.getElementById("show").innerHTML = text;

// let str1 = "Hello World! This is a Test String." //모든 대문자 찾기
// let pattern = /[A-Z]/g;
// let pattern2 = /e\B/g;
// let result = str2.match(pattern);
// let result2 = str2.replace(pattern2, "_");
// let text = "";
// text += result3 + "<br>"
// text += result4 + "<br>"
// document.getElementById("show").innerHTML = text;

// let str1 = "1 10 100 2000 300000"
// let pattern = /\d{3}/g;
// let pattern2 = /e\B/g;
// let result = str1.match(pattern);
// let result2= str1.replace(pattern, "");
// let text = "";
// text += result + "<br>"
// text += result2 + "<br>"
// document.getElementById("show").innerHTML = text;

// let str1 = "How do you do"
// let pattern = /[do]/g;
// let pattern2 = /e\B/g;
// let result = str1.match(pattern);
// let result2= str1.replace(pattern, "");
// let text = "";
// text += result + "<br>"
// text += result2 + "<br>"
// document.getElementById("show").innerHTML = text;

// let str1 = "89139012349"
// let pattern = /[^1-8]/g; //
// let pattern2 = /e\B/g;
// let result = str1;
// let result2= str1.replace(pattern, "");

// let text = "";
// text += result + "<br>"
// text += result2 + "<br>"
// document.getElementById("show").innerHTML = text;

// let str1 = "A AA B BB Aa Bb AAA"
// let pattern = /\d{1-2}/g;
// let pattern2 = /e\B/g;
// let result = str1;
// let result2= str1.replace(pattern, "");

// let text = "";
// text += result + "<br>"
// text += result2 + "<br>"
// document.getElementById("show").innerHTML = text;


let str1 = "AA BB 12 345"
let pattern = /[0-9]+/g;
let pattern2 = /e\B/g;
let result = str1.match(pattern);
let result2= str1.replace(pattern2, "");

let text = "";
text += result + "<br>"
text += result2 + "<br>"
document.getElementById("show").innerHTML = text;




 