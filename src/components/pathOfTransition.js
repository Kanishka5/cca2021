import React, { Component } from "react";

export default class POT extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id="loader"
        className="pageload-overlay"
        data-opening="M 40 -21.875 C 11.356078 -21.875 -11.875 1.3560784 -11.875 30 C -11.875 58.643922 11.356078 81.875 40 81.875 C 68.643922 81.875 91.875 58.643922 91.875 30 C 91.875 1.3560784 68.643922 -21.875 40 -21.875 Z"
      >
        <svg
          xmlns="https//www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 80 60"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M40,30 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 Z" />
        </svg>
      </div>
    );
  }
}
