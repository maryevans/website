import { Button } from "@fluentui/react";
import React from "react";
import ReactDOM from "react-dom";

const App = () => (
    <h1>
        My React and TypeScript App! {" "}
        {new Date().toLocaleDateString()}
        <button>button</button>
        <Button>Wow</Button>
    </h1>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);