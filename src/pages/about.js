import React, { Component } from "react";

import Logos from "../components/logos";
import PathOfTransition from "../components/pathOfTransition";
import Menu from "../components/menu";
import AboutSection from "../components/aboutSection";

// import GifLoader from 'react-gif-loader';
// import { faCentercode } from "@fortawesome/free-brands-svg-icons";
import Loader2 from "../components/loader2";
var OnImagesLoaded = require("react-on-images-loaded");

export default class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      disp: "none",
    };
  }

  componentDidMount() {}

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
        // onTimeout={this.runTimeoutFunction.bind(this)}
        timeout={200000}
        delay={2000}
      >
        <div>
          {this.state.loading ? <Loader2 /> : null}

          <PathOfTransition style={{ display: this.state.disp }} />

          <Menu style={{ display: this.state.disp }} />

          <Logos style={{ display: this.state.disp }} />

          <AboutSection disp={this.state.disp} />

          {/* <img src="./img/prof/jb.png" style={{ left: '0', display: 'none' }} onLoad={this.handleImageLoaded.bind(this)} /> */}
        </div>
      </OnImagesLoaded>
    );
  }
}
