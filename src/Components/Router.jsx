import react from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center" }} className="Nav">
        <Link to="/">
          <h1>HOME</h1>
        </Link>
        <Link to="/about">
          <h1>ABOUT</h1>
        </Link>
        <Link to="/contact">
          <h1>CONTACT</h1>
        </Link>
        <Link to="/services">
          <h1>SERVICES</h1>
        </Link>
      </div>

      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route exact path="/Services" component={Services} />
      <Route path="/Services/Service-details/: id" component={Services} />
    </BrowserRouter>
  );
}

export default Router;
