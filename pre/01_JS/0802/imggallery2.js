let slides = document.querySelectorAll("#container > img");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let current = 0;

// 초기 슬라이드를 활성화합니다
showSlide(current);

prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide(n) {
    // 모든 슬라이드를 숨김
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // 현재 슬라이드를 활성화
    slides[n].classList.add("active");
}

function prevSlide() {
    if (current > 0) {
        current -= 1;
    } else {
        current = slides.length - 1; // 마지막 슬라이드로 이동
    }
    showSlide(current);
}

function nextSlide() {
    if (current < slides.length - 1) {
        current += 1;
    } else {
        current = 0; // 첫 번째 슬라이드로 이동
    }
    showSlide(current);
}
