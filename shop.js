// ConnectAfrica - boutique de logiciels (demo)

const shopGrid = document.getElementById('shop-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

const appsList = [
  { icon: "📚", name: "StudyBox", author: "Junior, Congo", desc: "Application pour reviser hors connexion.", price: "Gratuit", type: "free" },
  { icon: "🎨", name: "DesignKit Afrique", author: "Aline, France", desc: "Modeles graphiques pour createurs.", price: "5 000 FCFA", type: "paid" },
  { icon: "🎵", name: "BeatMaker Local", author: "Fatou, Senegal", desc: "Creer des instrumentaux simplement.", price: "Gratuit", type: "free" },
  { icon: "💰", name: "GestionCompta", author: "Marc, Cameroun", desc: "Outil de gestion pour petites entreprises.", price: "8 000 FCFA", type: "paid" }
];

function renderApps() {
  shopGrid.innerHTML = '';
  const filtered = appsList.filter(a => currentFilter === 'all' || a.type === currentFilter);

  filtered.forEach(function(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    card.innerHTML = '<div class="app-icon">' + app.icon + '</div>' +
                      '<div class="app-name">' + app.name + '</div>' +
                      '<div class="app-author">Par ' + app.author + '</div>' +
                      '<p>' + app.desc + '</p>' +
                      '<div class="app-price ' + app.type + '">' + app.price + '</div>' +
                      '<button class="app-btn">' + (app.type === 'free' ? 'Telecharger' : 'Acheter') + '</button>';
    shopGrid.appendChild(card);
  });
}

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderApps();
  });
});

renderApps();