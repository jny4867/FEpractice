// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskList = document.getElementById('taskList');

//     if (taskInput.value.trim() !== "") {
//         const li = document.createElement('li');
//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';

//         // 체크박스 클릭 이벤트 처리
//         checkbox.addEventListener('change', function() {
//             if (this.checked) {
//                 li.classList.add('completed');
//             } else {
//                 li.classList.remove('completed');
//             }
//         });

//         li.appendChild(checkbox);
//         li.appendChild(document.createTextNode(taskInput.value));
//         taskList.appendChild(li);

//         taskInput.value = "";
//     }
// }

const buttons= document.querySelector'.check');
buttons.forEach(function(button){
    button.addEventListener('click', function(){
        button.classList.toggle('active');
    })

})

