import React from "react";
import { Route, Routes, Navigate } from "react-router";
import {Home,ProductDetails,ProductList,Admin,ContactPak,Contact,ContactKSA,ContactOther,PageNotFound} from "../pages/index";
const RouterCom = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} >
      <Route path="pakistan"  element={<ContactPak/>}/>
      <Route path="ksa"  element={<ContactKSA/>}/>
      <Route path="*"  element={<ContactOther/>}/>
      <Route/>
       </Route>
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
