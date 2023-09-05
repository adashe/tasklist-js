const addCardBtn = document.querySelector('.add-card')
const cards = document.querySelector('.cards')

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
  console.log(html);
  cards.innerHTML += html;
});

cards.addEventListener('click', e => {
  if(e.target.classList.contains('delete-card')){
      e.target.parentElement.parentElement.remove();
  }
});