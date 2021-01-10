"use strict";

//Объявление переменной

//let number = 5;
///const leftBorderWidth = 1; //Прямых констант в JS не бывает



//Объект
/*const obj = {
    name: 'John',
    Age: 25,
    isMarried: false
};
console.log(obj.name);
*/
//Массив
/*let images = ['plum.png', 'tree.png', 'stone.png'];
console.log(images[0]);
*/
//РАБОТА С ПОЛЬЗОВАТЕЛЕМ

//alert('Hello, world!')

//const result = confirm('Да или нет?');

//const answer = prompt('Вам есть 18 лет?', '18');
//Вся информация от пользователя приходит в виде строк

//Информация в виде числа
//const answer = +prompt('Вам есть 18 лет?', '18');

//Добавление, напрмер, вопросов в массив

//const answers = [];

//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваша фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '18');

//ИНТЕРПОЛЯЦИЯ

//const category = 'toys';
//console.log(`https://some.com/${category}/3`); //БЭКТИКИ

//ПРАКТИКА №1!!!!!!!!!!!!!!!!!!!


/*const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '1');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из фильмов?', '');
const b = prompt('Оценка фильма', '');
const c = prompt('Один из фильмов?', '');
const d = prompt('Оценка фильма', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);*/

//УСЛОВИЯ
/*
if (4 == 9) {
    console.log("Бывает");
} else {
    console.log("Nooooooooo!");
}

let num = 15;
(num > 25) ? console.log('Ok'): console.log('No?'); //Тернарный оператор
*/
/*
let num = 15;
switch (num) { //Конструкция switch всегда идет на СТРОГОЕ сравнение
    case 49:
        console.log('Неверно!');
        break;
    case 15:
        console.log('Верно!');
        break;
    default: //Если ни одно значение не верно
        console.log('Не в этот раз');
        break;
}

*/

//ЦИКЛЫ

//let num = 50;
/*
while (num <= 55) {
    console.log(num);
    num++;
}
*/


/*
do {
    console.log(num);
    num++;
}

while (num <= 55);
*/
/*
for (let i = 1; i < 8; i++) {
    if (i === 3) {
        break; //Закончить
    }
    if (i === 7) {
        continue; //Пропустить
    }
    console.log(i);
    console.log(num);
    num++;
}
*/