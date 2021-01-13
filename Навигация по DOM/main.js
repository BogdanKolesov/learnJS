'use strict';

// console.log(document.head);
// console.log(document.documentElement);//Получение всего HTML - документа
// console.log(document.body.childNodes); //Получение детей body
// console.log(document.body.firstChild); //Получение первого / последгнего (last) элемента
// console.log(document.body.firstElementChild); //Получение первого / последгнего (last) элемента

console.log(document.querySelector('#current').parentNode.parentNode); // Получение родителя родителя4


//Data - атрибуты используются в HTML - коде
console.log(document.querySelector('[data-current="3"]').nextSibling); //Получили текстовую ноду (следующий сосед)
console.log(document.querySelector('[data-current="3"]').previousSibling); //Получили текстовую ноду (предыдущий сосед)
console.log(document.querySelector('[data-current="3"]').nextElementSibling); //Получили элемент


//Получение элементов через ноду. Нельзя использовать forEach
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}