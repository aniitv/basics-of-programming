"use strict";

function contract(fn, ...types) {
  for (let type of types) {
    return function (...args) {
      for (let i = 0; i < types.length - 1; i++) {
        if (typeof args[i] !== types[i].name.toLowerCase()) {
          throw new TypeError();
        }
      }

      const result = fn(...args);

      if (typeof result !== types[types.length - 1].name.toLowerCase()) {
        throw new TypeError();
      }

      return result;
    };
  }
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings("Hello ", "world!");
console.dir(res2);
