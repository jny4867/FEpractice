//notice swiper
const swiperNotice = new Swiper('.notice-line .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: true,
});

const swiperPromotion = new Swiper('.promotion .swiper', {
    loop: true,
    autoplay: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },

  });


  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');
  const promotionToggleBtnEl = document.querySelector('.toggle-promotion . material-')

  promotionToggleBtn.addEventListener('click', function({target}){
    [...promotionToggleBtn.children].forEach(toogleBtn => {
      promotionToggleBtn.classList.toggle('off', toggleBtn === target)

  }})
  };
  