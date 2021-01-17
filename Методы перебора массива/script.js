//forEach никогда не создает новый массив

//filter
/*
const names = ['Ivan', 'Ann', 'Volandemort'];

const shortNames = names.filter(function(name) {
   return name.length < 5;
});

console.log(shortNames);
*/

//map - позволяет взять исходный массив и изменить его

let answers = ['iVAN', 'ANnA', 'HEllo'];

const result = answers.map(item => item.toLowerCase()); //вместо result можно использовать answers чтобы переписать
console.log(result); //но лучше исо=пользовать другую переменную

//every/some - Возвращают true или false

const some = [4, '3414rfc', 'fsafv'];

console.log(some.some(item => typeof(item) === 'number')); //в коде есть число, значит true

console.log(some.every(item => typeof(item) === 'number')); //только один элемент, а не все, зачит false


// reduce - собрание массива в одно целое

const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

const arrr = ['apple', 'pear', 'plum'];

const ress = arrr.reduce((sum, current) => `${sum} , ${current}`);
console.log(ress);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj) //Создание массива из объекта и фильтр
    .filter(item => item[1] === 'persone') //получили два массива
    .map(item => item[0]); //полуили имена
console.log(newArr);