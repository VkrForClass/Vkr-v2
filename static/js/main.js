const swiperTop = new Swiper('.top__swiper', {
  // Optional parameters
  effect: 'fade',
/*
  autoplay: {
  delay: 3500,
  disableOnInteraction: false,
  },
*/
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const  swiper = new Swiper(".period__slider", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Добавим закрытие меню при повторном нажатии на кнопку
document.getElementById('toggleNav').addEventListener('click', function(event) {
    var mainNav = document.getElementById('mainNav');
    if (mainNav.style.display === 'none') {
      mainNav.style.display = 'flex';
    } else {
      mainNav.style.display = 'none';
    }

});


