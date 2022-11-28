import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../Class.css";
import { add } from "../store/CartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      console.log(data);

      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsRow">
      {products.map((product) => {
        return (
          <div className="productWrapper" key={product.id}>
            <img src={product.image} alt />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              className="addToCartBtn "
              onClick={() => handleAdd(product)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
