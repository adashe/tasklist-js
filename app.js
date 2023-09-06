const addCardBtn = document.querySelector('.add-card');
const addTaskForms = document.querySelectorAll('.add-task');
const cardsContainer = document.querySelector('.cards-container');


// add card
addCardBtn.addEventListener('click', e => {
  e.preventDefault();
  const html = `
    <div class="card border-secondary" style="width: 18rem;">
      <div class="card-body">
        <div class="delete-card">X</div>
        <h5 class="card-title">TITLE</h5>
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
  cardsContainer.innerHTML += html;
});

// delete card
cardsContainer.addEventListener('click', e => {
  if(e.target.classList.contains('delete-card')){
      e.target.parentElement.parentElement.remove();
  }
});

// add task to list using event delegation
cardsContainer.addEventListener('submit', e => {
  const form = e.target.closest('.add-task');
  e.preventDefault();

  if(form){
    task = form.add.value.trim();
    list = form.parentElement.querySelector('ul');
    html = `
      <li class="list-group-item">
        <span class="delete-task">X</span>
        <span>${task}</span>
      </li>
      `;
    list.innerHTML += html;
    form.reset();
  };
})

// delete task from list
cardsContainer.addEventListener('click', e => {
  if(e.target.classList.contains('delete-task')){
      e.target.parentElement.remove();
  }
});

// add title to new card
// edit title of existing cards
// edit existing tasks
// reorder tasks
