
import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import { Container } from "semantic-ui-react";

const App = () => (
  <div>
    <Container textAlign='center'>
      Center Alignment
    </Container>

  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);