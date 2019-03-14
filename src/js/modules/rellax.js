import Rellax from 'rellax';


export default {
  init() {
    this.rellax();
  },
  
  rellax() {
    new Rellax('.rellax', {
      // round: false
    });
  }
};
