import React from 'react';
import {IoMdRemoveCircleOutline} from "react-icons/io";
import './TodoListItem.scss';

const TodoListItem = (props) => {
    const {todo, removeItem} = props;

    return (
        <div className='TodoListItem'>
        <div className='todo'>
            <input type='checkbox' className='checkbox'/>
            <div className='text'>{todo.text}</div>
        </div>
        <div className='remove' onClick={() => removeItem(todo.id)}>
            <IoMdRemoveCircleOutline />
        </div>
        </div>
    );
};

export default TodoListItem;