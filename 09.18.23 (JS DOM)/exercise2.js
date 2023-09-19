// Exercise #2
// Objective: Familiarize with DOM events and inline event handlers in web development.

// Instructions:
// Create a new HTML file named dom.html and include a button with the class btn and btn_inline.
// Add an onclick event to this button that will call a JavaScript function named changeBackground().
// Within the same HTML file, create a <script> section. Inside this section, define the
// changeBackground() function. When executed, this function should change 
// the background color of the document.

function changeBackground() {
    // Change the background color of the document
    document.body.style.backgroundColor = 'pink';
}