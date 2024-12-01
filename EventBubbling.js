// Select necessary elements
const list = document.getElementById('lists'); // Select the ul element
const learn = document.getElementById('learn'); // Select the Learn DOM heading
const button = document.querySelector('.submit'); // Select the button
const inputs =document.querySelector('#input')

button.addEventListener('click',function(e){
const addTodo = document.createElement('li');
e.preventDefault()
addTodo.classList.add('todo');
addTodo.innerText = input.value;
list.appendChild(addTodo);
})

// // Event delegation for the ul element
// list.addEventListener('click', function(e) {
//     if (e.target.tagName === 'LI') { // Check if the clicked element is an li
//         console.log('This is an li');
//         e.target.remove(); // Remove the clicked li
//     } else {
//         console.log('Clicked somewhere in the ul but not an li');
//     }
// });

// // Button click event
// button.addEventListener('click', function() {
//     console.log('Button clicked!');
//     const newLi = document.createElement('li'); // Create a new li element
//     newLi.className = 'todo';
//     newLi.textContent = 'New TODO ITEM';
//     list.appendChild(newLi); // Append the new li to the ul
// });

// Learn DOM heading click event
learn.addEventListener('click', function() {
    console.log('Learn DOM heading clicked!');
});


