'use strict';

// const num = new Number(3); //Некорректный способ создания нового числа

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    }
}

User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`);
}


const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();
ivan.exit();


//ES6