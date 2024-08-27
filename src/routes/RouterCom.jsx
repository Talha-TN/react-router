import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home.jsx"
import ProductDetails from "../components/ProductDetails.jsx";
import ProductList from "../components/ProductList.jsx";
import Contact from "../components/Contact.jsx";
const RouterCom = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/productdetails/1001" element={<ProductDetails />} />
      <Route path="/productlist" element={<ProductList />} />
    </Routes>
  );
};
export default RouterCom;
