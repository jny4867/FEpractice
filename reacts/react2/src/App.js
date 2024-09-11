import React, {useState} from 'react';
import { useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState(
    [
      {
        id:1,
        text: '리액트 기초 공부하기',
        status: true
      },
      {
        id:2,
        text: '포트폴리오 만들기',
        status: true
      },
      {
        id:3,
        text: '프로젝트 준비하기',
        status: false
      }
    ]
  )
  const nextId = useRef(4);

  const insertHandler = (item) => {

    const todo = {
      id:nextId.current,
      text: item,
      status: false,
    };

    setTodos([...todos, todo]);
    nextId.current += 1;
  };

  const removeHandler = (deleted) => 
    setTodos(todos.filter((prevTodo) => prevTodo.id !== deleted));

  return (
    <div className="App">
      <TodoTemplate>
      <TodoInsert insertItem={insertHandler}/>
      <TodoList todos={todos} removeItem={removeHandler}/>
      </TodoTemplate>
    </div>
  );
};

export default App;
