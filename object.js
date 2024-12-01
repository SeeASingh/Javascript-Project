// object literals

let user = {
    name : 'jalaj',
    age :24,
    gender : 'male',
    email :'abcdef@gmail.com',
    login : function(){
        console.log('you are logged in ')
    }
} 

console.log(user);
console.log(user.name);
console.log(user.age);
user.age=23;
console.log(user.age);
console.log(user['gender']);