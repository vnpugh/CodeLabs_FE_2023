// Exercise #5
// Within your Person class, add getters and setters for the age property.
// Ensure with the setter that age can't be set to a negative value.

class Person {
    constructor(name, age) {
      this.name = name;
      this._age = age; 
    }
  
    static info() {
      return "This is Beyonce's class";
    }
  
    get age() {
      return this._age;
    }
  
    set age(newAge) {
      if (newAge >= 0) {
        this._age = newAge;
      } else { // age can't be set to negative
        console.log("Age cannot be a negative value.");
      }
    }
  }
  
  const person1 = new Person("Michelle", 30);
  
  console.log(person1.age);
  
  // Set the new age 
  person1.age = 36;
  console.log(person1.age);
  
  person1.age = -32; // Output: Age cannot be a negative value.

  
