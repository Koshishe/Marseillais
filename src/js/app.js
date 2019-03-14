import documentReady from './utils/documentReady';
import documentLoaded from './utils/documentLoaded';
import sitePreloader from './modules/site-preloader';
import slider from './modules/sliders';
import AOS from 'aos';
import rellax from "./modules/rellax";


documentReady(() => {
  sitePreloader.init();
  slider.init();
  AOS.init();
  rellax.init();
});


documentLoaded(() => {

});
