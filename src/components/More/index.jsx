import React from "react";

const More = ({ imageData, limit, setLimit, fetchImageList }) => {
  const { totalHits } = imageData;

  const handleClick = () => {
    setLimit(limit + 12);
    fetchImageList(limit + 12);
  };

  return (
    <div className="text-center pb-5">
      {totalHits > 0 && limit <= totalHits ? (
        <button
          onClick={() => handleClick()}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 focus:outline-none text-white rounded cursor-pointer"
        >
          More
        </button>
      ) : (
        <button
          disabled
          className="px-4 py-2 bg-blue-300  text-white rounded cursor-not-allowed"
        >
          More
        </button>
      )}
    </div>
  );
};

export default More;
