// DOM queries
const addCard = document.querySelector('.add-card');
// const addTaskForms = document.querySelectorAll('.add-task');
const cardsContainer = document.querySelector('.cards-container');

// add card
addCard.addEventListener('submit', e => {
  e.preventDefault();
  title = e.target.add.value.trim();
  const html = `
    <div class="col-sm-auto mb-auto mb-sm-auto">
      <div class="card border-secondary" style="width: 18rem;">
        <div class="card-body">
          <div class="delete-card text-end">X</div>
          <h5 class="card-title">${title}</h5>
          <ul class="list-group list-group-flush"></ul>
          <form class="add-task text-center my-4">
            <input class="form-control m-auto" type="text" name="add" placeholder="add task" />
          </form>
        </div>
      </div>
    </div>
  `;
  cardsContainer.innerHTML += html;
  e.target.reset();
});

// delete card
cardsContainer.addEventListener('click', e => {
  if(e.target.classList.contains('delete-card')){
      e.target.parentElement.parentElement.parentElement.remove();
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

// TODOS:
// edit title of existing cards
// edit existing tasks
// reorder tasks
