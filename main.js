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

//ПРАКТИКА №2!!!!!!!!!!!!!!!!!!!

/*
const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '1');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





for (let i = 0; i < 2; i++) {
    if (i === 2) {
        break; //Закончить
    }
    const a = prompt('Один из фильмов?', ''),
        b = prompt('Оценка фильма', '');


    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }

}
console.log(personalMovieDB.movies);

if (personalMovieDB.count < 10) {
    console.log('Много фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы - классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы - киноман!');
} else {
    console.log('Произошла ошибка');
}
*/

//Функции, стрелочные функции (ES6)
/*
function showFirstMessage() { //обычная функция. В скобках архументы функции
    console.log("Hello World");
}
showFirstMessage();

function showText(text) {
    console.log(text);
    let num = 20; //Локальные переменные существуют только внутри блока функций
}
showText("That text");

//.....................................

//Замыкания функций - функция со всеми внешними переменными, которые ей доступны
let num = 30;

function showText(text) {
    console.log(text);
    let num = 20;
    console.log(num);
}
showText(num);

//Калькулятор, например. Function Decloration. Существует до того, как ее объявили
function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));
console.log(calc(2, -33));
console.log(calc(5, 1));

//Вывод функции наружу
function ret() {
    let num = 50;

    //


    return num;
}

const anotherNum = ret();
console.log(anotherNum);


//Function Expression. Существует после объявления
const logger = function() {
    console.log("Hello");
}; //В таких фнукциях нужно ставить точку с запятой
logger();

//Стрелочные функции

const calc = (a, b) => {
    console.log(1);
    return a + b
};
*/

//МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ
/*
const str = "text";
console.log(str.length);
console.log(str[1]);
console.log(str.toUpperCase());

const arr = [1, 2, 4];
console.log(arr.length);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); //поиск внутри строки

const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.slice(6)); //вырезать строку с 7 символа до конца
console.log(logg.slice(-5, -1)); //отсчет справа

console.log(logg.substring(6, 11)); //не поддерживает отрицательные значения

console.log(logg.substr(6, 5)); //Второй аргумент - количество символов, которые нужно вырезать

const num = 12.2;
console.log(Math.round(num)); //округление

const test = "12.2px";
console.log(parseInt(test)); //Извлечь целое число из строки
console.log(parseFloat(test)); //Извлечь дробное число

*/

//Практика №3. ФУНКЦИИ
/*
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        if (i === 2) {
            break; //Закончить
        }
        const a = prompt('Один из фильмов?', ''),
            b = prompt('Оценка фильма', '');


        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }

    }
}

rememberMyFilms();

console.log(personalMovieDB.movies);


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Много фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы - классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы - киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номмером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();
*/

//CALLBACK - ФУНКЦИИ - функция, которая должна быть выполнена после завершения предыдущей
/*
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);
//Callback позволяет выполнить функции строго одна за другой
*/

/////////Объекты, деструктуризация объектов (ES6)_________________
/*

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test'); //Функция внутри объекта
    }
};

options.makeTest();

//Деструктуризация
const { border, bg } = options.colors;
console.log(border);

//!Свойства-акцессоры - get и set!


//delete options.name; //Удаление 
//console.log(options.name);

/*
//Перебор объекта
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);
*/

//console.log(Object.keys(options).length); //Лучше использовать вместо counter

//for of не работает  для объекта

//МАССИВЫ И ПСЕВДОМАССИВЫ
//В массиве элементы лежат по порядку
/*
const arr = [29, 211, 3, 15, 14, 9];
arr.sort(compareNum);


function compareNum(a, b) {
    return a - b;
}
console.log(arr);

*/
/*
const str = prompt('', '');
const products = str.split('', '');
console.log(products.join(' ; '));
*/

/*
arr.forEach(function(item, i, arr) { //Самый нормальный перебор, если не нужен break и continue
    console.log(`${i}: ${item} внутри масива ${arr}`);
});

//arr.pop(); //удалить элементы
arr.push(10); //добавить элемент

//console.log(arr);

for (let i = 0; i < arr.length; i++) { //перебор массива
    console.log(arr[i]);
}

for (let value of arr) { //тоже перебор массива
    console.log(value);
}
*/

//SPREAD - ОПЕРАТОР
/*
let a = 5,
    b = a;
b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};
// const copy = obj; //передачи ссылки на объект
// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

//Копии объектов бывают глубокие и поверхностные

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //Соединение объектов

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

//Создание копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[2] = 'ardgvbv ';
console.log(oldArray);
console.log(newArray);

//Поверхностная копия в ES6 - ES8 Spread - оператор разворота (три точки)

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

const arrrraay = [1, 2];
const newArrraay = [...arrrraay];

const q = {
    one: 1,
    two: 2
};
const newObj = {...q };
console.log(newObj);
*/

//ОСНОВЫ ООП
/*
const soldier = {
    health: 400,
    armor: 100
};

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; //устаревший метод

// console.log(john.armor);

const john = Object.create(soldier); //Правильное создание наследников прототипа
*/

//ПРАКТИКА №4........._______________________________________________

/*


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            if (i === 2) {
                break; //Закончить
            }
            const a = prompt('Один из фильмов?', ''),
                b = prompt('Оценка фильма', '');


            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }

        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Много фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы - классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы - киноман!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номмером ${i}`);
            if (genre === '' || genre === null) {
                console.log('Некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
*/

//ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ - возможность одного типа данных превразаться в доругой
/*
//toString
console.log(String(null)); //почти не используется


console.log(typeof(5 + '')); //конкатинация

//toNumber
console.log(typeof(Number('4'))); //устаревшее

console.log(+'5'); //унарный плюс

console.log(parseInt('5px', 10));

let answ = +prompt('Hello', ''); 

//toBoolean

// 0, '', null, undefined, NaN === false. Остальное - true

*/

//ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ

