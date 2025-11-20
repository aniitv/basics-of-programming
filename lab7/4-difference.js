"use strict";
const arr1 = [7, -2, 10, 5, 0];
const arr2 = [0, 10];

function difference(array1, array2) {
  const array = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      array.push(item);
    }
  }

  return array;
}
console.log(difference(arr1, arr2));

//інший спосіб
// const difference = (array1, array2) =>
//   array1.filter((item) => !array2.includes(item));

// console.log(difference(arr1, arr2));
