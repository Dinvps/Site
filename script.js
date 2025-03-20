document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.animate-on-scroll');
  
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe que revela a seção
          entry.target.classList.add('fade-in');
          // Para de observar essa seção (não precisa animar de novo)
          obs.unobserve(entry.target);
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  