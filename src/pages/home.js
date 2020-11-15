import React, { Component } from "react";

import Loader from "../components/loader";
import Logos from "../components/logos";
import PathOfTransition from "../components/pathOfTransition";
import Menu from "../components/menu";
import HomeSection from "../components/homeSection";

// import $ from "jquery";

// import { findByLabelText } from "@testing-library/react";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <PathOfTransition />

        <Loader />

        <Menu />

        <Logos />

        <HomeSection />

        {/* <AboutSection /> */}
      </div>
    );
  }
}

export default home;
