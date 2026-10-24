// ConnectAfrica - badges et niveaux (demo)

const badgesGrid = document.getElementById('badges-grid');
const levelValue = document.getElementById('level-value');
const progressFill = document.getElementById('progress-fill');
const pointsLabel = document.getElementById('points-label');

const badgesList = [
  { icon: "1", name: "Premier pas", desc: "Creer son profil", unlocked: true },
  { icon: "2", name: "Batisseur", desc: "Publier un premier projet", unlocked: true },
  { icon: "3", name: "Connecteur", desc: "Collaborer avec 3 pays differents", unlocked: false },
  { icon: "4", name: "Mentor", desc: "Aider 5 membres sur leurs projets", unlocked: false },
  { icon: "5", name: "Marathonien", desc: "Participer a un hackathon", unlocked: false },
  { icon: "6", name: "Pilier", desc: "Un an actif sur la plateforme", unlocked: false }
];

const userPoints = 220;
const pointsPerLevel = 300;

function renderLevel() {
  const level = Math.floor(userPoints / pointsPerLevel) + 1;
  const progress = (userPoints % pointsPerLevel) / pointsPerLevel * 100;
  levelValue.textContent = level;
  progressFill.style.width = progress + '%';
  pointsLabel.textContent = userPoints + ' points, encore ' + (pointsPerLevel - (userPoints % pointsPerLevel)) + ' pour le niveau suivant';
}

function renderBadges() {
  badgesGrid.innerHTML = '';
  badgesList.forEach(function(badge) {
    const card = document.createElement('div');
    card.className = 'badge-card' + (badge.unlocked ? '' : ' locked');
    card.innerHTML = ' Badge ' + badge.icon + '' +
                      '' + badge.name + '' +
                      '' + badge.desc + '';
    badgesGrid.appendChild(card);
  });
}

renderLevel();
renderBadges();