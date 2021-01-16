'use strict';
/*
console.log('Запрос данных');

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');
        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);
    }, 2000);
});

req.then((product) => { //Положительный результат
    setTimeout(() => {
        product.status = 'order';
        console.log(product); //получаем модифицированный объект
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => { //Код на случай ошибки
    console.error('Произошла ошибка');
}).finally(() => { //Очистка формы, например. Вызывается в конце
    console.log('FINALLY!');
});

*/

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};
// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});


Promise.race([test(1000), test(2000)]).then(() => { //выполнение после отработки первого промиса
    console.log('All');
});