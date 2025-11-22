"use strict";

function seq(...args) {
  const functions = [...args];

  function chain(value) {
    if (typeof next === "number") {
      return functions.reduceRight((result, fn) => fn(result), value);
    } else if (typeof value === "function") {
      functions.push(value);
      return chain;
    }
  }

  return chain;
}

console.log(seq((x) => x + 7)((x) => x * 2)(5));
// Результат: 17
console.log(seq((x) => x * 2)((x) => x + 7)(5));
// Результат: 24
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));
// Результат: 3
