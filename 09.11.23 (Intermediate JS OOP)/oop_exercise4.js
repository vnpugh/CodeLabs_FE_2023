// Exercise #4
// Add a static method called info() to the Person class. 
// This method should return a statement like, "This is a Person class".
// Try accessing this method both from the class itself and from an instance of the class.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static info() {
      return "This is a Person class";
    }
  }
  
  // Access the static method
  console.log(Person.info());
  
  const person1 = new Person("Beyonce", 40);
  
  // Access the static method from an instance of the class
  console.log(person1.constructor.info());
  