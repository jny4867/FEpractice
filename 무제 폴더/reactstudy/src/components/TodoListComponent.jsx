import React from 'react';

function TodoListComponent(props) {
    const {taskName, finished} = props;
    return (
        <div>
            <div>
                <h1>할 일 : {taskName}</h1>
            </div>
            
        </div>
    );
};

export default TodoListComponent;