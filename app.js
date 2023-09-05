const card = document.querySelector('.card');
const addCardBtn = document.querySelector('.add-card')
const cards = document.querySelector('.cards')

addCardBtn.addEventListener('click', () => {
  html = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
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