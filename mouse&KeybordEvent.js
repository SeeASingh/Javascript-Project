// const button = document.querySelector('.submit');
// const list =document.querySelector('#lists')
// const todo =list.children
// console.log(todo)
// // const todo =document.querySelectorAll('.todo')
// const nums = document.querySelector('.num')

// button.addEventListener('keydown',function(){
//    const addTodo = document.createElement('li');
//    addTodo.classList.add('todo');
//    addTodo.innerText = `todo list : ${todo.length+1} `
//    list.appendChild(addTodo)
//    nums.innerText = todo.length
// })



// const button = document.querySelector('.submit');
// const list =document.querySelector('#lists')
// const todo =list.children
// console.log(todo)
// // const todo =document.querySelectorAll('.todo')
// const nums = document.querySelector('.num')

// button.addEventListener('keyup',function(){
//    const addTodo = document.createElement('li');
//    addTodo.classList.add('todo');
//    addTodo.innerText = `todo list : ${todo.length+1} `
//    list.appendChild(addTodo)
//    nums.innerText = todo.length
// })


// const button = document.querySelector('.submit');
// const list =document.querySelector('#lists')
// const todo =list.children
// console.log(todo)
// // const todo =document.querySelectorAll('.todo')
// const nums = document.querySelector('.num')

// button.addEventListener('mouseover',function(){
//    const addTodo = document.createElement('li');
//    addTodo.classList.add('todo');
//    addTodo.innerText = `todo list : ${todo.length+1} `
//    list.appendChild(addTodo)
//    nums.innerText = todo.length
// })


const button = document.querySelector('.submit');
const list = document.querySelector('#lists')
const todo = list.children
const nums = document.querySelector('.num');
const text = document.querySelector('.text')

text.addEventListener('mouseover',function(){
 text.style.color ='red'
})
