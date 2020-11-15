import React, { Component } from "react";

import Back_Button from "../components/back_button";
import "./css/core.css";
import "./css/all_cells_common.css";

import disableScroll from "disable-scroll";
import Loader2 from "../components/loader2";
var OnImagesLoaded = require("react-on-images-loaded");

var imgPF = "./img/members/pre_final/";
var imgF = "./img/members/final_year/";

class core extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      disp: "none",
      imgHeight: 255,
      imgWidth: 275,
      members: [
        {
          name: "SHASHWAT BHATTACHARJEE",
          post: "CONVENER & HEAD",
          imgLocation: imgF + "shashwat.jpg",
        },
        {
          name: "SWARAJ AGARWAL",
          post: "GENERAL SECRETARY",
          imgLocation: imgF + "swaraj.jpg",
        },
        {
          name: "BHAVESH CHANDWANI",
          post: "TREASURER",
          imgLocation: imgF + "bhavesh.jpg",
        },
        {
          name: "SACHIN SINGH",
          post: "HEAD, CORPORATE COMMUNICATIONS",
          imgLocation: imgF + "sachin.jpg",
        },
        {
          name: "RAMAN KAPRI",
          post: "HEAD, CORPORATE COMMUNICATIONS",
          imgLocation: imgF + "raman.jpg",
        },
        {
          name: "DARSHAN JHA",
          post: "HEAD, OPERATIONS",
          imgLocation: imgF + "darshan.jpg",
        },
        {
          name: "SILKY AGARWAL",
          post: "HEAD, OPERATIONS",
          imgLocation: imgF + "silky.jpg",
        },
        {
          name: "VINAMRA SINGH PATEL",
          post: "HEAD, ATH",
          imgLocation: imgF + "vinamra.jpg",
        },
        {
          name: "SHYAM SUNDAR MURMU",
          post: "HEAD, ATH",
          imgLocation: imgF + "shyamsundar.jpg",
        },
        {
          name: "SHREYA MISHRA",
          post: "HEAD, PUBLICITY",
          imgLocation: imgF + "shreya.jpg",
        },
        {
          name: "VIVEK JHA",
          post: "DEPUTY TREASURER",
          imgLocation: imgF + "vivek.jpg",
        },
        {
          name: "SHREOSHREE ADHIKARY",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "shreoshree.jpg",
        },
        {
          name: "UNMISH BAG",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "unmish.jpg",
        },

        {
          name: "PRIYANSHU PANDEY",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "priyanshu.jpg",
        },
        {
          name: "TAMENDRA KUMAR SAHOO",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "tamendra.jpg",
        },
        {
          name: "RAJENDRA NATH MURMU",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "rajendra.jpg",
        },
        {
          name: "DEVAM KAKOTY",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "devam.jpg",
        },

        {
          name: "SURAJ KUMAR SAHOO",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "suraj.jpg",
        },
        {
          name: "SIMHAVISHNU RAM PRASAD",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "simha.jpg",
        },
        {
          name: "SANJANA ROY",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "sanjana.jpg",
        },
        {
          name: "SRAVAN PERISHETTY",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "sravan.jpg",
        },
      ],
    };
    disableScroll.on();
  }

  handleImageLoaded() {
    this.setState({
      loading: false,
      disp: "block",
    });
    disableScroll.off();
  }

  createList() {
    var i,
      j,
      k = 0,
      row = [],
      col = [];
    for (i = 0; i < Math.floor(this.state.members.length / 3); i++) {
      col.push(
        <div className="col-lg-3 col-lg-offset-2  col-sm-6">
          <div className="membercard">
            <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
              <figure>
                <img
                  src={this.state.members[k].imgLocation}
                  alt=""
                  style={{
                    height: this.state.imgHeight,
                    width: this.state.imgWidth,
                  }}
                />
                <svg viewBox="0 0 275 414" preserveAspectRatio="none">
                  <path d="M 0,414 275,414 275,350 0,350 z" />
                </svg>
                <figcaption>
                  <h1>{this.state.members[k].name}</h1>
                  <p>{this.state.members[k].post}</p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      );
      k++;
      for (j = 0; j < 2; j++) {
        col.push(
          <div className="col-lg-3 col-sm-6">
            <div className="membercard">
              <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
                <figure>
                  <img
                    src={this.state.members[k].imgLocation}
                    alt=""
                    style={{
                      height: this.state.imgHeight,
                      width: this.state.imgWidth,
                    }}
                  />
                  <svg viewBox="0 0 275 414" preserveAspectRatio="none">
                    <path d="M 0,414 275,414 275,350 0,350 z" />
                  </svg>
                  <figcaption>
                    <h1>{this.state.members[k].name}</h1>
                    <p>{this.state.members[k].post}</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        );
        k++;
      }
      row.push(<div className="row no-gutter">{col}</div>);
      col = [];
    }

    /* IF the number of members is a multiple of 3 comment out this col.push part otherwise keep it */
    if (this.state.members.length % 3 !== 0) {
      col.push(
        <div className="col-lg-3 col-lg-offset-2 col-sm-6">
          <div className="membercard">
            <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
              <figure>
                <img
                  src={this.state.members[k].imgLocation}
                  alt=""
                  style={{
                    height: this.state.imgHeight,
                    width: this.state.imgWidth,
                  }}
                />
                <svg viewBox="0 0 275 414" preserveAspectRatio="none">
                  <path d="M 0,414 275,414 275,350 0,350 z" />
                </svg>
                <figcaption>
                  <h1>{this.state.members[k].name}</h1>
                  <p>{this.state.members[k].post}</p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      );
    }

    k++;
    for (i = 1; i < this.state.members.length % 3; i++) {
      col.push(
        <div className="col-lg-3  col-sm-6">
          <div className="membercard">
            <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
              <figure>
                <img
                  src={this.state.members[k].imgLocation}
                  alt=""
                  style={{
                    height: this.state.imgHeight,
                    width: this.state.imgWidth,
                  }}
                />
                <svg viewBox="0 0 275 414" preserveAspectRatio="none">
                  <path d="M 0,414 275,414 275,350 0,350 z" />
                </svg>
                <figcaption>
                  <h1>{this.state.members[k].name}</h1>
                  <p>{this.state.members[k].post}</p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      );
      k++;
    }
    row.push(<div className="row no-gutter">{col}</div>);
    col = [];

    return row;
  }

  render() {
    return (
      <OnImagesLoaded
        onLoaded={this.handleImageLoaded.bind(this)}
        timeout={200000}
        delay={2000}
      >
        {this.state.loading ? <Loader2 /> : null}
        <div className="landing" id="coreLanding">
          <div>
            <Back_Button />

            <div className="about_cell">
              <div className="about_back">
                <h1>Core Cell </h1>
                <h3>Welcome To The Core Cell Of The Club</h3>
              </div>
            </div>
          </div>
          <div id="anim" className="cell_details">
            <h1>Cell details</h1>
            <p className="cellinfo">
              "Management is doing things right; Leadership is doing right
              things."- Peter Drucker Motivating, along with leading is a task
              well known by these robust people. Engaged throughout the year,
              working behind the scenes,the core cell excels in cooperating with
              the other cells to get things done.
            </p>
            <h1 style={{ marginTop: "10vh" }}>Aim</h1>
            <p className="cellinfo" style={{ fontSize: "2.5rem" }}>
              Our aim is to carry out the smooth functioning of the club. Filled
              with well-disciplined people we try to get out the best from
              everyone indulged in the club's activities.
            </p>
            <h1>RESPONSIBILITIES</h1>
            <p className="cellinfo" style={{ fontSize: "2.5rem" }}>
              1.Overseeing the activities of the club.
              <br />
              2.Arranging as well as conducting various technical and
              managements workshops/events round the clock throughout the year
              inside and outside the college.
              <br />
              3.Arranging for sponsorships and monetary aids for the club and
              the annual techno-management fest of NITD-'AAROHAN'.
              <br />
              4.Publicising our events.
            </p>

            <div className="container">
              <div className="heading faculty">
                <h1 style={{ color: "white" }}>Meet the Members</h1>
              </div>
            </div>
            {this.createList()}
          </div>
        </div>
      </OnImagesLoaded>
    );
  }
}

export default core;
