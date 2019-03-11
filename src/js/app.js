import documentReady from './utils/documentReady';
import documentLoaded from './utils/documentLoaded';
import sitePreloader from './modules/site-preloader';
import slider from './modules/sliders';


documentReady(() => {
  sitePreloader.init();
  slider.init();
});


documentLoaded(() => {

});
