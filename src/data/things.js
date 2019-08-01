import React from "react";

const things = [
  {
    title: "Returning JSX from a function",
    content: () => (
      <>
        <h1>testing some jsx here</h1>
        <p>ya know what i'm sayin</p>
      </>
    )
  },
  {
    title: "More information",
    content: () => (
      <>
        <p>here is some more information to learn</p>
      </>
    )
  }
];

export default things;
