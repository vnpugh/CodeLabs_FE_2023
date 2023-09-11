// 'this' refers to the object that is calling the current function.

const user = {
    firstName: "Velvet",
    lastName: "Pugh",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
};

user.fullName();

// Arrow functions don't have their own 'this' scope.
// they will inherit the 'this' scope of the nearest regular function -> uses the global scole if there's
// no regular function.


// An array
const user2 = {
    firstName: "Velvet",
    lastName: "Pugh",
    hobbies: ["piano", "coding"],
    hobbiesList: function() { 
        this.hobbies.forEach(function(hobby) { 
            console.log(hobby)
    });
} }

user2. hobbiesList();