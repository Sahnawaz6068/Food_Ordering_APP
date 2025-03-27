import React from "react";

function ResCard ({ name, imageId, cuisines, avgRating}) {
  return (
    <>
      <div className="h-74 w-60 bg-gray-100  m-4 rounded-md cursor-pointer">
        <img
          className="bg-red-300 h-36 w-54 ml-3 mt-3 rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
          alt=""
        />
        <div className="m-4 mt-2">
          <h3 className="text-xl"> {name}</h3>
          <h1>{avgRating}</h1>
          <h3>{cuisines}</h3>
        </div>
      </div>
    </>
  );
}

export default ResCard;
