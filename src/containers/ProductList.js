import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";
import { setProducts } from "../services/actions/Action";
const ProductList = () => {
  const product = useSelector(
    (state) => state.rootReducer.productReducer.products
  );

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <>
      <h3>Product List</h3>
      {product.map((item, ind) => {
        return (
          <div key={ind}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.category}</div>
          </div>
        );
      })}

      <ProductComponent />
    </>
  );
};
export default ProductList;
