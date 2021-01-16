import React from "react";
import ImageItem from "../ImageItem";

const ImageList = ({ list, setCurrentImage }) => {
  const { hits, totalHits } = list;

  const renderList = () => {
    return (
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {hits?.map((item, idx) => (
          <ImageItem setCurrentImage={setCurrentImage} key={idx} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="container max-w-5xl mx-auto my-10 px-3 lg:px-0">
      <div className="my-3 mb-8 text-2xl">Total: {totalHits}</div>
      {hits.length > 0 ? (
        renderList()
      ) : (
        <span className="text-2xl">No image is found</span>
      )}
    </div>
  );
};

export default ImageList;
