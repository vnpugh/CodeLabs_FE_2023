// Observer Pattern Demo Start \\
// This is a behavioral pattern
// This pattern entails creating a single object that references a collection of objects and emits notifications when a state change occurs
// This is good for decoupling objects, promotes smaller, more reusable components, and helps developers pinpoint dependencies
// Later on in the Angular portion, we will make use of the .subscribe() method, which implements the observer pattern

class EventObserver {
	constructor() {
		this.observers = [];
	}

	subscribe(fn) {
		this.observers.push(fn);
	}

	unsubscribe(fn) {
		this.observers = this.observers.filter((sub) => sub !== fn);
	}

	broadcast(data) {
		this.observers.forEach((sub) => sub(data));
	}
}

// Usage:
const getWordCount = (text) => (text ? text.trim().split(/\s+/).length : 0);

const wordCountElement = document.createElement('p');

wordCountElement.className = 'wordCount';
wordCountElement.innerHTML = 'Word Count: <strong id="blogWordCount">0</strong>';
document.body.appendChild(wordCountElement);

const blogObserver = new EventObserver();

blogObserver.subscribe((text) => {
	const blogCount = document.getElementById('blogWordCount');

	blogCount.textContent = getWordCount(text);
});

const blogPost = document.getElementById('blogPost');

blogPost.addEventListener('keyup', () => blogObserver.broadcast(blogPost.value));