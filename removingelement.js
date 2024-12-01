const todo = document.querySelectorAll('li')
const list = document.querySelector('#lists')
const button = document.querySelector('.submit');

button.addEventListener('click',function(e){


    const addTodo = document.createElement('li');
    addTodo.classList.add('todo');
    addTodo.innerText='todo list';
    list.appendChild(addTodo);
})





const todos = document.querySelectorAll('li');

todos.forEach(function(todo) {
    todo.addEventListener('click', function(e) {
        // console.log('clicked');
        // console.log(e.target);
        e.target.remove()
    });
});


