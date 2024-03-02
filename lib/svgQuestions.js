const inquirer = require('inquirer');
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for logo text.',
            validate: function (input) {
                return input.length >= 4 ? true : 'Please enter no more than 3 characters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color by keyword or hexadecimal.'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose the shape for your logo',
            choices: ['Circle', 'Triangle', 'Square']

        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color by keyword or hexadecimal.'
        }      
    ]);
}

module.exports = promptUser();