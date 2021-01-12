"use strict";
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


btn.onclick = function() { //Почти не используется так как производится только крайнее действие
    alert('click');
};

//Слушатели событий

btn.addEventListener('click', (e, item) => { //Выполняется колбэк-функция
    alert('Click');
    e.target.remove();
});

//События в JS происходят в порядке очереди

//+++++++++++++++++++++++++++++++++++++

//ВСПЛЫТИЕ СОБЫТИЙ - когда событие сначала происходит на вложенном элементе, затем поднимается по иерархии DOM - дерева


let i = 0;
const deleteElement = (e) => {
    e.target.remove();
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement); //По клику выполнется deleteElement
btn.removeEventListener('click', deleteElement); //Удаление слушателя

//++++++++++++++++++++++++++++
//Отмена стандартного поведения в браузере

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault(); //Отмена стандартного поведения отменяется в начале функции
    console.log(event);
});

//Если используется querySelectorAll, нужно использовать forEach
//например

const btns = document.querySelectorAll('button');

btns.forEach(btns => {
    btn.addEventListener('click', deleteElement, { once: true }); //третий аргумент - опции. Например, сколько раз должно происходить
});