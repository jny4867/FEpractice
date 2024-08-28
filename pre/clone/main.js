document.getElementById('add-button').addEventListner("click", addTodo);
document.getElementById('clear-button').addEventListener('click', clearAllTodos);

function addTodo(){
    const todoInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('date-input');
    const todoText = todoInput.value.trim(); // todoText는 인풋된 값의 양옆 공백을 자른 값
    const dueDate = dateInput.value; //dueDate는 인풋된 날짜 값

    if(todoText =! ""){//todoText가 빈 값이 아니면

    }
}