import Glide from '@glidejs/glide';

export default {
    init: (heroSliderSelector) => {
        new Glide(heroSliderSelector, {
            gap: 0,
            autoplay: 4000,
            hoverpause: true
        }).mount()
    }
  };
  