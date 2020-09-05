import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Booking from "./Booking";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact component={App} />
      <Route path='/booking' exact component={Booking} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
