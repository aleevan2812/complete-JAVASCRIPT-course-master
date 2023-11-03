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

// Coding challenge 1 - trong file coding_Challenge.js

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // method add to .propertype
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hi there');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica oke', 1998);
// console.log(jessica.firstName);
console.log(jessica.__proto__);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);
PersonCl.hey();
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

/* 013. Object.create */
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // not a constructor
  init(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1919);
sarah.calcAge();

/* 014 Coding challenge in other file .js*/

/* 015 Inheritance Between Classes Constructor Functions */
/*  */

// Coding challenge 3 - trong file coding_Challenge.js

/* 017 Inheritance Between Classes ES6 Classes */
// Continue 015

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first.
    super(fullName, birthYear); // call PersonCl constructor
    this.course = course;
  }
  // this constructor is not created if no have any other properties deference from PersonCl properties

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${this.birthYear} years old`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

/* 018 Inheritance Between Classes Object.create */
// Continue with 013 Object.create
/* // this is code in 013 Object.create
  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },

    // not a constructor
    init(firstName, birthYear) {
      this.birthYear = birthYear;
      this.firstName = firstName;
    },
  }; 
*/

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.calcAge();

/* 019 Another Class Example */

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }
  // public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val){
    return true;
  }

  requestLoan(val){
    if(this._approveLoan(val)){ 
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(100);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

/* 020 Encapsulation Protected Properties and Methods */
// add "_" in 019
