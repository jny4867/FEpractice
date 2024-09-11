import React from 'react';
import "./dist/TodoTemplate.css";

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="appTitle">일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;