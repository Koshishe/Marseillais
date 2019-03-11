import Swiper from 'Swiper';


export default {
  init() {
    this.slider();
    // this.handlers();
  },


  handlers() {

  },


  slider() {
    const name = 'js-slider';
    const classes = {
      block: name + '-block',
      slider: name,
      wrapper: name + '-wrapper',
      slide: name + '-slide',
      nav: name + '-nav',
      pagination: name + '-pagination',
      prev: 'js-prev',
      next: 'js-next',
      style: {
        bullet: 'slider-pagination__item'
      },
      activeClass: '_active-slide'
    };

    const sliders = [...document.querySelectorAll(`.${classes.block}`)];

    sliders.forEach(block => {
      const slider = block.querySelector(`.${classes.slider}`);
      const nav = block.querySelector(`.${classes.nav}`);
      const pagination = block.querySelector(`.${classes.pagination}`);

      if (!slider || !pagination || !nav) {
        return false;
      }

      new Swiper(slider, {
        slidesPerView: 1, // 'auto'
        centeredSlides: false,
        loop: false,
        autoplay: false,
        grabCursor: false,
        wrapperClass: classes.wrapper,
        slideClass: classes.slide,
        slideActiveClass: classes.activeClass,
        navigation: {
          prevEl: nav.querySelector(`.${classes.prev}`),
          nextEl: nav.querySelector(`.${classes.next}`)
        },
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true
        },

        breakpoints: {
          767: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      });
    });

  }
};
