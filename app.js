// Application state
const state = {
  currency: 'USD',
  expenses: [
    { description: 'Lunch', amountCents: 1250 },
    { description: 'Coffee', amountCents: 400 },
    { description: 'Book', amountCents: 2000 }
  ]
};

// Formats cents to currency string
function formatCurrency(amountCents, currency) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amountCents / 100);
}

// Adds expense and re-renders
function addExpense(description, amount) {
  state.expenses.push({ description, amountCents: Math.round(amount * 100) });
  render();
}

// Renders expenses and total amount
function render() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  let sumCents = 0;
  state.expenses.forEach(e => {
    sumCents += e.amountCents;
    const li = document.createElement('li');
    li.textContent = e.description + ' — ' + formatCurrency(e.amountCents, state.currency);
    list.appendChild(li);
  });
  document.getElementById('total').textContent = 'Total: ' + formatCurrency(sumCents, state.currency);
}

// Initializes event listeners and initial render
function init() {
  document.getElementById('add-form').addEventListener('submit', e => {
    e.preventDefault();
    addExpense(document.getElementById('desc').value, parseFloat(document.getElementById('amount').value));
    e.target.reset();
  });
  document.getElementById('currency').addEventListener('change', e => {
    state.currency = e.target.value;
    render();
  });
  render();
}
init();
