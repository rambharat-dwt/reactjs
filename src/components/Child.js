import React from "react";

const Child = (props) => {
  //   const resetData = () => {
  //     props.reset();
  //   };
  return (
    <>
      <h3>Child Component</h3>
      <h4>name:{props.uname}</h4>
      <h4>password:{props.pass}</h4>

      <button type="btn" onClick={props.reset}>
        Reset
      </button>
    </>
  );
};
export default Child;
