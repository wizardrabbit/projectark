import React, { useState } from 'react';
import GuideImage from '../../images/guides/index';

const Guide = () => {
  const [slide, setSlide] = useState(1);
  const increaseSlide = () => {
    slide >= 8 ? setSlide(1) : setSlide(slide + 1);
  };
  const decreaseSlide = () => {
    slide <= 1 ? setSlide(8) : setSlide(slide - 1);
  };

  const styles = {
    transform: `translate3d(${(slide - 1) * -1000}px, 0px, 0px)`,
  };

  const ImageSlide = () => (
    <div className="image-stage">
      <div className="image-slide" style={styles}>
        <img src={GuideImage.guide1} alt="Pic 1" />
        <img src={GuideImage.guide2} alt="Pic 2" />
        <img src={GuideImage.guide3} alt="Pic 3" />
        <img src={GuideImage.guide4} alt="Pic 4" />
        <img src={GuideImage.guide5} alt="Pic 5" />
        <img src={GuideImage.guide6} alt="Pic 6" />
        <img src={GuideImage.guide7} alt="Pic 7" />
        <img src={GuideImage.guide8} alt="Pic 8" />
      </div>
    </div>
  );

  return (
    <div className="help-wrapper">
      <div className="help-box">
        <input
          className="arrow_left"
          type="image"
          src={GuideImage.arr_l}
          onClick={decreaseSlide}
          alt="Show previous image"
        />
        <input
          className="arrow_right"
          type="image"
          src={GuideImage.arr_r}
          onClick={increaseSlide}
          alt="Show next image"
        />
        <ImageSlide />
      </div>
    </div>
  );
};

export default Guide;
