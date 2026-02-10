const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const form = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');
const year = document.querySelector('#year');

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (form && formNote) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    formNote.textContent = `Thanks${name ? `, ${name}` : ''}! Your request was received. We will contact you shortly.`;
    form.reset();
  });
}
