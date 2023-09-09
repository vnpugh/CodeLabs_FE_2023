// List of objects with food items and prices
const foodItems = [
    { name: "Cheese Burger", price: 8.99 },
    { name: "Supreme Pizza", price: 12.99 },
    { name: "Greek Salad", price: 6.99 },
    { name: "Chicken Nuggets", price: 10.99 },
    { name: "Nachos", price: 4.99 }
];


const foodList = document.getElementById("foodList");

// Loop over the list of food items
for (i = 0; i < foodItems.length; i++) {
    const foodItem = foodItems[i];
    
// Create a new list item element
    const listItem = document.createElement("li");
    
// Set the inner text of the list item to the food name and price
    listItem.textContent = foodItem.name + " - $" + foodItem.price.toFixed(2);
    
// Append the list item to the UL element
    foodList.appendChild(listItem);
}
