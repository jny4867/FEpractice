// const item = document.querySelector(".item");

// item.addEventListener("dragstart", (e) => {
//     console("드래그를 시작하면 발생하는 이벤트");
// });

// item.addEventListener("drag", (e) => {
//     console("드래그하면 발생하는 이벤트");
// });

// const container = document.querySelector(".container");
// container.addEventListener("dragenter", (e) => {
//     e.preventDefault();
//     console.log("박스1 영역에 최초 진입!")
// })
// container.addEventListener("dragleave", (e) => {
//     e.preventDefault();
//     console.log("박스1 영역 떠나면 발생!")
// })
// container.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     console.log("여기(1) 있어!")
// })
// container.addEventListener("drop", (e) => {
//     e.preventDefault();
//     console.log("1번 박스 영역에 드롭!")
// })

// const container2 = document.querySelector(".container2");
// container2.addEventListener("dragenter", (e) => {
//     e.preventDefault();
//     console.log("박스2 영역에 최초 진입!")
// })
// container2.addEventListener("dragleave", (e) => {
//     e.preventDefault();
//     console.log("박스2 영역 떠나면 발생!")
// })
// container2.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     console.log("여기(2) 있어!")
// })
// container2.addEventListener("drop", (e) => {
//     e.preventDefault();
//     console.log("2번 박스 영역에 드롭!")
// })

// document.getElementById('appendChildButton').onclick = function() {
//     const parentElement = document.getElementById('parent');
//     const newElement = document.createElement('div');
//     newElement.textContent = 'New Child Element';
//     parentElement.appendChild(newElement);
// }
// document.getElementById('insertBeforeBTn').onclick = function() {
//     const parentElement = document.getElementById('parent');
//     const newElement = document.createElement('div');
//     newElement.textContent = 'New Child Element';

//     const referenceElement = document.getElementById('reference');
//     parentElement.insertBefore(newElement, referenceElement);
// }

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientX);
        const draggable = document.querySelector(".dragging");

        if (afterElement === null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    });
});

function getDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
