console.log('💥 hello world 💥');

//====== VARIABLES ======//
var hello = "World";
let hello1 = "World1";
const hello2 = "World2";
hello3 = "World3";

console.log(hello, hello1, hello2, hello3);


// Using Var:
var importantVariable = "This is some important code!!!";

var importantVariable = "Something Else";
// DO NOT USE VAR !!!!

console.log(importantVariable);

// Using let:
  // Cannot be declared twice
  // Can be overwritten
let AnotherImportantVariable = "Some Important Code";

AnotherImportantVariable = "something else!!";

console.log(AnotherImportantVariable);


// Using const:
  // Cannot be declared twice
  // Can't reassign value

const important = "Importantant value";

// important = "I'm overwriting!!!";

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
function myFunction(string) {
  return string + " some more text to the string";
}

console.log(myFunction("something"));

function greetMe(name) {
  console.log('Hello ' + name);
}

greetMe('John');

function multiply(x, y) {
  return x * y;
}

console.log(multiply(2, 3));

let information = "Did you know Aberdeen " + "is scotlands 3rd biggest city";

function aberdeenCity(info) {
  return info;
}

console.log(aberdeenCity(information));

let mySavedFunction = function () {
  return "some string"
};

console.log(mySavedFunction());

const myArrowFunction = () => {
  return "result from arrow function";
};

console.log(myArrowFunction());

//====== OBJECTS ======//
let someCar = {
  "make": "Ford",
  "model": "GT",
  "color": "Purple"
};

// Using dot notation:
someCar.engine = "5L Petrol";
// Using square bracket syntax:
someCar["transmission"] = "Manual";

console.log(someCar);

const archer = {
  createdAt: "05.05.2018",
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
}

let archerKeys = Object.keys(archer);
let archerValues = Object.values(archer);
let archerEntries = Object.entries(archer);

// console.log(archerKeys, archerValues, archerEntries);

let myfaves = {
    cat: "Chico",
    car: "Campervan",
    music: "Sara Bareilles",
    drink: "Coffee",
    room: "The Office",
};

myfaves.takeout = "ninja sushi";
myfaves.activity = "dolphin spotting";
myfaves.hobby = "yoga";

console.log(archer, myfaves);

//====== ARRAYS ======//
const fruits = ["apple", "pear", "banana", "watermellon"];
const cars = [
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 },
  { id: 28, car_make: "Suzuki", car_model: "Aerio", car_year: 2005 },
  { id: 29, car_make: "Mercury", car_model: "Topaz", car_year: 1993 },
  { id: 37, car_make: "Oldsmobile", car_model: "LSS", car_year: 1997 },
  { id: 40, car_make: "Lotus", car_model: "Evora", car_year: 2012 },
];

//====== LOOPS ======//
for (let i = 0; i < fruits.length; i++) {
  //console.log(fruits[i]);
}