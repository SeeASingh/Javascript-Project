// Select elements
const input = document.querySelector('.input-list');
const button = document.querySelector('.button-list');
const list = document.querySelector('.list-group');
const divSearch = document.querySelector('.search');
const searchInput = document.querySelector('#search-input');
const searchToggleBtn = document.querySelector('.but');

// Add event listeners
button.addEventListener('click', addTodo);
list.addEventListener('click', handleListClick);
searchToggleBtn.addEventListener('click', toggleSearch);
searchInput.addEventListener('keyup', filterTasks);

// Function to add a todo item
function addTodo(event) {
    event.preventDefault();

    // Validate input
    if (!input.value.trim()) {
        alert("Please enter a task!");
        return;
    }

    // Create a new task
    const listDiv = document.createElement('div');
    listDiv.classList.add('list');

    const task = document.createElement('li');
    task.innerText = input.value.trim();
    task.classList.add('add-list');
    listDiv.appendChild(task);

    const doneButton = document.createElement('button');
    doneButton.innerHTML = "<i class='fa-solid fa-check fa-2x'></i>";
    doneButton.classList.add('add-btn');
    listDiv.appendChild(doneButton);

    const removeButton = document.createElement('button');
    removeButton.innerHTML = "<i class='fa-solid fa-trash fa-2x'></i>";
    removeButton.classList.add('remove-btn');
    listDiv.appendChild(removeButton);

    list.appendChild(listDiv);
    input.value = '';
}

// Function to handle list clicks (mark done/remove)
function handleListClick(event) {
    const target = event.target;

    if (target.closest('.remove-btn')) {
        target.closest('.list').remove();
    } else if (target.closest('.add-btn')) {
        const task = target.closest('.list').querySelector('.add-list');
        task.classList.toggle('completed');
    }
}

// Function to toggle search bar
function toggleSearch(event) {
    event.preventDefault();
    divSearch.classList.toggle('expand');
}

// Function to filter tasks
function filterTasks() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const tasks = list.querySelectorAll('.list');

    tasks.forEach(task => {
        const taskText = task.querySelector('.add-list').innerText.toLowerCase();
        task.style.display = taskText.includes(searchTerm) ? 'flex' : 'none';
    });
}
