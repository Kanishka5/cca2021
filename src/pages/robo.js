import React, { Component } from "react";

import Back_Button from "../components/back_button";

import disableScroll from "disable-scroll";
import Loader2 from "../components/loader2";
import "./css/robo.css";
var OnImagesLoaded = require("react-on-images-loaded");

class robo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      disp: "none",
      imgHeight: 255,
      imgWidth: 275,
      members: [
        {
          name: "ABHISHEK KAMAL",
          post: "HEAD, ROBO CELL",
          imgLocation: "./img/members/final_year/abhishek.jpg",
        },
        {
          name: "AASHREY JAIN",
          post: "HEAD, ROBO CELL",
          imgLocation: "./img/members/final_year/aashrey.jpg",
        },
        {
          name: "ARINDAM MONDAL",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/arindam.jpg",
        },
        {
          name: "HARSH DOKANIA",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/harsh.png",
        },
        {
          name: "PURNIMA",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/purnima.jpg",
        },
        {
          name: "PAWAN KUMAR",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/pavan.jpg",
        },
        {
          name: "SWAPNIL CHATTERJEE",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/swapnil.jpg",
        },
        {
          name: "AYUSH NATH",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/ayush.jpg",
        },
        {
          name: "ASHIS SRIVASTAVA",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/ashis.jpg",
        },
        {
          name: "ANUSHKA AGRAWAL",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/anushka.jpg",
        },
        {
          name: "BANOTH NARESH",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/banoth.jpg",
        },
        {
          name: "PAVANI ARATLA",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/pavani.jpg",
        },
        {
          name: "RIDDHI ROY ",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/ridhi.jpg",
        },
        {
          name: "SHUBHAM BANJARE ",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/subham.jpg",
        },
        {
          name: "SUMIT MISHRA ",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/final_year/unknown.jpg",
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

        <div className="landing" id="roboLanding">
          <div>
            <Back_Button />

            <div className="about_cell">
              <div className="about_back">
                <h1>ROBO CELL</h1>
                <h3>Welcome To The Robotics Cell Of The Club</h3>
              </div>
            </div>
          </div>

          <div id="anim" className="cell_details">
            <h1>Cell details</h1>
            <p className="cellinfo">
              "FIRST THEY IGNORE YOU,THEN THEY LAUGH AT YOU,THEN THEY FIGHT
              YOU,THEN YOU WIN." - GANDHI
              <br />
              Creation of automated machines which mimic and reproduce human
              behaviour, has been the topic of enthusiastic research for ages.
              With the recent ground-breaking advances in electronics science
              and programming technology, research and development in the field
              of producing high- precision, highly efficient robots is the
              latest trend. There is no such field, be it military, commercial
              or domestic where robotics does not find an application. To keep
              pace with the lightning speed at which the rest of the world is
              producing advances in robotics, we at Robo Cell, try to inculcate,
              nurture and support the spirit of robot-making from a rudimentary
              level to expertise. Unlike the many mundane media of imparting
              knowledge, we believe hands-on experience to be the best one to
              acquire experience. Thus, we arrange for workshops on basic
              mechanical/wired robotics, where the art of robot making is taught
              from scratch. In collaboration with guest institutes, we also
              provide professional-level robotics ‘gyaan’. Besides workshops, we
              also prepare events pertaining to hard-core robotics that not only
              serve the competitive spirit in robot-making but also add to the
              fun and trivia quotient. Every year we witness hundreds of
              enthusiastic out-station participants.
            </p>
            <h1 style={{ marginTop: "10vh" }}>WORKSHOPS</h1>
            <p className="cellinfo" style={{ fontSize: "2.5rem" }}>
              Workshops on mechanical/wired robots for beginners wherein
              complete robotics kits are provided and participants are taught
              the art of compiling a bot.A pre-Aarohan autonomous robotics
              workshop, generally in collaboration with professionals from the
              field of robotics,is held.
            </p>
            <h1>ROBOCITY</h1>
            <p className="cellinfo" style={{ fontSize: "2.5rem" }}>
              Stand-alone events (which take place in the odd semester) that
              test your prowess in robotics, based on application skills of the
              workshop knowledge that is held before the event, generally in
              collaboration with professionals.This is generally done to
              enlighten the 1st years about robotics.
            </p>
            <h1>AAROHAN WORKSHOPS</h1>
            <p className="cellinfo" style={{ fontSize: "2.5rem" }}>
              Basic robotic events that are aimed to attract the participation
              of 1st and 2nd year students in order to develop there basic
              skills in making bots. Autonomous robotics events to test your
              skills and knowledge about your bot. Advanced level
              wired/mechanical robotics events.
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

export default robo;
