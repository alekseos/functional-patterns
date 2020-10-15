const R = require("ramda");

const str = 'ANDREY ALeksEEv-27';

const debugLog = str => console.log(str);
const debug = R.tap(debugLog);

const toLower = str => str.toLowerCase();
const cleanSymbols = str => str.replace(new RegExp(/[^a-zA-Z\s]/g), '');
const toUpper = str => str.replace(new RegExp(/(?:^\s*|\s+)(\S?)/g), str => str.toUpperCase());

const debugEach = R.pipe(
  toLower,
  debug,
  cleanSymbols,
  debug,
  toUpper,
  debug
);


debugEach(str);