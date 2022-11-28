import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const ProductComponent = () => {
  const products = useSelector((state) => state.rootReducer.productReducer);
  console.log("data...", products);

  return (
    <>
      <h3>Product components</h3>
    </>
  );
};
export default ProductComponent;
