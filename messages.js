// ConnectAfrica - messagerie (demo avec stockage local)

const conversationsList = document.getElementById('conversations-list');
const chatHeader = document.getElementById('chat-header');
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

const demoConversations = [
  { id: 1, name: "Aline", country: "France", messages: [
    { from: "them", text: "Salut ! J'ai vu ton projet de traduction, ca m'interesse." },
    { from: "me", text: "Super ! Tu es plutot developpeuse ou linguiste ?" },
    { from: "them", text: "Un peu des deux, je peux aider sur les deux fronts." }
  ]},
  { id: 2, name: "Junior", country: "Congo", messages: [
    { from: "them", text: "On peut faire un appel cette semaine pour le projet musique ?" }
  ]},
  { id: 3, name: "Fatou", country: "Senegal", messages: [
    { from: "me", text: "Merci pour ton aide sur le design hier !" },
    { from: "them", text: "Avec plaisir, on continue quand tu veux." }
  ]}
];

let activeConversationId = null;

function getConversations() {
  let stored = JSON.parse(localStorage.getItem('conversations') || 'null');
  if (!stored) {
    localStorage.setItem('conversations', JSON.stringify(demoConversations));
    return demoConversations;
  }
  return stored;
}

function saveConversations(conversations) {
  localStorage.setItem('conversations', JSON.stringify(conversations));
}

function renderConversations() {
  const conversations = getConversations();
  conversationsList.innerHTML = '';
  conversations.forEach(function(conv) {
    const item = document.createElement('div');
    item.className = 'conversation-item' + (conv.id === activeConversationId ? ' active' : '');
    item.innerHTML = '' + conv.name + '' + conv.country + '';
    item.addEventListener('click', function() {
      activeConversationId = conv.id;
      renderConversations();
      renderChat();
    });
    conversationsList.appendChild(item);
  });
}

function renderChat() {
  const conversations = getConversations();
  const conv = conversations.find(c => c.id === activeConversationId);

  if (!conv) {
    chatHeader.textContent = 'Selectionnez une conversation';
    chatMessages.innerHTML = '';
    return;
  }

  chatHeader.textContent = conv.name + ' (' + conv.country + ')';
  chatMessages.innerHTML = '';
  conv.messages.forEach(function(msg) {
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble ' + (msg.from === 'me' ? 'sent' : 'received');
    bubble.textContent = msg.text;
    chatMessages.appendChild(bubble);
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!activeConversationId || !chatInput.value.trim()) return;

  const conversations = getConversations();
  const conv = conversations.find(c => c.id === activeConversationId);
  conv.messages.push({ from: 'me', text: chatInput.value.trim() });
  saveConversations(conversations);
  chatInput.value = '';
  renderChat();
});

renderConversations();