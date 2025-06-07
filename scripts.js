const carousel = document.getElementById('carousel');
let currentIndex = 0;

function moveSlide(direction) {
  const itemsPerPage = window.innerWidth <= 600 ? 1 : (window.innerWidth <= 1024 ? 2 : 4);
  const totalItems = carousel.children.length;
  const maxIndex = Math.ceil(totalItems / itemsPerPage) + 1;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = maxIndex;
  } else if (currentIndex > maxIndex) {
    currentIndex = 0;
  }
  const slideWidth = carousel.clientWidth / itemsPerPage;
  carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

window.addEventListener('resize', () => {
  moveSlide(0);
});
