const addCardBtn = document.querySelector('.add-card');
const addTaskForm = document.querySelector('.add-task');
const cards = document.querySelector('.cards');

// add card
addCardBtn.addEventListener('click', () => {
  html = `
  <div class="card border-secondary" style="width: 18rem;">
  <div class="card-body">
    <div class="delete-card">X</div>
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <ul class="list-group list-group-flush">
      </li>
    </ul>
    <form class="add-task text-center my-4">
      <input class="form-control m-auto" type="text" name="add" placeholder="add task" />
    </form>
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

// add task
addTaskForm.addEventListener('submit', e => {
  e.preventDefault();
  task = addTaskForm.add.value.trim();
  list = e.target.parentElement.querySelector('ul');
  html = `
  <li class="list-group-item">
    <span class="delete-task">X</span>
    <span>${task}</span>
  </li>
  `;
  list.innerHTML += html;
  addTaskForm.reset();
});

// delete task
cards.addEventListener('click', e => {
  if(e.target.classList.contains('delete-task')){
      e.target.parentElement.remove();
  }
});

// add title to new card
// edit title of existing cards
// edit existing tasks
// reorder tasks

// TODO: add task and delete task for new cards
