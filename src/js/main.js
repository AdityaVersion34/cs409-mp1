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


// Carousel stuff

// JavaScript
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const leftBtn = document.querySelector('.carousel-button.left');
const rightBtn = document.querySelector('.carousel-button.right');

let currentIndex = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
}

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateCarousel();
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});
