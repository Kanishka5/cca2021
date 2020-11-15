import React, { Component } from "react";

import Back_Button from "../components/back_button";

import disableScroll from "disable-scroll";
import Loader2 from "../components/loader2";
import "./css/rnd.css";
var OnImagesLoaded = require("react-on-images-loaded");

class rnd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      disp: "none",
      imgHeight: 255,
      imgWidth: 275,
      members: [
        {
          name: "ADIL HOSSAIN",
          post: "HEAD, RnD CELL",
          imgLocation: "./img/members/final_year/Adil.jpg",
        },
        {
          name: "SNIGHDA MAHATO",
          post: "HEAD, RnD CELL",
          imgLocation: "./img/members/final_year/snigdha.jpg",
        },
        {
          name: "SUGANA RAM",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/sugnaram.jpg",
        },
        {
          name: "VIKAS SINGH",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/vikas.png",
        },
        {
          name: "VIKRAM RAYAVARAPU",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/vikram.png",
        },
        {
          name: "VRUSHALI SATPUTE",
          post: "EXECUTIVE MEMBER",
          imgLocation: "./img/members/final_year/vrushali.png",
        },
        {
          name: "ANKIT JAISWAL",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/ankit.jpg",
        },
        {
          name: "P.VENKATA SAI PRIYATHAM",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/pv_priyatham.jpg",
        },
        {
          name: "K.SHARATH KUMAR REDDY",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/ksk_reddy.jpg",
        },
        {
          name: "YASH VISHNOI",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/yash.jpg",
        },
        {
          name: "PALLAVI RANJAN",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/pallavi.jpg",
        },
        {
          name: "ANKITA BHATTACHARYA",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/ankita.jpg",
        },
        {
          name: "MOUMITA BASU",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/moumita.jpg",
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
        <div className="col-sm-3 col-md-offset-2">
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
          <div className="col-sm-3">
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

    if (this.state.members.length % 3 !== 0)
      col.push(
        <div className="col-sm-3 col-md-offset-2">
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
    for (i = 1; i < this.state.members.length % 3; i++) {
      col.push(
        <div className="col-sm-3">
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

        <div className="landing" id="rndLanding">
          <div>
            <Back_Button />

            <div className="about_cell">
              <div className="about_back">
                <h1>Research & Development Cell</h1>
                <h3>
                  Welcome To The Research Developement and Innovation Cell Of
                  The Club
                </h3>
              </div>
            </div>
          </div>

          <div id="anim" className="cell_details">
            <h1>Cell details</h1>
            <p className="cellinfo">
              "If we knew what it was we were doing, it would not be called
              research, would it? "<br />- Albert Einstein
              <br />
            </p>
            <h1 style={{ marginTop: "10vh" }}></h1>
            <p className="cellinfo" style={{ fontSize: "2.5rem" }}>
              Write from the begining of the dark age alot of ground breaking
              discoveries were made by man. There is no field in which research
              is not done. Research and Development (R&D) flourishes where young
              minds and experienced faculties work synergistically. R&D Cell has
              been established to promote and monitor the research Programs of
              the institute. The cell administers all the research Programs of
              the university by monitoring and coordinating the research
              Programs.The Research and Development Cell aims to nurture
              research culture in the College by promoting research in newly
              emerging and challenging areas of Engineering, Technology, Science
              and Humanities. Faculty and students have been encouraged to be
              creative, since it is the creative aspect that induces newer
              thinking. Lectures and demonstration are made for students to
              kindle their spirit of creativity by our own faculty and other
              experts along with paper presentation and workshop.
            </p>

            <div className="container">
              <div className="heading faculty">
                <h1 style={{ color: "white" }}>Meet the Members</h1>
              </div>
              {this.createList()}
            </div>
          </div>
        </div>
      </OnImagesLoaded>
    );
  }
}

export default rnd;
