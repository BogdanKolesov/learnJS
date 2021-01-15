'use strict';
//REST-оператор помещает данные в массив
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) { //basis или 2
    console.log(number * basis);
}

calcOrDouble(3); //умножится на два