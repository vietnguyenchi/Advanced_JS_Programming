'use strict';

// const bookings = [];
// const createBookings = function (
//     flightNum,
//     numPassenger = 1,
//     price = 199 * numPassenger
//     // default values of the parameters
// ){
//     // ES5 
//     // numPassenger = numPassenger || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassenger,
//         price
//     };

//     console.log(booking);
//     bookings.push(booking);
// };

// createBookings('LH123');
// createBookings('LH123', 2, 800);
// createBookings('LH123', 2);
// createBookings('LH123', 5);
// createBookings('LH123', undefined, 1000);
// // if the parameter is undefined then the value is the default value

/*
const flight = 'LH123';
const viet = {
    name: 'Chi Viet',
    passport: 473120471
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 473120471) {
        alert('Checked in');
    } else {
        alert('Wrong Passport');
    }
};

checkIn(flight, viet);
console.log(flight);
console.log(viet);

// Is the same as doing ...
const flightNum = flight;
const passenger = viet;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(viet);
checkIn(flight, viet);
*/

/*
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformer string: ${fn(str)}`);
    console.log(`Transformered by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('👋');
}
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Viet');
greeterHey('Khoi');

greet('Hello')('Viet');

// Shorter way
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey2 = greet2('Hey');
greeterHey2('Minh');
greeterHey2('Huong');
greet2('Hello')('Huong');
*/

/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function () {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
};

lufthansa.book(239, 'Chi Viet');
lufthansa.book(239, 'Viet Nguyen');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'XL',
    bookings: []
}

book.call(swiss, 538, 'Mary Cooper');
console.log(swiss);

// // Apply method
const filghtData = [532, 'George Cooper'];
book.apply(swiss, filghtData);
console.log(swiss);

// // The same way
// // book.call(swiss, ...filghtData);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Viet');
bookEW23('Chi');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
*/

/*
// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/*
const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

// IIFE 
(function () {
    console.log('This will never run again');
}());

(() => console.log('This will ALSO never run again'))();
*/

/*
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};


g();
f();

// Re-assigning f function
h();
f();
*/

/*
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);

}

boardPassengers(180, 3);
*/