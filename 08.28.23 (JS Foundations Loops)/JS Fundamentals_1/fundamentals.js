// EX 3: OPERATORS: Write a JavaScript program that calculates and displays the area of a rectangle. 
// Use variables length and width to store the dimensions of the rectangle.
// 1. Define the dimensions of the rectangle
const length = 20; 
const width = 15;  

// 2. Calculate the area of the rectangle
const area = length * width;
console.log(area);


// EX 4: CONDITIONALS: Write a JavaScript program that checks if a number is even or odd. 
// Display a message on the console indicating whether the number is even or odd.

// 1. Define the number to be checked
const number = 30; 

// 2. Check if the number is even or odd
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}


// EX 5: CONTROL FLOW/FOR LOOP: Write a JavaScript program that displays the numbers 
// from 1 to 10 on the console using a for loop.
// 1. initialize the variable i with 1
// 2. write the condition
// 3. set the iteration of the loop

for (i = 1; i <= 10; i++) {
    console.log(i);
}

// EX 8: CONDITIONAL: Write a JavaScript program that determines if a given year is a leap year. Prompt the user for
//  a year and display a message on the console indicating whether it is a leap year or not.
// Prompt the user for a year
const year = prompt("Enter a year:");

// Convert the input to a number by using parseInt
year = parseInt(year);

// Check if it's a leap year, must be divisible by 400
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// EX 9: Write a JavaScript program that calculates and displays the sum of all numbers from 1 to 100 using a while loop.
const sum = 0;
const i = 1;

while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);

// EX 11: Create a variable for every JavaScript Data Type:
const string = "Hello, World!";
const num = 42;
const boolean = true;
// Variable holding a null value
const nullValue = null;
// Variable pointing to an object instance (object literal)
const object = {
    cars: "honda",
    style: "accord"
};

// Variable pointing to an array instance
const array = [1, 2, 3, 4, 5];

// Displaying the values of the variables
console.log(string);
console.log(num);
console.log(boolean);
console.log(nullValue);
console.log(object);
console.log(array);

