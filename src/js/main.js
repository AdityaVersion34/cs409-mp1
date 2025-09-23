/* Your JS here. */
console.log('Hello World!')

// For navbar

const navbar = document.querySelector('.navbar');

// handler for scroll expansion/collapse
function handleScroll() {
  if (window.scrollY > 0) {
    navbar.classList.add('collapsed');
  } else {
    navbar.classList.remove('collapsed');
  }
}

window.addEventListener('scroll', handleScroll);
// Call once on load in case page starts scrolled
handleScroll();


// Smooth scroll to sections when buttons clicked
document.querySelectorAll('.navbar button').forEach(button => {
  button.addEventListener('click', () => {
    const sectionId = button.getAttribute('data-target');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
