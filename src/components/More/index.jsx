import React from "react";

const More = ({ imageData, limit, setLimit }) => {
  const { totalHits } = imageData;

  console.log(totalHits);

  const handleClick = () => {
    console.log("asdsa");
  };

  return (
    <div className="text-center mb-5">
      {totalHits > 0 && limit <= totalHits ? (
        <button
          onClick={() => setLimit(limit + 12)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 focus:outline-none text-white rounded cursor-pointer"
        >
          More
        </button>
      ) : (
        <button
          disabled
          onClick={handleClick}
          className="px-4 py-2 bg-blue-300  text-white rounded cursor-not-allowed"
        >
          More
        </button>
      )}
    </div>
  );
};

export default More;
