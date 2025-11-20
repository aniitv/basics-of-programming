// function seq(...initialFunctions) {
//   const functions = [...initialFunctions];
//   function chain(arg) {
//     if (typeof arg === "number") {
//       return functions.reduce((accumulator, currentFunction) => {
//         return currentFunction(accumulator);
//       }, arg);
//     } else if (typeof arg === "function") {
//       functions.push(arg);
//       return chain;
//     } else {
//       console.log("Ожидалось число или функция.");
//     }
//   }
//   return chain;
// }

// console.log(seq((x) => x + 7)((x) => x * 2)(5));
"use strict";

const seq = (initialFunction) => {
  const functions = [initialFunction];

  const chain = (arg) => {
    if (typeof arg === "number") {
      // Виконуємо функції у порядку, в якому вони були додані
      return functions.reduce((accumulator, currentFunction) => {
        return currentFunction(accumulator);
      }, arg);
    } else if (typeof arg === "function") {
      functions.push(arg);
      return chain;
    } else {
      throw new Error("seq: Очікувалося число або функція.");
    }
  };

  return chain;
};
console.log(seq((x) => x + 7)((x) => x * 2)(5));
