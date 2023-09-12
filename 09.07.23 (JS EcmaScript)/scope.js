// EX 1: Explain the scope in the given code:
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar? Yes b/c of the closure concept.
		console.log(innerVar); // Can we access innerVar? Only accessible w/in innerFunction.
	}

	innerFunction();
}

outerFunction();

//Scopes determine which variables and functions are accessible from where.

//Global Scope = anything declared outside of both outerFunction and innerFunction.

//outerFunction defines its own scope. The let variable is accessible within the 
//entire outerFunction but not outside of it.

// The innerFunction can access variables from the outer function's scope, including outerVar
//because it is declared inside outerFunction.

//innerFunction can print the value of outerVar because it is declared in the 
//outer function's scope.

//innerFunction can print the value of innerVar because it is declared in the same scope as 
//the console.log



//EX: 4

// Declare a global variable outside of any function
let myVariable = "The World is Mine!";

function modifyGlobalVariable() {
  // Try to modify the global variable here
  myVariable = "You Can't Stop Me!"; 
}

function localScopeTest() {
  // Declare a local variable with the same name as the global variable
  let myVariable = "This is my World!"; // different variable with the same name
  console.log("Scope: " + myVariable);
}

// Call both functions
modifyGlobalVariable();
localScopeTest();

console.log("Outside function: " + myVariable);
