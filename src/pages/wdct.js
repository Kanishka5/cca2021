import React, { Component } from "react";
import Back_Button from "../components/back_button";
import "./css/cells_page.css";
import "./css/wdct.css";
import disableScroll from "disable-scroll";
import Loader2 from "../components/loader2";

var OnImagesLoaded = require("react-on-images-loaded");
var imgPF = "./img/members/pre_final/";
var imgF = "./img/members/final_year/";

class wdct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      disp: "none",
      imgHeight: 255,
      imgWidth: 275,
      members: [
        {
          name: "MAHESH WANOLE",
          post: "HEAD, WDCT",
          imgLocation: imgF + "mahesh.jpg",
        },
        {
          name: "SHAURYA MISRA",
          post: "HEAD, WDCT",
          imgLocation: imgF + "shaurya.jpg",
        },
        {
          name: "KANISHKA NARJARY",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "kanishka.jpg",
        },
        {
          name: "SHRUTIKA NIGAM",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "shrutika.jpg",
        },
        {
          name: "SOUMYA RANJAN ",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "soumya.jpg",
        },
        {
          name: "SUCHI SUBHRA",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "succi.png",
        },
        {
          name: "SWARNENDU BASAK",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "bosok.png",
        },
        {
          name: "SHUBHADEEP CHANDRA",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "subhadeep.jpg",
        },
        {
          name: "SPANDAN PAL",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "spandan.jpg",
        },
        {
          name: "PRITAM PAUL",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "pritam.jpg",
        },
        {
          name: "ASHWINI SURYAWANSHI",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "ashwini.jpg",
        },
        {
          name: "RISHABH UDGATA",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "rishabh.jpg",
        },
        {
          name: "ANUPAM MINZ",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "anupam.jpg",
        },
        {
          name: "PRASUN BHUIN ",
          post: "SENIOR MEMBER",
          imgLocation: imgPF + "prasun.jpg",
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

        <div className="landing" id="wdctLanding">
          <div>
            <Back_Button />

            <div className="about_cell">
              <div className="about_back" style={{ color: "white" }}>
                <h1>Web, Design & Creative Team</h1>
                <h3>The technical cell of the club</h3>
              </div>
            </div>
          </div>
          <div id="anim" className="cell_details">
            <h1>Cell details</h1>
            <p className="cellinfo">
              A congregation of enthusiastic techno-crats, we manage the
              technical aspects of the club, to keep it up and running in the
              cyber front. From designing websites for fests to organising
              workshops for amateurs, we nurture the creative spurt in the club.
            </p>
            <h1 style={{ marginTop: "10%" }}>Web Development Team</h1>
            <p className="cellinfo text">
              {" "}
              This team is responsible for the development, design of the
              various websites associated with CCA, the Aarohan official website
              and various online publication and propaganda of the events of the
              club. It also devises interactive online events, which see about
              3000 online participants, for Aarohan, the Annual Techno-
              Management Fest of CCA.
            </p>
            <h1>Design Team</h1>
            <p className="cellinfo text">
              This creative team is entrusted with the development and designing
              of the various offline propaganda means for CCA as well as for
              Aarohan-The Annual Techno Management Fest of NIT Durgapur. It
              designs the sponsorship and talk show brochures for Aarohan,
              flyers, pamphlets, event posters and flexes for Aarohan.
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

export default wdct;
