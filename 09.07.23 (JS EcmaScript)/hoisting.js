//Hoisting allows us to use a function before it is declared.
 //EX: 2
 function mainFunction() {
    // Call the hoistedFunction here
    hoistedFunction();
  
    // Now, declare the hoistedFunction below
    function hoistedFunction() {
      console.log("Hello Hoisted World!");
    }
  }
  
  mainFunction();
  
