// Exercise #2
// Define a Person class with properties name and age.
// Add a method greet() to this class which outputs a greeting.
// Instantiate two different Person objects and invoke their greet methods.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() { // greet method
      console.log(`Hello, World! My name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Instantiate two different Person objects
  const person1 = new Person("Robert", 30);
  const person2 = new Person("Velvet", 29);
  
  // Invoke 
  person1.greet(); 
  person2.greet(); 
  