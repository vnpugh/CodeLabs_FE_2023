
//Closures in JS allow inner functions to access variables from their outer functions.
//EX: 3
function pizzaWorld() {
  const myFavoriteFood = 'Pizza';
  
  function letsEat() {
      const myPizzaType = 'Supreme';
      console.log(`I love ${myFavoriteFood}, especially ${myPizzaType} Pizza!`);
  }

  return letsEat;
}

const eatPizza = pizzaWorld();
eatPizza(); 


  //EX: 5
  // Implement a Function Factory using Closures.
  
  function dogfunction(sound) {
    // Returning a function that makes use of 'sound'
    return function dogSound() { // closure
        console.log("My doggie says", sound);
    };
}

// Creating an instance of the inner function by invoking dogfunction
const myFunction = dogfunction("WOOF!");

myFunction(); 

  
  