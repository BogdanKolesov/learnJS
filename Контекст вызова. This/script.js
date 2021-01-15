'use strict';
/*
function showThis(a, b) { //Ссылается на window, при строгом режиме позиция undefined
    console.log(this);

    function sum() {
        return a + b; //Используем замыкание
    }
    console.log(sum());
}

showThis(4, 5);

//Объекты. Если используем метод внутри объекта, контекст у метода объекта - объект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

//this в конструкторах и классах - новый экземпляр объекта

function sayName(surame) {
    console.log(this);
    console.log(this.surname);
}
const user = {
    name: 'John'
};

sayName.call(user, 'Smith'); //вызов контекста через методы, пишется через запятую
sayName.apply(user, ['Smith']); //вызов контекста через методы, пишется через запятую в массив



function count(num) {
    return this * num;
}


const double = count.bind(2); //Создаёт НОВУЮ фнукцию. Ручная привязка this
console.log(double(3));
console.log(double(13));
*/

//РЕАЛЬНЫЙ ПРИМЕР

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); //в консоль выводится button
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => { //Стрелочная фнукции берет контекст у родителя
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

const double = (a) => a * 2; //в одну строчку не нужно ставить return

console.log(double(4));