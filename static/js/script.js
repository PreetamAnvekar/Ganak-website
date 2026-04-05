
// Scroll reveal
const els = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}
  });
},{threshold:0.1});
els.forEach(el => obs.observe(el));

// Active nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-120)cur=s.id});
  navLinks.forEach(a=>{a.classList.toggle('active',a.getAttribute('href')==='#'+cur)});
});

// Highlight service card when clicking tag on visiting card
function highlightService(id) {
  setTimeout(() => {
    const card = document.getElementById('svc-' + id);
    if (!card) return;
    card.scrollIntoView({behavior:'smooth', block:'center'});
    card.style.transition = 'box-shadow 0.3s, border-color 0.3s, background 0.3s';
    card.style.boxShadow = '0 0 0 3px rgba(6,106,161,0.5), 0 20px 60px rgba(6,106,161,0.2)';
    card.style.borderColor = 'rgba(6,106,161,0.4)';
    card.style.background = 'rgba(232,244,251,0.6)';
    setTimeout(() => {
      card.style.boxShadow = '';
      card.style.borderColor = '';
      card.style.background = '';
    }, 2000);
  }, 400);
}

// Form submit
function submitForm(btn) {
  btn.textContent = '✓ Sent! We will contact you shortly.';
  btn.style.background = 'var(--accent)';
  btn.disabled = true;
}