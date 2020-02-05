import React from "react";
import { BrowserRouter, Route,NavLink } from "react-router-dom";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";

import "./App.css";

//TODO Pasar los style a .CSS

const NavActive = {
  color: '#5B9BD2'
};

const Navegation = () => (
  <nav className="linkStyle">
    <NavLink  activeStyle={NavActive} exact  to="/">
      Page 1
    </NavLink>

    <NavLink activeStyle={NavActive}  to="/Page2">
      Page 2
    </NavLink>
  </nav>
);



const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route path="/" exact component={Page1} />
      <Route path="/page2" component={Page2} />
    </BrowserRouter>
  );
};

export default App;
