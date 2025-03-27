import React, { useState } from "react";
import ResCard from "./ResCard";
import restaurant from "../utils/mockData"
function Home() {
  const [Restaurants,setRestaurants]=useState(restaurant);
 function filterRestaurant(){
  const filterResturant=restaurant.filter(
    (restaurant)=>restaurant.info.avgRating>4.5
  )
  setRestaurants(filterResturant);
  }
  return (
    <>
      <button onClick={filterRestaurant} className="ml-4 px-2 cursor-pointer text-white font-bold py-2 bg-red-500 rounded-md">Top Resturent</button>
      <div className="h-full w-full flex flex-wrap justify-center items-center gap-4 overflow-y-auto p-4 scrollbar-hide">
      {Restaurants.map((Restaurants, index) => (
        <ResCard
          key={index}
          name={Restaurants.info.name}
          imageId={Restaurants.info.cloudinaryImageId}
          cuisines={Restaurants.info.cuisines}
         avgRating={Restaurants.info.avgRating}
        />
      ))}
      </div>
    </>
  );
}

export default Home;
