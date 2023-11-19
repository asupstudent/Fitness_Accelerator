const sliderReviews = document.querySelector('[data-reviews="reviews"]');
const buttonNext = document.querySelector('[data-button="next-reviews"]');
const buttonPrev = document.querySelector('[data-button="prev-reviews"]');

const setSliderReviews = () => {
  return new window.Swiper(sliderReviews, {

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    slidesPerView: 1,
    spaceBetween: 30,
  });
};

const initSliderReviews = () => {
  if (document.body.contains(sliderReviews)) {
    setSliderReviews();
  }
};

export {initSliderReviews};
