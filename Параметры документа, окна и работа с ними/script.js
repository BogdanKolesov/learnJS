'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box); //через запятую  можно записать стиль псевдоэлемента
console.log(style.display);