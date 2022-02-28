import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const record = useRef(null);
  const divrecord = useRef(null);

  const handleSubmit = (e) => {
    console.log(record.current.value);
    console.log(divrecord.current);
    e.preventDefault();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={record} />
          <button type="submit">ADD</button>
        </div>
      </form>
      <div ref={divrecord}>Junaid</div>
    </>
  );
};

export default UseRefBasics;
