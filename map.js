// ConnectAfrica - carte des membres par pays (demo)

const countryList = document.getElementById('country-list');

const countryData = [
  { name: "Congo", count: 42 },
  { name: "Republique Democratique du Congo", count: 65 },
  { name: "France", count: 38 },
  { name: "Belgique", count: 19 },
  { name: "Cote d'Ivoire", count: 27 },
  { name: "Senegal", count: 31 },
  { name: "Cameroun", count: 24 }
];

function renderCountries() {
  countryList.innerHTML = '';
  countryData.forEach(function(c) {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = '<div class="country-name">' + c.name + '</div>' +
                      '<div class="country-count">' + c.count + ' membres</div>';
    countryList.appendChild(card);
  });
}

renderCountries();