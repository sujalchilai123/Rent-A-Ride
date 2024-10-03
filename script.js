document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const rentButtons = document.querySelectorAll('.rent-btn');
  const getStartedBtn = document.querySelector('.hero .btn');
  const vehiclesSection = document.querySelector('#vehicles');
  const homeSection = document.querySelector('#home');
  const aboutSection = document.querySelector('#about'); // About Me section
  const contactSection = document.querySelector('#contact'); // Contact section

  const vehiclesLink = document.querySelector('nav .nav-links a[href="#vehicles"]');
  const homeLink = document.querySelector('nav .nav-links a[href="#home"]');
  const aboutLink = document.querySelector('nav .nav-links a[href="#about"]');
  const contactLink = document.querySelector('nav .nav-links a[href="#contact"]');

  // Toggle navigation menu
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });

  // Alert on rent button click
  rentButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      const price = card.dataset.price;
      alert(`You have selected a vehicle for INR${price}/day`);
    });
  });

  // Smooth scroll to vehicles section on "Get Started" button click
  getStartedBtn.addEventListener('click', () => {
    vehiclesSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Smooth scroll to sections
  vehiclesLink.addEventListener('click', (e) => {
    e.preventDefault();
    vehiclesSection.scrollIntoView({ behavior: 'smooth' });
  });

  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    homeSection.scrollIntoView({ behavior: 'smooth' });
  });

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const rentButtons = document.querySelectorAll('.rent-btn');

  rentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      switch (index) {
        case 0:
          window.location.href = 'luxury.html';
          break;
        case 1:
          window.location.href = 'suv.html';
          break;
        case 2:
          window.location.href = 'economy.html';
          break;
      }
    });
  });
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll animation
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });

  // Testimonials carousel
  const carousel = document.querySelector('.testimonial-carousel');
  const cards = document.querySelectorAll('.testimonial-card');
  let index = 0;

  function showNextCard() {
    index = (index + 1) % cards.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  function showPrevCard() {
    index = (index - 1 + cards.length) % cards.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  document.querySelector('.testimonial-carousel::before').addEventListener('click', showPrevCard);
  document.querySelector('.testimonial-carousel::after').addEventListener('click', showNextCard);
});

