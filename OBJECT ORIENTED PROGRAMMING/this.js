const user = {
    name: 'same',
    email: 'same123@gmail.com',
    languages: ['Hindi', 'English', 'Math', 'Physics', 'Sanskrit', 'Art'],

    signin: function () {
        console.log('user is signed in');
    },
    signout: function () {
        console.log('user is signed out');
    },
    language: function () {
        this.languages.forEach(lang => {
            console.log(lang);
        });
    }
};

// Correct method invocation
user.language();

// Global context `this` - note that `this` in a global scope behaves differently in strict mode.
console.log(this);
