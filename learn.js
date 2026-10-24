// ConnectAfrica - formations / tutoriels communautaires

const tutoGrid = document.getElementById('tuto-grid');
const searchTuto = document.getElementById('search-tuto');
const newTutoModal = document.getElementById('new-tuto-modal');
const btnNewTuto = document.getElementById('btn-new-tuto');
const closeNewTuto = document.getElementById('close-new-tuto');
const newTutoForm = document.getElementById('new-tuto-form');

const defaultTutos = [
  { title: "Debuter avec HTML et CSS", author: "Junior, Congo", desc: "Les bases pour creer sa premiere page web.", category: "Developpement" },
  { title: "Composer un morceau avec peu de moyens", author: "Fatou, Senegal", desc: "Astuces pour produire de la musique avec un simple telephone.", category: "Musique" },
  { title: "Creer un logo simple", author: "Aline, France", desc: "Principes de base du design graphique pour debutants.", category: "Design" }
];

function getTutos() {
  let stored = JSON.parse(localStorage.getItem('tutos') || 'null');
  if (!stored) {
    localStorage.setItem('tutos', JSON.stringify(defaultTutos));
    return defaultTutos;
  }
  return stored;
}

function saveTutos(tutos) {
  localStorage.setItem('tutos', JSON.stringify(tutos));
}

function renderTutos() {
  const query = searchTuto.value.toLowerCase().trim();
  const tutos = getTutos();
  const filtered = tutos.filter(t => !query || t.title.toLowerCase().includes(query) || t.category.toLowerCase().includes(query));

  tutoGrid.innerHTML = '';
  if (filtered.length === 0) {
    tutoGrid.innerHTML = '<p>Aucun tutoriel trouve.</p>';
    return;
  }

  filtered.forEach(function(t) {
    const card = document.createElement('div');
    card.className = 'tuto-card';
    card.innerHTML = '<div class="tuto-category">' + t.category + '</div>' +
                      '<div class="tuto-title">' + t.title + '</div>' +
                      '<p>' + t.desc + '</p>' +
                      '<div class="tuto-author">Par ' + t.author + '</div>';
    tutoGrid.appendChild(card);
  });
}

searchTuto.addEventListener('input', renderTutos);

btnNewTuto.addEventListener('click', function() {
  newTutoModal.classList.remove('hidden');
});

closeNewTuto.addEventListener('click', function() {
  newTutoModal.classList.add('hidden');
});

newTutoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const newTuto = {
    title: document.getElementById('t-title').value,
    author: document.getElementById('t-author').value,
    desc: document.getElementById('t-desc').value,
    category: document.getElementById('t-category').value
  };
  const tutos = getTutos();
  tutos.push(newTuto);
  saveTutos(tutos);
  newTutoModal.classList.add('hidden');
  newTutoForm.reset();
  renderTutos();
});

renderTutos();