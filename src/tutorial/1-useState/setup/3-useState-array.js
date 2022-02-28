import React from "react";
import { useState } from "react";

const UseStateArray = () => {
  const ResetData = () => {
    setstate([]);
  };
  const DelData = (item) => {
    const result = state.filter((data) => {
      return data != item;
    });
    setstate(result);
  };
  const [state, setstate] = useState(["Mujahid", "Wajid", "Junaid", "Ahmad"]);
  return (
    <>
      {state.map((item) => {
        return (
          <div className="item">
            <h1>{item}</h1>
            <button
              className="btn"
              onClick={() => {
                DelData(item);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          ResetData();
        }}
      >
        Reset
      </button>
    </>
  );
};

export default UseStateArray;
