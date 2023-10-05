'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // dont do this
  // calcAge = () => console.log(2037-this.birthYear);
  // vì khi khởi tạo mới 1 đối tượng nó sẽ tạo lại calcAge()
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(jonas instanceof Person);

console.log(Person.prototye);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototypeOfLinkedObjects

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('calcAge'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
// Object.prototype (top of prototype chain)

// không nên tạo nhiều prototype vì:
// 1. Vì trong tương lai JavaScript sẽ cập nhật thêm prototype cùng tên -> lỗi
// 2. Trong 1 dự án nhiều người làm sẽ gây trùng prototype

// Coding challenge 1