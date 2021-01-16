import React from "react";

const ImageTypes = ({ type, setType }) => {
  const types = ["all", "photo", "illustration", "vector"];
  return (
    <div className="flex flex-row justify-center align-center">
      {types.map((item, idx) => (
        <span
          onClick={() => setType(item)}
          className={`${
            type === item
              ? "bg-red-500 text-white px-4 py-2 rounded shadow-sm mx-3 cursor-pointer"
              : "px-4 py-2 rounded shadow-sm bg-gray-200 text-gray-500 mx-3 cursor-pointer"
          }`}
          key={idx}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default ImageTypes;
