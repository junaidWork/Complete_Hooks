import React from "react";

const ErrorExample = () => {
  let title = "Junaid";
  const handle = () => {
    title = "Mojoo";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handle}>
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
