import React, { Component } from "react";

class back_button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="back_button">
        <a href="/cells">
          <div className="fas fa-arrow-left" style={{ color: "white" }}></div>
        </a>
      </div>
    );
  }
}

export default back_button;
