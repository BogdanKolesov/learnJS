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


const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '1');

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

console.log(personalMovieDB.movies);