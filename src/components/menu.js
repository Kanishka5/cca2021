import React, { Component } from "react";
import "./css/menu.css";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee, } from '@fortawesome/free-solid-svg-icons'

var fbURL = "https://www.facebook.com/ccanitd.in";
var ytURL = "https://www.youtube.com/user/arhnNITD";
var igURL = "https://www.instagram.com/cca.nitd/";
var twURL = "https://twitter.com/aarohan_nitdgp";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: 0,
    };
  }

  componentDidMount() {
    $("#icon").click(function () {
      $(".sidebar").toggleClass("hidden");
    });
  }

  render() {
    return (
      <div>
        {/* Menu Icon */}
        <div className="menuIcon">
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>

        {/* mobile menu */}
        <div className="overlay-menu">
          <ul id="menu">
            <li>
              <a href="/"> HOME </a>
            </li>
            <li>
              <a href="/about"> ABOUT </a>
            </li>
            <li>
              <a href="/arhn"> AAROHAN </a>
            </li>
            <li>
              <a href="/cells"> CELLS </a>
            </li>
            <li>
              <a href="/members"> MEMBERS </a>
            </li>
            <li>
              <a href="/contactus"> CONTACT US </a>
            </li>
            <li>
              <p>
                <a href={fbURL}>
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    style={{ fontSize: 20 }}
                  />
                </a>
              </p>
              <p>
                <a href={ytURL}>
                  <FontAwesomeIcon icon={faYoutube} style={{ fontSize: 20 }} />
                </a>
              </p>
              <p>
                <a href={igURL}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ fontSize: 20 }}
                  />
                </a>
              </p>
              <p>
                <a href={twURL}>
                  <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 20 }} />
                </a>
              </p>
            </li>
          </ul>
        </div>

        <p
          id="icon"
          className="positionFixing"
          style={{
            top: "2.1%",

            left: 27,
            zIndex: 56,
          }}
        >
          <a id="menu_icon" style={{ color: "#6b6a6a" }}>
            <i className="fa fa-align-left" style={{ fontSize: 20 }}></i>
          </a>
        </p>

        {/* sidebar sections title */}
        <div className="sidebar">
          <p>
            <a href="/about"> ABOUT </a>
          </p>
          <p>
            <a href="/arhn"> AAROHAN </a>
          </p>
          <p>
            <a href="/cells"> CELLS </a>
          </p>
          <p>
            <a href="/members"> MEMBERS </a>
          </p>
          <p>
            <a href="/contactus"> CONTACT US </a>
          </p>
          <div className="icons">
            <p>
              <a target="_blank" href={fbURL}>
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="customStyle"
                />
              </a>
            </p>
            <p>
              <a target="_blank" href={ytURL}>
                <FontAwesomeIcon icon={faYoutube} className="customStyle" />
              </a>
            </p>
            <p>
              <a target="_blank" href={igURL}>
                <FontAwesomeIcon icon={faInstagram} className="customStyle" />
              </a>
            </p>
            <p>
              <a target="_blank" href={twURL}>
                <FontAwesomeIcon icon={faTwitter} className="customStyle" />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
