import React, { Component } from "react";

import Logos from "../components/logos";
import PathOfTransition from "../components/pathOfTransition";
import Menu from "../components/menu";
import CellsSection from "../components/cellsSection";

import Loader2 from "../components/loader2";
var OnImagesLoaded = require("react-on-images-loaded");

export default class cells extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      disp: "none",
    };
  }

  handleImageLoaded() {
    this.setState({
      loading: false,
      disp: "block",
    });
  }

  render() {
    return (
      <OnImagesLoaded
        onLoaded={this.handleImageLoaded.bind(this)}
        timeout={200000}
        delay={2000}
      >
        <div>
          {this.state.loading ? <Loader2 /> : null}

          <PathOfTransition style={{ display: this.state.disp }} />
          <Menu style={{ display: this.state.disp }} />

          <Logos style={{ display: this.state.disp }} />

          <CellsSection disp={this.state.disp} />
        </div>
      </OnImagesLoaded>
    );
  }
}
