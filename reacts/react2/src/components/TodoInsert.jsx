import React from 'react';
import { useState } from 'react';
import "./TodoInsert.scss";
import {IoIosAddCircleOutline} from 'react-icons/io';

const TodoInsert = ({insertItem}) => {
    const [item, setItem] = useState("");

    const changeHandler = (e) => setItem(e.target.value);
    const submitHandler= (e) => {

        e.preventDefault(); //새로고침 방지

        if(item.trim() === ""){
            return;
        }
        
        insertItem(item);

        setItem("");
    }


    return (
        <form className="TodoInsert" onSubmit = {submitHandler}>
            <input type="text" placeholder="일정을 입력하세요." value = {item} onChange={changeHandler}/>
            <button type='submit'>
              <IoIosAddCircleOutline/>
            </button>
        </form>
    );
};

export default TodoInsert;