import React from "react";

const Title = ({ text, onClick }) => {
  return (
    <h1 onClick={onClick} className="noselect title">
      {text}
    </h1>
  );
};

export default Title;
