const box = document.querySelector('.box');
const animationBtn = document.querySelector('.animationBtn');
const title = document.querySelector('.title');
const character = document.querySelector(.'character');

function moveBox(){
    gsgp.to(box, 1, {left:'1000px'});
    gsgp.to(title, 1, {opacity: 1});
    gsgp.fromTo(character, {x: 700, y:70, opacity: 0}, {x:400, y:200, scale: 3, duration:2 ,opacity: 1})
}
animationBtn.addEventListener('click', moveBox);

gsgp.set(title, {opacity:0});

gsgp.to('.target h1', {
    scrollTrigger:
    {
        trigger:".target",
    start:'0% 0%',
    end: '100% 10%',
    markers: true,
    scrub:1,
},
scale: 2,
location: 180
})