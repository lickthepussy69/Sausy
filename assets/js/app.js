// Minimal interactivity for Sausy Labs site
document.addEventListener('DOMContentLoaded', () => {
  // Characters placeholder
  const characters = [
    { name: 'BeakerBro', img: 'assets/img/placeholder-1.png' },
    { name: 'FlameLord', img: 'assets/img/placeholder-2.png' },
    { name: 'PlasmaGal', img: 'assets/img/placeholder-3.png' }
  ];
  const wrap = document.getElementById('characters');
  if (wrap){
    characters.forEach(c => {
      const card = document.createElement('div');
      card.className = 'char';
      card.innerHTML = `<img src="${c.img}" alt="${c.name}"><div class="name">${c.name}</div>`;
      wrap.appendChild(card);
    });
  }

  // Fake subscribe
  const btn = document.getElementById('subscribeBtn');
  const email = document.getElementById('email');
  const note = document.getElementById('subNote');
  if (btn && email && note){
    btn.addEventListener('click', () => {
      if (!email.value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){
        note.textContent = 'Enter a valid email to subscribe.';
        note.style.color = '#ffacac';
      } else {
        note.textContent = 'Subscribed! (placeholder — wire to your provider later)';
        note.style.color = '#a7f3a7';
        email.value = '';
      }
    });
  }
});
