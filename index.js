// Importing
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const generateLogo = require('./lib/generateLogo');


// Questions for logo information
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Hello and welcome to the SVG Logo Maker. Please enter your text (3 characters max):',
        validate: function(input) {
            if (input.length >= 4) {
                return 'Please enter a MAX of 3 characters.'
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like for the text?',
        validate: function(input) {
            return input ? true :'Please enter a color.'
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape',
        choices: ['Circle', 'Triangle', 'Square'],
        validate: function(input) {
            return list ? true : 'Please enter a shape.'
        }
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape?',
        validate: function(input) {
            return input ? true : 'Please enter a color.'
        }
    }
];

// Calling function to initiate questions and write answers to a file from the collected user data
function getLogo() {
    inquirer.prompt(questions)
    .then(data => writeFile(`./examples/${data.text}.svg`, generateLogo(data)))
    .then(() => console.log('Logo completed! See the examples folder for your new logo.'))
    .catch((err) => console.log('Error, please try again.', err));
}

//
getLogo();