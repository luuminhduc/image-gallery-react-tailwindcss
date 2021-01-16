import React from "react";

const SearchImg = ({ term, setTerm, fetchImageList, setLimit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setLimit(12);
    fetchImageList(12);
  };

  return (
    <div className="containe max-w-xl mt-20 mb-10 mx-auto px-5">
      <form onSubmit={handleSubmit} className="flex flex-row ">
        <input
          placeholder="Search image"
          className="flex-1  shadow-xl  rounded py-3 px-4 mr-1 focus:outline-none focus:ring-2"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="bg-purple-600   px-4 py-2 rounded focus:outline-none hover:bg-purple-500 text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchImg;
