'use strict';

document.querySelector(
  'h1'
).textContent = `Data Structures and Modern Operators: String`;

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    // 'thu'
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours, // ES6

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const airline = 'TAP Air Portugal';
console.log(airline);

console.log('indexOf() ', airline.indexOf('r'));
console.log('lastIndexOf() ', airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log('slice() ', airline.slice(4));
console.log('slice() ', airline.slice(4, 7));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const airline2 = ' TAP Air Portugal \n';
console.log('trim() ->', airline2.trim());
console.log(airline2.trim());

const priceUS = '1000,1$';
const priceVN = priceUS.replace('0', '11').replace(',', '.');
console.log('replace() ->', priceVN);
console.log('/string/g', priceUS.replace(/0/g, '11'));

console.log('includes() ->', airline.includes('Air'));
console.log('startsWith() ->', airline.startsWith('TAP'));
console.log('endsWith() ->', airline.endsWith('Air'));

// join()
// split()
// push()

console.log('padStart() ->', airline.padStart(25, '+'));
// padEnd()

// repeat()
console.log('repeat() ->', airline.repeat(3));

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. 
Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose,
 so start watching the solution in case you're stuck. 
 Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

console.log('--------------Code Challenge-----');
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textareaEl = document.querySelector('textarea');
document.querySelector('button').addEventListener('click', function () {
  const strInput = textareaEl.value;
  // console.log(strInput);
  const rows = strInput.split('\n');
  // console.log(rows);

  for (const [index, value] of rows.entries()) {
    // to lower case and delete spaces
    rows[index] = value.toLowerCase().trim();
    const charAfter_ = rows[index].indexOf('_') + 1;
    rows[index] = rows[index].replace(
      `_${rows[index].charAt(charAfter_)}`,

      rows[index].charAt(charAfter_).toUpperCase()
    );
    // console.log(charAfter_, rows[index].charAt(charAfter_).toUpperCase());
    // console.log(rows[index]);
    console.log(`${rows[index].padEnd(20)}${'✅'.repeat(index + 1)}`);
  }
});

/* document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
}); */
