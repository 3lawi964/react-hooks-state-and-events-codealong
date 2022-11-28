import React, { useState } from "react";

function Toggle() {
  const [taggle, settaggle] = useState(false);
  const handleTaggle = () => {
    settaggle(!taggle);
  };
  return <button onClick={handleTaggle}>{taggle ? "ON" : "FALSE"}</button>;
}

export default Toggle;
