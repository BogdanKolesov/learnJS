'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('buttons'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


//INLINE - стили
box.style.backgroundColor = 'green';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//CSS - TEXT

box.style.cssText = 'background-color: blue; width: 500px';


//Применение для всеъ элементов
for (let i = 0; i < hearts.lenght; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

//Или
hearts.forEach(item => {
    item.style.backgroundColor = 'red';
});

//Создание элементов 

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black'); //Добавление класса (работа с классами)


document.body.append(div); //добавление div в конец body
wrapper.append(div); //вставить в конец родителя (prepend - в начало)
hearts[0].before(div); //вставить перед (после) элемента 
circles[0].remove(); //Удаление элеменат
hearts[0].replaceWith(circles[0]); //Замена элемента на другой
//УСТАРЕВШИЕ КОНСТРУКЦИИ Я НЕ РАССМАТРИВАЛ!!!!!!!

//Добавление внутрь элемента

div.innerHTML = '<h1>Hello World</h1>'; //добавление тега и содержимого
// div.textContent = 'Hello'; //Работа только с текстом

div.insertAdjacentHTML('beforebegin', '<h2> Hello </h2>)');