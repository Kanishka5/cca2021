import React, { Component } from "react";

// import $ from "jquery";
// import '../pages/js/min/members';

export default class logos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="cca">
          <a href="/">
            {" "}
            <img id="logoImg" src="img/cca-app-icon.png" alt="" />{" "}
          </a>
        </div>
        <div className="arhn">
          <a href="https://arhn.co.in/">
            <img src="img/arhnlogo.png" alt="arhn" />
            <p>Visit Aarohan 2020</p>
          </a>
        </div>
      </div>
    );
  }
}
