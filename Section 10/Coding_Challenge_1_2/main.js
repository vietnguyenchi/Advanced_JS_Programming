// const poll = {
//     question: "What is your favorite programming language?",

//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

//     answers: new Array(4).fill(0),

//     registerNewAnswer: function() {
//         const result = prompt('What is your favorite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++\n (Write option number)');
//         const options = [0, 1, 2, 3];
//         if (options.some(item => item === Number(result))) {
//             this.answers[Number(result)]++;
//         } else {
//             alert('Please select a number');
//         }
//     },

//     displayResults: function(type = 'array') {
//         if (type === 'string') {
//             console.log(`Poll results are ${[...this.answers]}`)
//         } else {
//             console.log(this.answers);
//         }
//     }
// }

// const makePoll = poll.registerNewAnswer;
// const results = poll.displayResults

// const pollButton = document.querySelector('.poll');
// pollButton.addEventListener('click', () => {makePoll.call(poll), results.call(poll, 'string')});

const poll = {
    question: "What is your favourite programming language?",

    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

    answers: new Array(4).fill(0),

    registerNewAnswer() {
        // Get answers
        const answer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
        );

        // Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array') {
        if (type === 'string') {
            console.log(`Poll result are ${this.answers.join(', ')}`);
        } else {
            console.log(this.answers);
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('html').addEventListener('click', () => {
        header.style.color = 'blue';
    });
})();