// Application state
const state = {
  expenses: [
    { description: 'Lunch', amount: 12.5 },
    { description: 'Coffee', amount: 4.0 },
    { description: 'Book', amount: 20.0 }
  ]
};

// Formats number to dollar string
function formatAmount(n) {
  return '$' + n.toFixed(2);
}

// Adds expense and re-renders
function addExpense(description, amount) {
  state.expenses.push({ description, amount });
  render();
}

// Renders expenses and total amount
function render() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  let sum = 0;
  state.expenses.forEach(e => {
    sum += e.amount;
    const li = document.createElement('li');
    li.textContent = e.description + ' — ' + formatAmount(e.amount);
    list.appendChild(li);
  });
  document.getElementById('total').textContent = 'Total: ' + formatAmount(sum);
}

// Initializes event listeners and initial render
function init() {
  document.getElementById('add-form').addEventListener('submit', e => {
    e.preventDefault();
    addExpense(document.getElementById('desc').value, parseFloat(document.getElementById('amount').value));
    e.target.reset();
  });
  render();
}
init();
