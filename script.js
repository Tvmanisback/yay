// Grab elements
const chatBox   = document.getElementById('chat-box');
const inputBox  = document.getElementById('user-input');
const sendBtn   = document.getElementById('send-btn');
const presetSel = document.getElementById('preset-select');

// Helper to add a message to the chat
function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.innerHTML = `<p>${text}</p>`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // keep bottom in view
}

// Fake “AI” – just echoes a placeholder
function fakeAIResponse(userText, preset) {
  // The preset is not used in this demo; it's just for show.
  return `⚡️ [${preset || 'default'}] I received: "${userText}"`;
}

// Send button handler
sendBtn.addEventListener('click', () => {
  const userText = inputBox.value.trim();
  if (!userText) return;

  // 1. Show user message
  addMessage('user', userText);

  // 2. Show placeholder AI response after a tiny delay
  setTimeout(() => {
    const aiText = fakeAIResponse(userText, presetSel.value);
    addMessage('ai', aiText);
  }, 600);

  inputBox.value = '';
  inputBox.focus();
});

// Optional: allow pressing Enter to send
inputBox.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendBtn.click();
  }
});
