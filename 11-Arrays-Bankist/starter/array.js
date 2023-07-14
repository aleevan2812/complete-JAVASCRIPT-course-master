'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice()   [x,y)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// splice()
arr.splice(-1);
console.log(arr);
arr.splice(1, 3);
console.log(arr);

// reverse()
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat()
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//join()

// forEach(function(element, index, currentArray){})
// forEach(function(element, _, currentArray){})

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {});

const currenciesUnique = new Set(['USD', 'GPT', 'USD']);
console.log(currenciesUnique);

// flat()
const arrDeep = [[[1, 2], 3], [4, 5], 6, 7];
console.log(arrDeep.flat());
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));

// flatMap() === flat().map()

// sort()
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

movements.sort((a, b) => a - b);
console.log(movements);

// fill() [x, y]
const arr3 = [1, 2, 3, 4, 5, 6, 7];

const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

x.fill(1);
console.log(x);

arr3.fill(23, 2, 6);
console.log(arr3);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
