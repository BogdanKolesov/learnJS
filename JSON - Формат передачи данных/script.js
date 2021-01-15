'use strict';


const persone = {
    name: 'Alex',
    tel: '+79500005905',
    parents: {
        mom: 'Olga',
        dad: 'John'
    }
};

console.log(JSON.stringify(persone)); //Перенос данных из объекта в json
console.log(JSON.parse(JSON.stringify(persone))); //JSON в JS

//Глубокии копии
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(clone.parents.mom);