console.log('💥 hello world 💥');

var nonexistent;

console.log(nonexistent);

//====== VARIABLES ======//
// Variables are like boxes/containers that hold references to values
// Using Var:
var hello = "World";

var importantVariable = "This is some important code!!";
var importantVariable = "Something else!";

console.log(importantVariable);

// DO NOT USE VAR !!!!
// Can be redeclared and reassigned!

// Using let:
  // Cannot be used before declared
  // Cannot be declared twice
  // Can be overwritten

let anotherImportantVariable = "This is some important code!!";

anotherImportantVariable = "Something else";

console.log(anotherImportantVariable);

// Using const:
  // Cannot be declared twice
  // Can't reassign value

const important = "This is some important code!!";
// important = "SOMETHING!";

// We can store both primitive and composite values in variables
  // Primatives values are:
    // Numbers, strings, booleans, undefined, null
    let myNum = 5;
    let myNum2 = 5 + 4;
    let myBoolean = false;
    let myBoolean2 = 5 > 2;
    let myString = "Some string";
    let myString2 = 'Some string';
    let myString3 = `Some string`;

  // Composite values are:
    // Objects, functions, and arrays
    const myCarObject = { make: "Ford" };
    const myRandomArray = [1, 2, 3, 4, true];
    const myRandomFunc = function() {
      // Some code here
    };

//====== FUNCTIONS ======//
// A procedure: a set of statements to perform some action
// "Subprogram": takes inputs => performs actions => returns outputs

// function declaration
function myFunction(string) {
  return string + " some more text to the string";
}

console.log(myFunction("something"));

// Function expression
const greetMe = function(name) {
  const greeting = "Hello! my name is " + name;

  return greeting;
}

console.log(greetMe("Dimos"));

// Arrow function expression
const myArrowFunction = () => {
  // additional
  return "result from arrow function";
}

console.log(myArrowFunction());

// the one-liner
const oneLiner = () => "This is returned from the one-liner";

console.log(oneLiner());

//====== OBJECTS ======//
// A labelled collection of values

const someCar = {
  make: "Ford",
  model: "GT",
  "color": "Purple"
};

console.log(someCar);

// Using dot notation:
console.log(someCar.make);

// Using square bracket syntax:
console.log(someCar["color"]);

// Adding properties to objects
someCar['engine'] = "5L Petrol";
someCar.model = "Escort";

// Object methods
// A function within an object
someCar.drive = function() {
  return "Vroom!";
}

console.log(someCar.drive());

function changeColor(carObj, color) {
  carObj.color = color;
  return carObj;
}

console.log(changeColor(someCar, "Red"));

// CHALLENGE!
// 1. Create an object called person that has an age, name, & catchphrase
// 2. Create a function called increaseAge that takes the person object as an argument
// returns the object with the age increased by 1

// Austin
const person = {
  name: "James Bond",
  age: 45,
  occupation: "Agent",
  catchPhrase: "Shaken, not stirred.",
  introduceSelf: function() {
    return `The name's Bond, ${this.name}.`;
  }
};

function increaseAge(personObj) {
  personObj.age++;
  return personObj;
}

console.log(increaseAge(person))

console.log(person.name);
console.log(person["catchPhrase"]);

//====== ARRAYS ======//
// Ordered collection of values
const fruits = ["apple", "pear", "banana", "lemon", 5, [1,3,4,5], { name: "hello"}];

console.log(fruits);

console.log(fruits[fruits.length - 1]);

// Push - adds items to the end an array
fruits.push(true);
// Unshift - adds items to the front of the array
fruits.unshift("watermelon");
// Pop - remove the last item
fruits.pop();

const cars = [
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 },
  { id: 28, car_make: "Suzuki", car_model: "Aerio", car_year: 2005 },
  { id: 29, car_make: "Mercury", car_model: "Topaz", car_year: 1993 },
  { id: 37, car_make: "Oldsmobile", car_model: "LSS", car_year: 1997 },
  { id: 40, car_make: "Lotus", car_model: "Evora", car_year: 2012 }
];

//====== LOOPS ======//
for (let i = 0; i < fruits.length; i++) {
  if (i > 3) {
    console.log(fruits[i]);
  }
}

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].car_make);
}

// Challenge!
// 1. Print out the model of the fifth item within the cars array
// 2. Create a function called getCar that takes the cars array and a name as arguments
// 3. Use getCar to print out the car with the name provided
  // Hint: You will need a loop, an if statement...