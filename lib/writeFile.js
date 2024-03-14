const fs = require('fs');
const { Triangle, Square, Circle } = require('./shapes');

function writeFile(fileName, answers) {
  // File starts as an empty string
  // Conditional check takes users input from choices array and then adds polygon properties and shape color to SVG string
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
  } else {
    shapeChoice = new Circle();
  }
  shapeChoice.setColor(answers.shapeColor)
  let svgTemplate = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <g> ${shapeChoice.render()}
  <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
  </g>
  </svg>`
  // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"

  // Using file system module to generate svg file, takes in file name given in the promptUser function, the svg string, and a ternary operator which handles logging any errors, or a "Generated logo.svg" message to the console  
  fs.writeFile(fileName, svgTemplate, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

module.exports = { writeFile };