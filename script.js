var currentSlide = 0;
var slides = document.querySelectorAll('.slideshow img');
var totalSlides = slides.length;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].style.display = 'block';
}

setInterval(function() {
  showSlide(currentSlide + 1);
}, 5000); // Change slide every 5 seconds

var progressIndicator = document.querySelector('.progress-indicator');

window.addEventListener('scroll', function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollProgress = (scrollTop / scrollHeight) * 100;
  progressIndicator.style.width = scrollProgress + '%';
});