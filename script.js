console.log('💥 hello world 💥');

var hello = "World";
let hello1 = "World1";
const hello2 = "World2";
hello3 = "World3";

console.log(hello, hello1, hello2, hello3);

var importantVariable = "This is some important code!!!";

var importantVariable = "Something Else";

// DO NOT USE VAR !!!!

console.log(importantVariable);

let AnotherImportantVariable = "Some Important Code";

AnotherImportantVariable = "something else!!";

// Cannot be declared twice
// Can be overwritten

console.log(AnotherImportantVariable);

const important = "Importantant value";

// important = "I'm overwriting!!!";
// Cannot be declared twice
// Can't reassign value

// Primatives
let myNum = 5;
let myNum2 = 5 + 4;
let myBoolean = false;
let myBoolean2 = 5 > 2;
let myString = "Some string";
let myString2 = 'Some string';
let myString3 = `Some string`;

// Composites
let myCar = { make: "Ford" };
let myArray = [1, 2, 3, 4];
let myFunc = function () {
  // Something happens here
};

// OBJECTS
let someCar = {
  "make": "Ford",
  "model": "GT",
  "color": "Purple"
};

// dot notation
someCar.engine = "5L Petrol";
someCar["transmission"] = "Manual";

console.log(someCar);

const archer = {
  createdAt: "05.05.2018",
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
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

// let myfaves = {
//     cat: "Chico",
//     car: "Campervan",
//     music: "Sara Bareilles",
//     drink: "Coffee",
//     alcohol: "Gin",
//     room: "office room",
// };

// myfaves.takeout = "ninja sushi";
// myfaves.activity = "dolphin spotting";
// myfaves.hobby = "yoga";

// console.log(archer, myfaves);

function myFunction(string) {
  return string + " some more text to the string";
}

console.log(myFunction("something"));

function greetMe(name) {
  console.log('Hello ' + name);
  console.log(this);
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


const fruits = ["apple", "pear", "banana", "watermellon"];

for (let i = 0; i < fruits.length; i++) {
  //console.log(fruits[i]);
}