const images = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".image-container, .image-container-alt");

images.forEach((draggable) => {
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
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");

        if (afterElement === null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    });
});

/**
 * 주어진 x 좌표를 기준으로 드래그 후의 위치를 반환합니다.
 * @param {HTMLElement} container - 이미지가 드래그될 컨테이너
 * @param {number} y - 마우스의 y 좌표
 * @returns {HTMLElement} - 드래그 후 놓을 위치의 엘리먼트
 */
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

