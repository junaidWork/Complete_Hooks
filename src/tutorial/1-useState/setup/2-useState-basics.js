import React, { useState } from "react";

const UseStateBasics = () => {
  const [state, setstate] = useState("Junaid");
  const handle = () => {
    if (state == "Junaid") {
      setstate("Mojoo");
    } else {
      setstate("Junaid");
    }
  };
  return (
    <h2>
      <h1>{state}</h1>
      <button type="button" className="btn" onClick={handle}>
        Click Me
      </button>
    </h2>
  );
};

export default UseStateBasics;
