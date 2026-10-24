// ConnectAfrica - logique de base

const signupModal = document.getElementById('signup-modal');
const btnSignup = document.getElementById('btn-signup');
const btnStart = document.getElementById('btn-start');
const closeSignup = document.getElementById('close-signup');
const signupForm = document.getElementById('signup-form');
const projectsList = document.getElementById('projects-list');

function openSignup() {
  signupModal.classList.remove('hidden');
}

function closeSignupModal() {
  signupModal.classList.add('hidden');
}

btnSignup.addEventListener('click', openSignup);
btnStart.addEventListener('click', openSignup);
closeSignup.addEventListener('click', closeSignupModal);

signupForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const user = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    country: document.getElementById('country').value,
    skills: document.getElementById('skills').value.split(',').map(s => s.trim())
  };

  let users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Bienvenue ' + user.username + ' ! Votre profil a ete cree.');
  closeSignupModal();
  signupForm.reset();
});

const demoProjects = [
  { title: "Appli d'apprentissage du code", country: "RDC / France", desc: "Un groupe mixte travaille sur une appli pour apprendre a coder facilement." },
  { title: "Plateforme musicale collaborative", country: "Congo / Senegal", desc: "Des musiciens de plusieurs pays composent des morceaux ensemble a distance." },
  { title: "Outil de traduction locale", country: "Cameroun / Belgique", desc: "Un projet pour traduire des contenus en langues locales africaines." }
];

function renderProjects() {
  projectsList.innerHTML = '';
  demoProjects.forEach(function(project) {
    const card = document.createElement('div');
    card.style.background = 'white';
    card.style.padding = '20px';
    card.style.borderRadius = '10px';
    card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
    card.innerHTML = '<h3>' + project.title + '</h3>' +
                      '<p style="color:#0b3d2e; font-weight:bold; margin:8px 0;">' + project.country + '</p>' +
                      '<p>' + project.desc + '</p>';
    projectsList.appendChild(card);
  });
}