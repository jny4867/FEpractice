import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

//   // 2. useState 설계 -> 초기값 : 객체
  const [message, setMessage] = useState({title: '제목', color: 'black'});

//   function onChangeHandler(e){
//     //객체나 배열의 값을 변경 -> spread 연산자 (복사 후 덮어쓰기)
//     const newMessage= {...message, [e.target.name] : e.target.value}
//     //원본 Form 객체를 newFrom의 값으로 변경
//     setMessage(newMessage);
//   }
function changeMessage(msg){
    const newMessage = {...message};
    newMessage.title = msg;
    newMessage.color = 'red';

    setMessage(newMessage); //원본 객체를 새로운 객체로 변경
}
function showMessage(e){
    alert(message.title);
}

  return (
    <div>
      <header>
        <h1 style={{color: message.color}}>{message.title}</h1> 
        <hr></hr>
        {/* <h1>Content: {message.title}</h1>  */}
        {/* 1. 태그에 name값 달기 */}
        {/* 3. 함수 만들기 (onChangeHandler) */}
        <input type='text' name='title' onChange={(e) => {changeMessage(e.target.value)}}></input>
        <button onClick={showMessage}>클릭</button>
        
      </header>
    </div>
  );
}

export default App;