// Renders expense summary grouped by category
function renderCategorySummary() {
  const totals = {};
  state.expenses.forEach(e => {
    const cat = e.category || 'Other';
    totals[cat] = (totals[cat] || 0) + e.amount;
  });
  const section = document.getElementById('summary');
  section.innerHTML = '';
  Object.keys(totals).forEach(cat => {
    const p = document.createElement('p');
    p.textContent = cat + ': ' + formatAmount(totals[cat]);
    section.appendChild(p);
  });
}
