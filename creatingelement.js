const collection = document.getElementsByClassName('todo');
const list =document.getElementById('lists')
const nums =document.getElementsByClassName('num')[0];

const addTodo = document.createElement('li');


addTodo.classList.add('todo');

addTodo.innerText = 'todo list';


list.appendChild(addTodo)

nums.innerText =collection.length;

console.log(collection)


