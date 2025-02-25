import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
function createSwiper(containerClass) {
    return new Swiper(`.${containerClass}`, {
        modules: [Pagination],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 16,
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        }
    });
}

if (window.matchMedia("(max-width: 767px)").matches) {
    createSwiper('swiper');
}



