// Exercise #1
// Objective: Understand DOM Selection.

// Instructions:
// Use JavaScript to select the element with an ID of "myDiv" and change its background color to "lightblue". 
// Select all the paragraph (<p>) elements on the page and log their inner text. 

const myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = "lightblue";

// Select all paragraph elements and log their inner text
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}: ${paragraph.innerText}`);
});