import React from "react";

const Card = ({ children, className }) => (
  <div className={`${className} card`}>{children}</div>
);

export default Card;
