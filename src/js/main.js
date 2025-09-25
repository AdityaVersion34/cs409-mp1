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

const navbarButtons = document.querySelectorAll('.navbar button');
const sections = Array.from(navbarButtons).map(btn => document.getElementById(btn.getAttribute('data-target')));

function updateActiveButton() {
  const scrollPosition = window.scrollY + window.innerHeight / 3;  // Adjust threshold as needed

  let currentIndex = 0;
  for (let i = 0; i < sections.length; i++) {
    if (scrollPosition >= sections[i].offsetTop) {
      currentIndex = i;
    } else {
      break;
    }
  }

  navbarButtons.forEach((btn, idx) => {
    if (idx === currentIndex) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', updateActiveButton);
// Call initially to highlight correct button on page load
updateActiveButton();


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


// modal and column stuff

const photos = document.querySelectorAll('.imgmodal-photo');
const modal = document.getElementById('imgmodal-modal');
const modalDesc = document.getElementById('imgmodal-modalDesc');
const closeBtn = document.getElementById('imgmodal-closeBtn');

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    const desc = photo.getAttribute('data-desc');
    modalDesc.textContent = desc;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
