import React from "react";
import { render } from "react-dom";

export default function Hi() {
  return <p>Hi. Am working</p>;
}

render(<Hi />, document.getElementById("#app"));
