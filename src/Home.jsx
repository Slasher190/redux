import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const value = 20;
  const dispatch = useDispatch();
  const { c } = useSelector((state) => state.custom);
  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const addByValueBtn = () => {
    dispatch({
      type: "incrementByValue",
      payload: 25,
    });
  };
  return (
    <>
      <h1>{c}</h1>
      <button onClick={addBtn}>Increment</button>
      <button onClick={subBtn}>Decrement</button>
      <button onClick={addByValueBtn}>by25</button>
    </>
  );
};
export default Home;
