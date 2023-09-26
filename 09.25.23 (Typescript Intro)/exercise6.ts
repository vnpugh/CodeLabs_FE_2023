// Write a TypeScript program that determines if a given year is a leap year. 
// Prompt the user for a year and display a message on the console indicating 
// whether it is a leap year or not.


function isLeapYear(year: number): boolean {
    // Leap year conditions:
    // 1. If the year is divisible by 4
    // 2. If the year is not divisible by 100, except when it is divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
 
  const inputYearString: string | null = ("Enter a year:");
  
  //need to parse the user's input into a number
  const inputYear: number = parseInt(inputYearString || "0");
  

  if (!isNaN(inputYear)) {
    if (isLeapYear(inputYear)) {
      console.log(`${inputYear} is a leap year.`);
    } else {
      console.log(`${inputYear} is not a leap year.`);
    }
  } else {
    console.log("Invalid input. Please enter a valid year.");
  }
  