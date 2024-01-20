// const arr = [2, 3, 4];

// const [x, y, z] = arr;

// console.log(x, y, z); // 2 3 4

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22
    },
    [weekdays[4]]: {
        open: 11,
        close: 23
    },
    [weekdays[5]]: {
        open: 0,
        close: 24
    }
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Voa Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:20', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
    return `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`;
    },

    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
}   

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));

        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('chi viet nguyen');

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(123456789));
console.log(maskCreditCard(923045701324750));
console.log(maskCreditCard(897897429352345));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...\n';
console.log(message2.repeat(4));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(2);
planesInLine(5);
planesInLine(8);

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toLocaleUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@example.com';
// const loginEmail = '   Hello@example.Com \n';

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passenger come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Boolean
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('Part of the New Airbus family');
// }

// // Practice exercise
// const checkBaggage = function(items) {
//     const baggage = items.toLowerCase();
//     if(baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are Not allowed on board');
//     } else {
//         console.log('Welcome aboard');
//     }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     if(s === 'B' || s === 'E') {
//         console.log('You got the middle seat 😐');
//     } else {
//         console.log('You got lucky 😎');
//     }
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const question = new Map([
//     ['question', 'What is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct 🎉'],
//     [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//     if(typeof key === 'number') {
//         console.log(`Answer ${key}: ${value}`);
//     }
// }
// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//     .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

// console.log(ordersSet); // {'Pasta', 'Pizza', 'Risotto'}

// console.log(new Set('Viet')); // {'V', 'i', 'e', 't'}

// console.log(ordersSet.size); // 3 // 'Size' not 'length'
// console.log(ordersSet.has('Pizza')); // true
// console.log(ordersSet.has('Bread')); // false
// ordersSet.add('Garlic Bread')
// ordersSet.add('Garlic Bread')
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet); // {'Pasta', 'Pizza', 'Garlic Bread'} // only one 'Garlic Bread' be added


// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//     openStr += ` ${day}, `;
// }

// console.log(openStr);

// if (restaurant.openingHours && restaurant.openingHours.mon.open) {
//     console.log(restaurant.openingHours.mon.open);
// }

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'John', email: 'john@example.com' }];
// console.log(users[0]?.name ?? 'User array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item); // Focaccia ...

// for (const item of menu.entries()) console.log(item); //[0, 'Focaccia'] ...

// for(const item of menu.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}`); // 1: Focaccia ...
// }

// restaurant.orderPizza('mushrooms', 'olives', 'onion', 'spinach');

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays)

// // Function
// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);
// }
// add(2, 3);
// add(2, 3, 4, 5);

// const x = [23, 4, 5];
// add(...x);
 
// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr); // [1, 2, 3, 4]

// // REST, because on LEFT side of =
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other);  // 1 2 [3, 4, 5]

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.mainMenu]
// console.log(pizza, risotto, otherFood)

// Objects
// const newRestaurant = {foundedIn: 1988, ...restaurant, founder: 'Viet'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Chi Viet';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// const ingredients = [
//     prompt('Let\'s make pasta! Indredient 1?'),
//     prompt('Indredient 2?'),
//     prompt('Indredient 3?')
// ];

// console.log(restaurant.orderPasta(...ingredients));

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr) // [1, 2, 7, 8, 9]
// console.log(...newArr) // 1 2 7 8 9
 
// Join 2 arrays
// const newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(newMenu)

// 

// restaurant.orderDelivery({
//     address: 'Via del Sole 21',
//     starterIndex: 1,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName, 
//     openingHours: hour,
//     categories: tags
// } = restaurant
// console.log(restaurantName, hour, tags); // same line 33

// Default values 
// const {
//     menu = [],
//     starterMenu: starters = [],
// } = restaurant
// console.log(menu, starters);

// Mutating values
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({a, b} = obj);

// console.log(a, b) // 23 7

// Nested Objects
// const { fri: {open: o, close: c} } = openingHours;
// console.log(o, c) // 11 23

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // const [first, second] = restaurant.categories;
// //console.log(first, second); // Focaccia Bruschetta

// const [first, , second] = restaurant.categories;
// console.log(first, second); // Focaccia Garlic

// // Switching variables

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary); // Focaccia Bruschetta
// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Bruschetta Focaccia

// Nested destructuring
// const nested = [2, 3, [4, 5]];
// // const [i, , j] = nested; // 2 [4, 5]
// const [i, , [j, k]] = nested;
// console.log(j, i, j); // 2 4 5

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r) // 8 9 1

const rest1 = {
    name: 'Capri',
    // numGuests: 20
    numGuests: 0
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};

// OR
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Nullish
// rest1.numGuests ??= 10; // same as line 175
// rest2.numGuests ??= 10; // same as line 176

// AND
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);