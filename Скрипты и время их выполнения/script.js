// // const timerId = setTimeout(function(text) {
// //     console.log(text);
// // }, 2000, 'Hello'); //Задержка выполнения функции. Можно использовать аргументы как в примере

const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500); //Каждые две сеунты будет console.log
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// //Рекурсивный SetTimeout лучше тем, ждет, пока выполнятся действия в функции

// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);

// //практика

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);