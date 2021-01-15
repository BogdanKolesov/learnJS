'use strict';

//Классы - красивая обертка фнукций - конструкторов
//Классы удобнее функций - конструкторов
class Rectangle { //название С БОЛЬШОЙ БУКВЫ
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() { //метод
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); //Вызов от родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

// const sqare = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(sqare.calcArea());
// console.log(long.calcArea());

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());