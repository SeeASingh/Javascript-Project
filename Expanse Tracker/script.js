const incRemov = document.querySelector('.incomeRemove');
const expRemov = document.querySelector('.expRemove');
const incbtn = document.querySelector('.income');
const expbtn = document.querySelector('.expense');
const lists = document.querySelector('#list');

const forms = document.querySelector('.form');
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');
const balance = document.querySelector('#balance');
const pluss = document.querySelector('.plus');
const minuses = document.querySelector('.minuses');

const incs = () => {
    incRemov.classList.remove('hidden');
    expRemov.classList.add('hidden');
};

const expe = () => {
    expRemov.classList.remove('hidden');
    incRemov.classList.add('hidden');
};

incbtn.addEventListener('click', incs);
expbtn.addEventListener('click', expe);

// Get local storage data
const localData = JSON.parse(localStorage.getItem('transactions'));
let transactions = localData !== null ? localData : [];

// Generate unique ID
function generateId() {
    return Math.floor(Math.random() * 1000000);
}

// Add new transaction
function addAmount(e) {
    e.preventDefault();
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please fill in both the transaction name and amount.');
    } else {
        const transaction = {
            id: generateId(),
            text: text.value.trim(),
            amount: parseFloat(amount.value),
        };
        transactions.push(transaction);
        add(transaction);
        updateValues();
        updateData();
        text.value = '';
        amount.value = '';
    }
}

// Add transaction to DOM
function add(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    item.innerHTML = `
        <span>
            ${transaction.text}
        </span>
        <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;
    lists.appendChild(item);
}

// Update balance, income, and expenses
function updateValues() {
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    const income = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => acc + item, 0)
        .toFixed(2);
    const expense = amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => acc + item, 0)
        .toFixed(2);

    balance.textContent = `$${total}`;
    pluss.textContent = `+${income}`;
    minuses.textContent = `${expense}`;
}

// Remove transaction
function removeTransaction(id) {
    transactions = transactions.filter((transaction) => transaction.id !== id);
    updateData();
    run();
}

// Update local storage
function updateData() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Initialize app
function run() {
    lists.innerHTML = ''; // Clear existing list
    transactions.forEach(add);
    updateValues(); // Update balance and totals
}

// Event listener for form submission
forms.addEventListener('submit', addAmount);

// Initial render
run();
