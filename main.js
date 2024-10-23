var slides = document.querySelectorAll('.carousel-item');
var navItems = document.querySelectorAll('.carousel-nav-item');
var currentSlide = 0;

function changeSlide(n) {
  slides[currentSlide].classList.remove('active');
  navItems[currentSlide].classList.remove('active');

  currentSlide = n;

  slides[currentSlide].classList.add('active');
  navItems[currentSlide].classList.add('active');
}

setInterval(function() {
  changeSlide((currentSlide + 1) % slides.length);
}, 5000);


