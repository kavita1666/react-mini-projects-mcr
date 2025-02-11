import "./ImageCarousel.css";
import { imageLists } from "../../helpers/carouselHelper";
import leftArrow from "../../images/angle-circle-left.png";
import rightArrow from "../../images/angle-circle-right.png";
import { useState } from "react";

export const ImageCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const handleLeftNavigation = () => {
    setImageIndex((imageIndex) => (imageIndex - 1 < 0 ? imageLists.length - 1 : imageIndex - 1));
  };
  const handleRightNavigation = () => {
    setImageIndex((imageIndex) => (imageIndex + 1) % imageLists.length);
  };

  return (
    <div className="image-container">
      <img src={leftArrow} alt="left-arrow" className="navigation-arrow" onClick={handleLeftNavigation} />

      <div className="image-div">
        <img src={imageLists[imageIndex].url} alt={imageLists[imageIndex].title} className="image" />
      </div>

      <img src={rightArrow} alt="left-arrow" className="navigation-arrow" onClick={handleRightNavigation} />
    </div>
  );
};
