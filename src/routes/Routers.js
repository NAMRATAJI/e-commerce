import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Allfoods from "../pages/Allfood";
import Cart from "../pages/Cart";
import Checkout from "../pages/CheckOut";
import Restaurant from "../pages/Restaurant";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import OurStory from "../pages/OurStory";
import ShopAll from "../pages/ShopAll";
import Subscribe from "../pages/Subscribe";
import Support from "../pages/Support";
import MealPlans from "../pages/MealPlans"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<Allfoods />} />
      <Route path="/foods/:id" element={<Restaurant />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mealPlans" element={<MealPlans />} />
      <Route path="/ourStory" element={<OurStory />} />
      <Route path="/shpoAll" element={<ShopAll /> } />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/support" element={<Support />} />

    </Routes>
  );
};

export default Routers;