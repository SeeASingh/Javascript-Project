function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.signin = function () {
    console.log(`${this.username} is signed in`);
    return this;
};

User.prototype.signout = function () {
    console.log(`${this.username} is signed out`);
    return this;
};

// Inherit User properties and methods
function Person(username, email, message) {
    User.call(this, username, email); // Call the User constructor
    this.message = message; // Assign the additional property
}

// Set up prototype inheritance
Person.prototype = Object.create(User.prototype);
Person.prototype.constructor = Person; // Reset constructor reference

// Add additional methods to Person
Person.prototype.play = function () {
    console.log(`${this.username} is playing. Message: ${this.message}`);
    return this; // Allow chaining by returning this
};

// Create instances
const user1 = new User('jhone', 'jhone123@gmail.com');
const user2 = new User('sham', 'sham1234@gmail.com');
const personOne = new Person('oliver', 'olivera420@gmail.com', 'hey oliver');

console.log(user1, user2, personOne);

// Correct method calls
user1.signin().signout();
user2.signin().signout();
personOne.signin().play().signout(); // Chaining works as expected
