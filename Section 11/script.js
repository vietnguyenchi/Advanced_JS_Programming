'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements, sort = false) {
    // containerMovements.innerHTML = 

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements.slice().sort((a, b) => b - a);

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = /*html*/`
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} Deposit</div>
            <div class="movements__value">${mov}€</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });

}

// displayMovement(account1.movements);

const user = 'Steven Thomas Williams'; // stw

const createUsernames = function (accs) {

    accs.forEach(acc => {
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
    });

}
createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovement(acc.movements);

    // Display balance
    calcDisplayPrintBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
}

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * acc.interestRate / 100)
        .filter(int => int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumIn.textContent = `${incomes}€`;
    labelSumOut.textContent = `${Math.abs(outcomes)}€`;
    labelSumInterest.textContent = `${interest}€`;
}

// calcDisplaySummary(account1.movements);

const calcDisplayPrintBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
}

// calcDisplayPrintBalance(account1.movements);

// Event handler
let currentAccount;

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI & message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        updateUI(currentAccount);
    }
});


btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    console.log(receiverAcc, amount);
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // updateUI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
        inputLoanAmount.value = '';
    }

})

btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);

        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';

});

let sorted = false;
btnSort.addEventListener('click', (e) => {
    e.preventDefault();
    displayMovement(currentAccount.movements, !sorted);
    sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// console.log(arr);               // ['a', 'b', 'c', 'd', 'e']
// console.log(arr.slice(2));      // ['c', 'd', 'e']
// console.log(arr.slice(2, 4));   // ['c', 'd']
// console.log(arr.slice(-2));     // ['d', 'e']
// console.log(arr.slice(1, -2));  // ['b', 'c']

// SPLICE
// console.log(arr.splice(2));
// arr.splice(-1)
// console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2);              // ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse());    // ['f', 'g', 'h', 'i', 'j']
console.log(arr2);              // ['f', 'g', 'h', 'i', 'j']

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);               // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]);     // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN
console.log(arr.join(' - ')); // a - b - c - d - e
*/

/*
const arr = [23, 54, 31];           
console.log(arr[0]);        // 23
console.log(arr.at(0));     // 23

// getting last array element
console.log(arr[arr.length - 1]);   // 31
console.log(arr.slice(-1)[0]);      // 31
console.log(arr.at(-1));            // 31

console.log('Viet'.at(0));          // 31
console.log('Viet'.at(-1));         // 31
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*

for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
    }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposit ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
    }
});
*/


const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

/*
currencies.forEach(function (key, value, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'UER', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (key, value, map) {
    console.log(`${key}: ${value}`);
});
*/

/*
const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);
*/

/*
const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);
*/

// PIPELINE
const eurToUsd = 1.1;
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
for (const acc of accounts) {
    if (acc.owner === 'Jessica Davis') console.log(acc);
}
console.log(account);
*/

/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(arrDeep.flat(2));
*/

/*
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
*/

/*
const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const overalBalance2 = accounts.flatMap((acc => acc.movements)).reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
*/
/*
// String
const owner = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owner.sort());
console.log(owner);

// Number
movements.sort((a, b) => a - b);
movements.sort((a, b) => b - a);
console.log(movements); 
*/

/*
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
*/

labelBalance.addEventListener('click', () => {
    const movementsUI = Array.from(
        document.querySelectorAll('movements__value'),
        el => Number(el.textContent.replace('€', ''))
    );

    const movementsUI2 = [...document.querySelectorAll('movements__value')];

    console.log(movementsUI);
})

// 1
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2
// const numDeposits1000 = accounts
//     .flatMap(acc => acc.movements)
//     .filter(mov => mov > 1000).length;

const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => cur >= 1000 ? ++count : count, 0)
console.log(numDeposits1000);

// 3
const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
    // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
}, { deposits: 0, withdrawals: 0 });
console.log(deposits, withdrawals);

// 4
// This is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
    const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

    const capitalize = str => str[0].toUpperCase() + str.slice(1)

    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
    return capitalize(titleCase);
}
console.log(convertTitleCase('This is a nice title'));
console.log(convertTitleCase('This is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXPLAIN')); 