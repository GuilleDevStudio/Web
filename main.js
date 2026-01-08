// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Animación simple al hacer scroll
const elements = document.querySelectorAll('.card, .step');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = '1';
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => {
  el.style.transform = 'translateY(30px)';
  el.style.opacity = '0';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});
