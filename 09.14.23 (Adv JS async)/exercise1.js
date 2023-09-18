// Exercise #1
// Objective: Understand the Observer design pattern.
// Instructions:
// Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
// When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
// Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.
// Resource: https://orangeable.com/javascript/array-manipulation

class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) { // appends an item to the end of an array -> not specifying a position in this example
		this.observers.push(observer);
	}

    removeObserver(observer) {
		const items = this.observers.indexOf(observer);
		if (items !== -1) { // removes items to/from an array.
			this.observers.splice(items, 1);
		}
	}

	notifyObservers() { 
		this.observers.forEach((observer) => { // using foreach to iterate over each array element
			observer.update(); //  the subject informs its observers about changes
		});
	}

}

class Observer {
	update() {
		console.log('I have updated the observer.');
	}
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

console.log('Notifying observer1 and observer2.');
subject.notifyObservers();
