const addCardBtn = document.querySelector('.add-card');
const cards = document.querySelector('.cards');
const addTaskForm = document.querySelector('.add-task');

// add card
addCardBtn.addEventListener('click', () => {
  html = `
    <div class="card border-secondary" style="width: 18rem;">
      <div class="card-body">
        <div class="delete-card">X</div>
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <ul class="list-group list-group-flush">
        </ul>
      </div>
    </div>
  `;
  cards.innerHTML += html;
});

// delete card
cards.addEventListener('click', e => {
  if(e.target.classList.contains('delete-card')){
      e.target.parentElement.parentElement.remove();
  }
});

// add list item
addTaskForm.addEventListener('submit', e => {
  e.preventDefault();
  message = addTaskForm.add.value.trim();
  list = e.target.parentElement.querySelector('ul');
  html = `
  <li class="list-group-item">${message}</li>
  `;
  list.innerHTML += html;
  addTaskForm.reset();
});

// delete list item
