import React from "react";
import { uniqueId } from "lodash";

// containers
import Lesson from "./Lesson";

const List = ({ things }) => {
  return things.map(thing => <Lesson key={uniqueId()} thing={thing} />);
};

export default List;
