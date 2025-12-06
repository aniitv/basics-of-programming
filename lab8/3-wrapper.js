"use strict";

const contract =
  (fn, ...types) =>
  (...args) => {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const def = types[i];
      const name = def.name.toLowerCase();
      if (typeof arg !== name) {
        throw new TypeError(`Argument type ${name} expected`);
      }
    }
    const res = fn(...args);
    const def = types[types.length - 1];
    const name = def.name.toLowerCase();
    if (typeof res !== name) {
      throw new TypeError(`Result type ${name} expected`);
    }
    return res;
  };
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.log(res1);
