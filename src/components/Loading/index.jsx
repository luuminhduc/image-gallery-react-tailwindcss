import React from "react";
import "./index.css";

const Loading = ({ loading }) => {
  return loading ? (
    <div className="loading h-screen w-screen fixed top-0 left-0 flex justify-center">
      <div className="circle rounded-full animate-spin border-4 border-solid"></div>
    </div>
  ) : (
    ""
  );
};

export default Loading;
