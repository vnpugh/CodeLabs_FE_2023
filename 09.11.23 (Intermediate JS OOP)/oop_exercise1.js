// Exercise #1: 
// Create three functions: one global, one as an object method, and an arrow function inside an object.
// Print the value of this inside each function.

// Global
function animal() {
    console.log(`${this}`);
  }

// Object method
const pet = {
    petName: "Thunder",
    petType: "Cat",
    petSound: function () {
      console.log(
        `${this.petName} the ${this.petType} says Meow!`
      );
    },
  };

// Arrow function
const animal2 = {
    petName: "Kujo",
    petType: "Dog",
    animalKingdom: function () {
      return () => { // need to call the return function separately 
        console.log(
          `${this.petName} the ${this.petType} says Woof!`
        );
      };
    },
  };
  
  animal(); 
  pet.petSound();

  const myAnimals =   animal2.animalKingdom(); // need to call the outter function to use the arrow function
  myAnimals(); //need to call the arrow function separately

  

  
  
  
  