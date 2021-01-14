'use strict';


//геттеры
// const now = new Date();
// console.log(now);

// console.log(now.getFullYear()); //получение года и тд...

// console.log(now.getDay()); //получение номера недели (С воскресенья)

// console.log(now.getTimezoneOffset()); //Разница в минутах между нашем временем и UTC

// //сеттеры
// console.log(now.setHours(3)); //Установка времени  и тд. Можно через запятую (Часы, минуты, секунды...)

// //с датами работает автоисправление

let start = new Date();

console.log(start);

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();

console.log(`цикл отработал за ${end - start} миллисекунд`);