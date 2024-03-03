// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Teset for a triangle with a pink background to render
describe("Test Triangle", () => {
  test("Test a triangle with a pink background", () => {
    const shape = new Triangle();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="pink" />'
    );
  });
});

// Test for a square with a blue background to render
describe("Test Square", () => {
  test("Test a square with a blue background", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="blue" />'
    );
  });
});

// Test for a circle with a green background to render
describe("Test Circle", () => {
  test("Test a circle with a green background", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="green" />'
    );
  });
});