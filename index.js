const curry = a => b => c => a + b + c;

const result123 = curry(1)(2)(3);

const result12 = curry(1)(2);
const result12_3 = result12(3);

console.log(result123);

console.log(result12);
console.log(result12_3);