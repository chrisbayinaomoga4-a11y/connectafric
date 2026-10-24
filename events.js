// ConnectAfrica - evenements et hackathons (demo)

const eventsGrid = document.getElementById('events-grid');

const eventsList = [
  { title: "Hackathon Congo x France", date: "12 au 14 octobre", status: "open", desc: "48h pour creer une solution numerique utile a la communaute." },
  { title: "Defi musique sans frontieres", date: "1er au 5 novembre", status: "open", desc: "Composez un morceau avec un binome d'un autre pays." },
  { title: "Hackathon education pour tous", date: "20 novembre", status: "soon", desc: "Creer un outil pedagogique accessible hors connexion." }
];

function renderEvents() {
  eventsGrid.innerHTML = '';
  eventsList.forEach(function(ev) {
    const card = document.createElement('div');
    card.className = 'event-card';
    const statusLabel = ev.status === 'open' ? 'Inscriptions ouvertes' : 'Bientot';
    card.innerHTML = '<div class="event-status ' + ev.status + '">' + statusLabel + '</div>' +
                      '<div class="event-title">' + ev.title + '</div>' +
                      '<div class="event-date">' + ev.date + '</div>' +
                      '<p>' + ev.desc + '</p>' +
                      '<button class="event-btn">Rejoindre</button>';
    eventsGrid.appendChild(card);
  });
}

renderEvents();