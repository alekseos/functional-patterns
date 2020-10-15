const R = require("ramda");

const test = [
  {
    name: "Spider Man",
    weapon: "Web"
  }, {
    name: "Thor",
    weapon: "Hammer"
  }, {
    name: "Hulk",
    weapon: "Angry"
  }
];

const sequence = function(/*функции*/) {
  const funcs = Array.prototype.slice.call(arguments);
  
  return function(val) {
    funcs.forEach(function (fn) {
      fn(val);
    });
  };
};

const debugLog = debug => console.log(debug);
const debug = R.tap(debugLog);

const add = item => item.universe = "Marvel";
const addUniverse = array => R.map(add, array);

const mapping = R.pipe(
  debug,
  addUniverse,
  debug
);

mapping(test);

