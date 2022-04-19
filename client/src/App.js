import React from "react";
import { Routes, Route } from "react-router-dom";
import { RestaurantsContextProvider } from "./Context/ResturantContext";
import Home from "./routes/Home";
import ResturantPage from "./routes/ResturantPage";
import Updatepage from "./routes/Updatepage";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resturants/:id" element={<ResturantPage />} />
          <Route path="/resturants/:id/update" element={<Updatepage />} />
        </Routes>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
