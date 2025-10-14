// Logical Operators
// what do you expect each line to print?
console.log(true && false); false
console.log(true || false); true
console.log(!true); false
console.log(!(true && false)); true
console.log(false || !false); true


// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null); false
console.log(!``); true
console.log(!(1 && "false")); false
console.log(NaN || !"true"); false

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age = 21;
if (age > 10) {
  console.log("full menu if the age is over 10.");
} else if (age === 10)
else {
  console.log("eat for free")
}
console.log("kids menu")
console.log(age > 10 ? "full menu" : "kids menu"


// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;

// Write your if statement here *
if (!num) {
  console.log("The number is zero")
}


let age = 21;
let cash = 100;


if (age >= 25) {
  console.log("rent a car.");
} else (age === 25)
else {
  console.log("unable to rent a car")
}


console.log(age = 25 ? "you can rent a car" : "You are too young")


if (age >= 25 && cash > 0) {
  console.log("rent a car.")
} else {
  console.log("unable to rent a car")
}


console.log(age >= 25 && cash > 0 ? "you can rent a car" : "You are too young")

let age = 15;
let haspermission = true;


if (age > 17 || hasPermission) {
  console.log("you cannot see the movie")
}


console.log(age > 17 || haspermission ? "Yes" : "No");
