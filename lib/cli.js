const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile } = require('./writeFile');
const shapes = require('./shapes');
// const svgQuestions = require('./lib/svgQuestions.js');

class CLI {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;        
    }
    run() {
        return inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for logo text.',
            validate: function (input) {
                return input.length <= 3 ? true : 'Please enter no more than 3 characters.';
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
    ])
    .then((answers) => {
        // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
        if (answers.text.length > 3) {
          console.log("Must enter a value of no more than 3 characters");
          promptUser();
        } else {
          // Calling write file function to generate SVG file
          writeFile("logo.svg", answers);
        }
      });
    
}      
    }
   
module.exports = CLI;