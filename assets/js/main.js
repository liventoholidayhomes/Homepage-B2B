// robust active state for GitHub Pages subpaths
const setActive = () => {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href').split('#')[0].replace('./','').toLowerCase();
    const isActive = (href === '' && path === 'index.html') || (href === path);
    a.classList.toggle('active', isActive);
  });
};
setActive();

// mailto handler for contact form
const form = document.querySelector('#contact-form');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const body = Array.from(data.entries()).map(([k,v]) => `${k}: ${v}`).join('%0D%0A');
    const subject = encodeURIComponent('Kontaktanfrage über Website');
    const href = `mailto:info@livento-holidayhomes.de?subject=${subject}&body=${body}`;
    window.location.href = href;
  });
}