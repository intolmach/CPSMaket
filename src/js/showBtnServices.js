const swiperWrapper2 = document.querySelector('.swiper-list--services');
const toggleBtn2 = document.querySelector(".swiper-menu__toggle-button--services");
toggleBtn2.addEventListener('click', function () {
  swiperWrapper2.classList.toggle('swiper-list--all');
});