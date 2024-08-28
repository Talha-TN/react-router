import React from "react";
import {} from "react-router";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
const ProductList = () => {
  const [searchParams, setsearchParams] = useSearchParams(); // to get to query entered by user using useSearchParams (query matching product existing or not)
  console.log(
    searchParams.get("keyword"),// this key word will match the keyword entered by the user
    searchParams.get("instock"), 
    searchParams.get("rating")
  ); // .get method will get to the key word enterd by the user
  const location = useLocation(); // to get every thing related to this product (url)
  console.log(location);
  const navigate = useNavigate();
  return (
    <div>
      <h1>product list {searchParams.get("keyword")}</h1>
      <button
        className="bg-blue-400 p-3 rounded-lg ml-10 mt-10"
        onClick={() => navigate("/")}
      >
        back to home
      </button>
    </div>
  );
};

export default ProductList;
 ///////////////////
//  useParams >> if need only id then we can use useparams 
// useSearchParma >>> if we need more paramemters and filter added by the user then we use useSearchParams
// useLoacation  >>> if we need every thing related to this component we need useLocation
