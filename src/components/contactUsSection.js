import React, { Component } from "react";

export default class cellsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id="contact"
        onmousewheel="myFunction()"
        style={{ display: this.props.disp }}
      >
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            <b>Shashwat Bhattacharjee</b> (Convener & Head)
            <br />
            <a
              href="tel:9163322604"
              style={{ textDecoration: "none", color: "black" }}
            >
              +91 91633-22604
            </a>
            <br />
            <a
              href="mailto:shashwat@ccanitd.in"
              style={{ textDecoration: "none", color: "black" }}
            >
              shashwat@ccanitd.in
            </a>
            <br />
            <br />
            <b>Swaraj Agrawal</b> (General Secretary)
            <br />
            <a
              href="tel:9407256919"
              style={{ textDecoration: "none", color: "black" }}
            >
              +91 94072-56919
            </a>
            <br />
            <a
              href="mailto:swaraj@ccanitd.in"
              style={{ textDecoration: "none", color: "black" }}
            >
              swaraj@ccanitd.in
            </a>
            <br />
            <br />
            <b>Bhavesh Chandwani</b> (Treasurer)
            <br />
            <a
              href="tel:7255722096"
              style={{ textDecoration: "none", color: "black" }}
            >
              +91 72557-22096
            </a>
            <br />
            <a
              href="mailto:bhavesh@ccanitd.in"
              style={{ textDecoration: "none", color: "black" }}
            >
              bhavesh@ccanitd.in
            </a>
          </p>
        </div>
        <footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Credits: Web, Design & Creative Team, CCA. 2019-2020. All Rights
          Reserved.
        </footer>
      </div>
    );
  }
}
