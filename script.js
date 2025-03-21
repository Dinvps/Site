document.addEventListener('DOMContentLoaded', () => {
  const animatedSections = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedSections.forEach(section => observer.observe(section));
});
