'use strict';

const box = document.getElementById('box'); //получение документа по ID
const btns = document.getElementsByTagName('button'); //Получаем HTML - коллекцию
const btns2 = document.getElementsByTagName('button')[1]; //Получаем 2 кнопку
console.log(btns[1]); //Получаем 2 кнопку. НЕОБХОДИМО УКАЗАТЬ ИНДЕКС!!!!!!!

const circles = document.getElementsByClassName('circle'); //получение HTML - Коллекции по классу

////СОВРЕМЕННЫЕ МЕТОДЫ++++++++++++++++++++++++++++++++++++

const hearts = document.querySelectorAll('.heart'); //Имеется метод forEach
hearts.forEach(item => {
    console.log(item);
});
//querySelector получает ТОЛЬКО ПЕРВЫЙ ЭЛЕМЕНТ