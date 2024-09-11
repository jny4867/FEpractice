import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  // 2. useState 설계 -> 초기값 : 객체
  const [form, setform] = useState({username : "", message : ""});

  function onChangeHandler(e){
    //객체나 배열의 값을 변경 -> spread 연산자 (복사 후 덮어쓰기)
    const newForm = {...form, [e.target.name] : e.target.value}
    //원본 Form 객체를 newFrom의 값으로 변경
    setform(newForm);
  }

  return (
    <div>
      <header>
        <h1>Name: {form.username}</h1> 
        <h1>Content: {form.message}</h1> 
        {/* 1. 태그에 name값 달기 */}
        {/* 3. 함수 만들기 (onChangeHandler) */}
        <input type="text" name="username" onChange={onChangeHandler}/>
        <input type="text" name='message'onChange={onChangeHandler}/>
      </header>
    </div>
  );
}

export default App;
