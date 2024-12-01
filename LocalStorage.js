// // Local storage

// localStorage.setItem('name','same')
// localStorage.setItem('age',24)


// //session storage

// sessionStorage.setItem('name','Rahul')

// const user = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(user,age);

// localStorage.removeItem('name',)

// localStorage.clear()


const user =[
    {name : 'jatin', email:'jatin@gmail.com'},
    {name : 'Raj', email:'raj@gmail.com'},
    {name : 'Singh', email:'veerpratapsingh@gmail.com'}
]

// console.log(JSON.stringify(user))
localStorage.setItem('user',JSON.stringify(user))
const use = localStorage.getItem("user")
console.log(JSON.parse(use))