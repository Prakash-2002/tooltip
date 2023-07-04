import React from "react";
import ReactDOM from "react-dom";

import Tooltip from "./Tooltip";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Tooltip text="Simple tooltip">
    <button>Hover me!</button>
  </Tooltip>,
  rootElement
);
