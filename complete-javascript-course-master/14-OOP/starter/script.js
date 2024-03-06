'use strict';

/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // this.calcAge = function () {
    //     console.log(2037 - birthYear);
    // };
}

const viet = new Person('Viet', 2004);
console.log(viet);

const hien = new Person('Hien', 2004);
console.log(hien);

console.log(viet instanceof Person); // true

console.log(Person.prototype);
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

viet.calcAge();
console.log(viet.__proto__);
console.log(viet.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(viet)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';

console.log(viet.species, hien.species);

console.log(viet.hasOwnProperty('firstName'));  // true
console.log(viet.hasOwnProperty('species'));    // falsef

// 212
console.log(viet.__proto__);
console.log(viet.__proto__.__proto__);
console.log(viet.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

// Set new prototype
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique()); // [3, 6, 5, 9]

*/


// Class expression
// const PersonCl = class {}

// Class declaration
/*
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to prototype property
    calcAge() {
        console.log(2024 - this.birthYear);
    }

    get age() {
        return 2024 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(" ")) {
            this._fullName = name
        } else {
            alert(`${name} is not a full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    // static method
    static hey() {
        console.log(`Hey there 👋`);
        console.log(this);
    }
}

PersonCl.hey();

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.fullName}`);
}

jessica.greet();
console.log(jessica.age);

// 1. Classes are NOT hoisted 
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode



const account = {
    owner: 'viet',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }

}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/

/*
const PersonProto = {

    calcAge() {
        console.log(2024 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2004;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1998);
sarah.calcAge(); 
*/

/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2004, 'Computer Science');
mike.introduce();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/* class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    calcAge() {
        console.log(2024 - this.birthYear);
    }

    get age() {
        return 2024 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(" ")) {
            this._fullName = name
        } else {
            alert(`${name} is not a full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    // static method
    static hey() {
        console.log(`Hey there 👋`);
        console.log(this);
    }
}

class Student extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2024 - this.birthYear} years old, but as a student I feel more like ${2024 - this.birthYear + 10}`);
    }

}

const martha = new Student('Martha Jones', 2004, 'Computer Science');
martha.introduce();
martha.calcAge(); */
/* 
const PersonProto = {

    calcAge() {
        console.log(2024 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto)

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2004, 'Computer Science');
jay.introduce();
jay.calcAge(); 
*/

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;

    // 2) Private fields
    #movement = [];
    #pin;

    constructor(owner, currency, pin,) {
        this.owner = owner;
        this.currency = currency;
        // Protected property
        this.#pin = pin;
        // this._movement = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}`);
    }

    getMovement() {
        return this.#movement;
    }

    // 3) Public methods


    // Public interface
    deposit(value) {
        this.#movement.push(value);
        return this;
    }

    withdraw(value) {
        this.deposit(-value);
        return this;
    }


    requestLoan(value) {
        if (this._approveLoan(value)) {
            this.deposit(value);
            console.log('Loan approved');
            return this;
        }
    }

    static helper() {
        console.log('Helper');
    }

    // 4) Private methods
    // #approveLoan(value) {
    _approveLoan(value) {
        return true;
    }

}

const acc1 = new Account('Viet', 'VND', 2969);

acc1.deposit(250);
acc1.withdraw(-140);
acc1.requestLoan(1000);
Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovement());