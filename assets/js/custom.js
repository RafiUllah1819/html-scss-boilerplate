// sticky header
window.onscroll = function() {
  stickHeader();
};

function stickHeader() {
  var header = document.getElementById("site__header");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 10) {
    header.classList.add("fixed__header");
  } else {
    header.classList.remove("fixed__header");
  }
}

// hero slider

const heroSlider = new Swiper('.hero__slider', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination.hero__slider--pagination',
    clickable: true,
  },

});

// testimonials slider

const testimonialSlider = new Swiper('.testimonials__slider', {
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: '.swiper-pagination.hero__slider--pagination',
    clickable: true,
  },

});