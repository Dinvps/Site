document.addEventListener('DOMContentLoaded', function() {
  // Seletor de todos os elementos que têm classe fade-up, fade-left ou fade-right
  const animatedSections = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // 10% visível
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a classe .appear para "destravar" a animação
        entry.target.classList.add('appear');
        // Para de observar depois de animar
        obs.unobserve(entry.target);
      }
    });
  }, options);

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});
