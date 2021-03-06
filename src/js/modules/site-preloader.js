import eventEmitter from './eventEmitter';


export default {
  el: null,
  images: [],
  backgroundEls: [],
  imagesNumber: 0,
  imagesLoaded: 0,
  transition: 1000,

  init() {
    this.el = document.querySelector('#site-preloader');
    this.images = [...document.images];
    this.backgroundEls = [...document.querySelectorAll('.js-preloader-bg')];

    const imagesPaths = this.images.map(image => image.src);
    const backgroundPaths = this.backgroundEls.map(elem => {
      const backgroundImage = window.getComputedStyle(elem, false).backgroundImage;
      return backgroundImage.slice(4, -1).replace(/"/g, '');
    });
    const allPaths = [...imagesPaths, ...backgroundPaths];

    this.imagesNumber = allPaths.length;

    if (this.imagesNumber) {
      allPaths.forEach(imagesPath => {
        const clone = new Image();
        clone.addEventListener('load', this.imageLoaded.bind(this));
        clone.addEventListener('error', this.imageLoaded.bind(this));
        clone.src = imagesPath;
      });
    } else {
      this.preloaderHide();
    }
  },

  preloaderHide(transition = this.transition) {
    const preloader = this.el;
    if (!preloader) return;

    eventEmitter.publish('site-preloader:hiding');

    preloader.style.transition = `opacity ${transition}ms ease, visibility ${transition}ms ease`;
    preloader.classList.add('_loaded');
    document.body.classList.add('_site-loaded');

    setTimeout(() => {
      eventEmitter.publish('site-preloader:removed');

      preloader.remove();
      document.body.classList.add('_site-preloader-hidden');
    }, transition);
  },


  imageLoaded() {
    this.imagesLoaded++;

    if (this.imagesLoaded >= this.imagesNumber) {
      this.preloaderHide();
    }
  }
};
