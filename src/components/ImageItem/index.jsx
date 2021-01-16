import React from "react";

const ImageItem = ({ item, setCurrentImage }) => {
  const { webformatURL, comments, downloads, favorites, tags } = item;
  const handleClick = () => {
    setCurrentImage(item);
  };
  return (
    <div className="shadow-md p-4 rounded bg-white">
      <div className="flex-shrink mb-3">
        <img className="rounded" src={webformatURL} alt="" />
      </div>
      <div className="">
        <p className="text-sm text-gray-500 my-3">Comments: {comments}</p>
        <p className="text-sm text-gray-500 my-3">Comments: {downloads}</p>
        <p className="text-sm text-gray-500 my-3">Comments: {favorites}</p>
      </div>
      <div className="flex flex-wrap">
        {tags.split(",")?.map((el, idx) => (
          <span
            className="px-3 py-1 text-sm bg-purple-100 rounded text-purple-600 my-2 mr-2"
            key={idx}
          >
            #{el}
          </span>
        ))}
      </div>
      <button
        onClick={handleClick}
        className="px-2 py-1 text-sm  my-3 bg-green-600 hover:bg-green-500 focus:outline-none text-white rounded cursor-pointer"
      >
        View
      </button>
    </div>
  );
};

export default ImageItem;
