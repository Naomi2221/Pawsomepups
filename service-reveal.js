document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.services-section .product-card');

  if (!cards.length) {
    return;
  }

  cards.forEach(function (card, index) {
    card.classList.add('service-card-reveal');
    card.style.transitionDelay = (index % 2) * 120 + 'ms';
  });

  if (!('IntersectionObserver' in window)) {
    cards.forEach(function (card) {
      card.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(function (card) {
    observer.observe(card);
  });
});
