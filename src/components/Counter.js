import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "../services/actions/Action";

const Counter = () => {
  const counter = useSelector((state) => state.rootReducer.changeTheNumber);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("counter", counter);
  }, [counter]);

  return (
    <>
      <h4>hello , Increment/Decrement counter</h4>
      <br />
      <br />

      <h4>{counter}</h4>
      <br />
      <button type="btn btn-primary" onClick={() => dispatch(incNumber())}>
        Increment
      </button>
      <button type="btn btn-danger" onClick={() => dispatch(decNumber())}>
        Decrement
      </button>
    </>
  );
};
export default Counter;
