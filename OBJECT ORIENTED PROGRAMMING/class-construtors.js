class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    signin() {
        console.log(`${this.username} is signed in`);
        return this; // Enables method chaining
    }

    signout() {
        console.log(`${this.username} is signed out`);
        return this; // Enables method chaining
    }

    scores() {
        this.score++;
        console.log(`${this.username} has a score of ${this.score}`);
        return this; // Enables method chaining
    }
}

// Creating user instances
const user1 = new User('jhone', 'jhone123@gmail.com');
const user2 = new User('sham', 'sham1234@gmail.com');
const user3 = new User('semi', 'semi1234@gmail.com');
const user4 = new User('fall', 'fall1234@gmail.com');

// Logging user instances
console.log(user1, user2, user3, user4);

// Performing actions on user instances
user1.signin().scores();
user2.signout().scores();
user3.signout().scores();
user4.signin().scores();
