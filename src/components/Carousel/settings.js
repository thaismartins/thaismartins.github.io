const standard = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  lazyLoad: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        swipeToSlide: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        swipeToSlide: true,
        dots: true,
        arrows: false,
      },
    },
  ],
}

const full = {
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  respondTo: 'slider',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        swipeToSlide: true,
        dots: true,
        arrows: false,
      },
    },
  ],
}

export default {
  standard,
  full,
}
