'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass); //настройка соединения с сервером
    //GET - запрос, POST - отправка
    request.open('GET', '/js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    // status //номер статуса
    // statusText //название статуса
    // response  //ответ
    //readyState //текущее состояние

    request.addEventListener('readystatechange', () => { //Статус готовности запроса в текущий момент
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });
});