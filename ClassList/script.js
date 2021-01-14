'use strict';

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length); //Количество классов

// console.log(btns[0].classList.item(0)); //Получение первого класса

// // console.log(btns[0].classList.add('red')); //Добавление класса. Можно через запятую

// // console.log(btns[0].classList.remove('blue')); //Удалить класс

// console.log(btns[0].classList.toggle('blue')); //Тоггл класса

// if (btns[1].classList.contains('red')) { //Если есть класс, выполнить действие
//     console.log('red');
// }

/*
//ВАЖНО
btns[1].addEventListener('click', () => { //Изменение класса по клику
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});
*/

//className - не использовать. Устарело

//Делегирование событий


/*
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('blue')) {
        console.log('Hello');
    }
});

*/

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

//ПОЧИТАТЬ ПРО matches