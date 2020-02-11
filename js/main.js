var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },

    breakpoints: {
        
        600: {
          slidesPerView: 2,
        }
      }
});

var burgerButton = document.querySelector ('.menu-burger');
var menu = document.querySelector  ('.header');
burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('menu-burger-active');
    menu.classList.toggle('header-active');
})

