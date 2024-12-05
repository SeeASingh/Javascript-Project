


function User(username, email) {
    this.username = username;
    this.email = email;
     //  this.signin = function(){
    //     console.log(`${this.username} is signed in`)
    //  }
}

User.prototype.signin = function () {
    console.log(`${this.username} is signed in`);
    return this;
};

User.prototype.signout = function () {
    console.log(`${this.username} is signed out`);
    return this;
};


// class User {
//     constructor(username, email) {
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
// }

const user1 = new User('jhone', 'jhone123@gmail.com');
const user2 = new User('sham', 'sham1234@gmail.com');

console.log(user1, user2);

// Correct method calls
user1.signin().signout();
user2.signin().signout();
