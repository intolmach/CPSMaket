const swiperWrapper = document.querySelector('.swiper-list');
const toggleBtn = document.querySelector(".swiper-menu__toggle-button");
toggleBtn.addEventListener('click', function () {
  swiperWrapper.classList.toggle('swiper-list--all');
});