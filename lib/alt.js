const R = require('ramda');

//we wrote the function which choose the defined function by two alternativies

//the first implementation is mine and this implementation with old school carring, the second one uses array function, the last uses Ramda library

const alt = function(func1, func2) {
  return function (val) {
    return func1(val) || func2(val);
  }
}

const _alt = (func1, func2) => val => 
  func1(val) || func2(val);

const __alt = R.curry((func1, func2, val) =>              func1(val) || func2(val));

// execution

function first() {
}

function second(val) {
  console.log(val ** 2);
}

console.log(alt(first, second));
console.log(_alt(first, second));
console.log(__alt(first, second));


console.log(alt(first, second)(333));
console.log(_alt(first, second)(333));
console.log(__alt(first, second, 333));