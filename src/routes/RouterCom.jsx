import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "../components/Home.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import ProductList from "../components/ProductList.jsx";
import Contact from "../components/Contact.jsx";
import Admin from "../components/Admin.jsx";
import PageNotFound from "../components/PageNotFound.jsx";
const RouterCom = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/productdetails/:name/:id/:country" element={<ProductDetails />} /> // also add name and id both like this (we can add as may as we want but the most usage is of id)  */}
      <Route path="/productdetails/:id" element={<ProductDetails />} /> // to get component matching this id
      <Route path="/productlist" element={<ProductList />} />
      {/* <Route path="/admin" element={<Navigate to="/" />} /> // also navigate atthis level like thi */}
      <Route path="/admin" element={user ? <Admin /> : <Navigate to="/"/>} /> // conditionally render 
      <Route path="*" element={<PageNotFound title="404"/>}/>
    </Routes>
  );
};
export default RouterCom;
