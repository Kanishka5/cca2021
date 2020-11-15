import React, { Component } from "react";

import Logos from "../components/logos";
import PathOfTransition from "../components/pathOfTransition";
import Menu from "../components/menu";
import MembersSection from "../components/membersSection";

import Loader2 from "../components/loader2";
// import GifLoader from '../components/gifLoader';
// import { faCentercode } from "@fortawesome/free-brands-svg-icons";
var OnImagesLoaded = require("react-on-images-loaded");

export default class contactus extends Component {
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
        // onTimeout={this.runTimeoutFunction.bind(this)}
        timeout={200000}
        delay={2000}
      >
        <div>
          {this.state.loading ? <Loader2 /> : null}

          <PathOfTransition style={{ display: this.state.disp }} />
          <Menu style={{ display: this.state.disp }} />

          <Logos style={{ display: this.state.disp }} />

          <MembersSection disp={this.state.disp} />

          {/* <img src="./img/prof/jb.png" style={{ left: '0', display: 'none' }} onLoad={this.handleImageLoaded.bind(this)} /> */}
        </div>
      </OnImagesLoaded>
    );
  }
}
