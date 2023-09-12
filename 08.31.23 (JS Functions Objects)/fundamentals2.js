//EX 1: Create basic JavaScript functions
// Write a JavaScript function called greet that takes a name 
// as an argument and returns a greeting message. 

function greet(name) {
    return "Hello, " + name + "!";
}

const myName = "Velvet";
const greeting = greet(myName);
console.log(greeting);

// EX 2: Write a JavaScript function called multiply that takes two numbers as 
// arguments and returns their product.

function multiply(num1, num2){
    return num1*num2;
}

let num1 = 6;
let num2 = 12;
console.log(multiply(num1, num2))

// EX 3: Write a JavaScript function called reverseString that takes a string as an 
// argument and returns the reverse of the string.

const reverseString = inputString => inputString.split('').reverse().join('');

const originalString = "Spaghetti";
const reversedString = reverseString(originalString);
console.log(reversedString);

// EX 4: Write a JavaScript function called calculateArea that takes the radius of a circle 
// as an argument and returns the area of the circle. Use the formula A = π * r^2

function calculateArea(radius) {
    return Math.PI * radius ** 2; //A = π * r^2
}

let r = 5;
let areaOfCircle = calculateArea(r);
console.log(areaOfCircle);

// EX 5: Create a function that takes in an argument and uses string interpolation 
// to print that arguments value somewhere in a text string

function printValue(argument) {
    console.log(`The value is: ${argument}`);
}
const value = 50;
printValue(value);

// EX 6: Create a function that takes an object and returns the keys and values as separate arrays. 
// and Return the keys sorted alphabetically and their corresponding values in the same order.
function separateArrays(object) {
    const keys = [];
    for (let key in object) {
        keys.push(key);
}
keys.sort();

const values = [];
for (let i = 0; i < keys.length; i++) {
    values.push(object[keys[i]]);
}

return [keys, values];
}

const user = {
name: "Velvet",
age: 29,
occupation: "Software Engineer"
};

const [keysArray, valuesArray] = separateArrays(user);
console.log("Keys:", keysArray);
console.log("Values:", valuesArray);


// EX 7: Create basic JavaScript objects
//Create a JavaScript object called car with properties for make, model, and year. 
//Assign appropriate values to the properties and display the object on the console.

const myCar = {
    make:'lexus',
    model: 'gx460',
    year: 2024
}
console.log(myCar);



// EX 8: Common JS Built-in Objects & Methods
// Use the Date object to display the current date and time on the console.
const currentDateAndTime = new Date();
console.log(currentDateAndTime);

// EX 9: Use the Math object to generate a random number between 1 and 10 and display it on the console.
//without rounding
const randomNum = Math.random() * 9 + 1;
console.log(randomNum);

//with rounding
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);



