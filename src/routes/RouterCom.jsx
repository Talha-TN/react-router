import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "../components/Home.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import ProductList from "../components/ProductList.jsx";
import Contact from "../components/Contact.jsx";
import Admin from "../components/Admin.jsx";
const RouterCom = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/productdetails/1001" element={<ProductDetails />} />
      <Route path="/productlist" element={<ProductList />} />
      {/* <Route path="/admin" element={<Navigate to="/" />} /> // also navigate atthis level like thi */}
      <Route path="/admin" element={user ? <Admin /> : <Navigate to="/"/>} /> // conditionally render 
    </Routes>
  );
};
export default RouterCom;
