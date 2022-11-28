import React from "react";
import Products from "./Products";

const MainTitle = { textAlign: "center", color: "blue" };
const MainsTitle = { textAlign: "center", color: "#ff0000" };

const Home = () => {
  return (
    <div className="container">
      <h5 style={MainsTitle}>Welcome to the Redux toolKit store</h5>
      <section>
        <h3 style={MainTitle}>Products</h3>

        <Products />
      </section>
    </div>
  );
};

export default Home;
