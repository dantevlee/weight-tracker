const weightArray = JSON.parse(localStorage.getItem('weightArray')) || [];

const weightForm = document.getElementById('weightForm');
const table = document.getElementById('weightTable');

window.addEventListener('load', (e) => {
  e.preventDefault();
  weightArray.forEach(weightEntry => {
    submitEntry(weightEntry);
  })
})

weightForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const date = document.getElementById('date');
  const weight = document.getElementById('weight');
  const unit = document.getElementById('unit');
  const notes = document.getElementById('notes');

  const newWeight = {
    id: Math.random(),
    date: date.value,
    weight: weight.value, 
    unit: unit.value,
    notes: notes.value
  }

  submitEntry(newWeight);
  weightArray.push(newWeight);
  pushToLocalStorage(newWeight);
})

function submitEntry(newWeight) {
  
  const row = document.createElement('tr');

  table.appendChild(row);

  const dateEntry = document.createElement('td');
  dateEntry.textContent = newWeight.date;
  row.appendChild(dateEntry);

  const weightEntry = document.createElement('td');
  weightEntry.textContent = newWeight.weight;
  row.appendChild(weightEntry);

  const unitEntry = document.createElement('td');
  unitEntry.textContent = newWeight.unit
  row.appendChild(unitEntry);

  const notesEntry = document.createElement('td');
  notesEntry.textContent = newWeight.notes;
  row.appendChild(notesEntry);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  row.appendChild(deleteButton);

  deleteButton.addEventListener('click', () =>{
    deleteEntry(row, newWeight.id);
  })

  table.style.display = 'table';
  weightForm.reset();
}

function deleteEntry(row, id) {
  row.remove();
  weightArray.forEach((weightEntry, index) => {
    if (weightEntry.id === id) {
      weightArray.splice(index, 1);
      pushToLocalStorage();
      return;
    }
  });
  if (weightArray.length === 0) {
    table.style.display = 'none';
  }
}


function pushToLocalStorage(newWeight) {
  localStorage.setItem('weightArray', JSON.stringify(weightArray));
}