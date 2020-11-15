import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import home from "./pages/home";
import wdct from "./pages/wdct";
import core from "./pages/core";
import robo from "./pages/robo";
import rnd from "./pages/rnd";
import ecell from "./pages/ecell";
import Error from "./pages/error";
import about from "./pages/about";
import arhn from "./pages/arhn";
import cells from "./pages/cells";
import contactus from "./pages/contactus";
import members from "./pages/members";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={home} exact />
            <Route path="/about" component={about} />
            <Route path="/arhn" component={arhn} />
            <Route path="/wdct" component={wdct} />
            <Route path="/core" component={core} />
            <Route path="/robo" component={robo} />
            <Route path="/rnd" component={rnd} />
            <Route path="/ecell" component={ecell} />
            <Route path="/cells" component={cells} />
            <Route path="/contactus" component={contactus} />
            <Route path="/members" component={members} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
