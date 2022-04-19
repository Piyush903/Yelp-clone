import React from "react";
import AddResturant from "../Components/AddResturant";
import Header from "../Components/Header";
import RestaurantList from "../Components/ResturantList";

const home = () => {
  return (
    <div>
      <Header />
      <AddResturant />
      <RestaurantList />
    </div>
  );
};

export default home;
