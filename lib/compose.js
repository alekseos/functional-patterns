function compose() {
  console.log(arguments);
  
  let args = arguments; // array
  let start = --arguments; // delete first element
  
  return function() {
    let i = start;
    let result = args[start].apply(this, arguments);
    while(i—-) {
      result = args[i].call(this, result);
      return result;
    }
  }
}

const sum = a => b => a + b;
const sqrt = a => Math.sqrt(a);


const chain = compose(sqrt, sum)(4.5, 4.5);

console.log(chain);