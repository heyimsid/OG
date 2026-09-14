const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

const cursor = document.querySelector('.cursor');
if (cursor) {
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .discipline, .stack-items span, .archive-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '38px';
      cursor.style.height = '38px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '14px';
      cursor.style.height = '14px';
    });
  });
}

// Slight editorial parallax on the hero graphic.
window.addEventListener('scroll', () => {
  const shape = document.querySelector('.hero-shape');
  if (shape) shape.style.transform = `translateY(${window.scrollY * 0.08}px) rotate(-18deg)`;
});
