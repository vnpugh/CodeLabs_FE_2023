
// Builder Design Example
// This is a creational pattern
// This pattern lets us construct objects without having to code the object explicitly.
// To make this pattern work, specify a type and content of an object that JavaScript recognizes


class Calculator {
	constructor(props) {
		this.result = 0;
	}

	add(num) {
		this.result += num;
		return this;
	}

	subtract(num) {
		this.result -= num;
		return this;
	}

	multiply(num) {
		this.result *= num;
		return this;
	}

	divide(num) {
		this.result /= num;
		return this;
	}

	compute() {
		return this.result;
	}
}

// Usage:
let calculator = new Calculator();
let calculator2 = new Calculator();

let expression1 = calculator.add(5).subtract(1).multiply(2).divide(2);
let expression2 = calculator2.add(1).subtract(4).multiply(2).divide(8);

console.groupCollapsed('Builder Pattern');
console.log('result 1:', expression1.result);
console.log('result 2:', expression2.result);
console.groupEnd();