import React from "react";
import "./index.css";
const ImageModal = ({ image, setCurrentImage, nextImage, prevImage }) => {
  return image ? (
    <div className="modal">
      <span
        onClick={() => setCurrentImage(null)}
        className="text-white cursor-pointer text-6xl absolute top-3 right-5 md:top-3 md:right-20"
      >
        <i className="fas fa-times"></i>
      </span>
      <span onClick={prevImage} className="text-white cursor-pointer text-4xl">
        <i class="fas fa-chevron-left"></i>
      </span>
      <div className="flex-shrink max-w-sm lg:max-w-4xl mx-3 lg:mx-6">
        {image.largeImageURL ? (
          <img src={image.largeImageURL} alt="" />
        ) : (
          "Loading"
        )}
      </div>
      <span onClick={nextImage} className="text-white cursor-pointer text-4xl">
        <i class="fas fa-chevron-right"></i>
      </span>
    </div>
  ) : (
    ""
  );
};

export default ImageModal;
