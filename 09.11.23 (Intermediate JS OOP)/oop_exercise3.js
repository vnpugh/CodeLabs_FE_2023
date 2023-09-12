// Exercise #3
// Modify your Person class. The constructor should now accept and initialize properties.
// Create two different Person instances with unique names and ages.


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
  const person1 = new Person("Gina", 36);
  const person2 = new Person("Nemo", 49);
  
  // Invoke 
  person1.greet(); 
  person2.greet(); 