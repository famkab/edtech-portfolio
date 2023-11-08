// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Active state in navigation
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;

  navigationLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
      ) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});
