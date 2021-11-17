import React from "react";
import { useContext } from "react/cjs/react.development";
import { storage } from "../../GlobalContext/GlobalContext";

function Card({img }) {
  const { setText } = useContext(storage);

  const handleClick = () => {
    setText((prev) => ({ ...prev, shirt: `url(${img})` }));
  };
  return (
    <div
      onClick={handleClick}
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
}

export default Card;
