
// Load the NPM Package inquirer
const inquirer = require('inquirer');

// Reference source code files
let letterGuess = require("./letters.js");

/**
 * @param {function} inputWord
 * @param {string} wordToGuess
 */
function inputWord() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What word do you want them to guess? ',
                name: 'wordToGuess',
            }
        ])
        .then(function (inquirerResponse) {
            console.log(`Okay, you want them to guess the word ${inquirerResponse.wordToGuess} !`);
            guessLetter(inquirerResponse.letterGuessed);
        }
        );
}

/**
 * @param {function} guessLetter
 * @param {string} letterGuessed
 */
function guessLetter() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Guess a letter: ',
                name: 'letterGuessed',
            }
        ])
        .then(function (inquirerResponse) {
            console.log(`You guessed ${inquirerResponse.letterGuessed} !`)
        }
        );
}

inputWord();
