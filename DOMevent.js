const button = document.querySelector('.submit');
const list =document.querySelector('#lists')
const todo =list.children
// console.log(todo)
// const todo =document.querySelectorAll('.todo')
 

button.addEventListener('click',function(){
   const addTodo = document.createElement('li');
   addTodo.classList.add('todo');
   addTodo.innerText = `todo list : ${todo.length+1} `
   list.appendChild(addTodo)
   nums.innerText = todo.length
})