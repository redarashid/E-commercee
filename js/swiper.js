// swiper silde slide_bar

var swiper = new Swiper(".slider_swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable: true
    },
    autoplay:{
      delay: 2500,
    },
    loop: true,
  });



// swiper silde sale-_slide

var swiper = new Swiper(".slide_sec", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable: true
    },
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay:{
      delay: 3000,
    },
    navigation:{
        nextEL: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
  });