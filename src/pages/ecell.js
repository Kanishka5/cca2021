import React, { Component } from "react";

import Back_Button from "../components/back_button";

import disableScroll from "disable-scroll";
import Loader2 from "../components/loader2";
import "./css/ecell.css";
var OnImagesLoaded = require("react-on-images-loaded");

class ecell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      disp: "none",
      imgHeight: 255,
      imgWidth: 275,
      members: [
        {
          name: "NISHANT YADAV",
          post: "HEAD, E-CELL",
          imgLocation: "./img/members/final_year/nishant.jpg",
        },
        {
          name: "TANVI TEJASWINI",
          post: "HEAD, E-CELL",
          imgLocation: "./img/members/final_year/tanvi.jpg",
        },
        {
          name: "JESWANTH SAIGOPI",
          post: "HEAD PUBLICITY",
          imgLocation: "./img/members/final_year/jeswant.jpg",
        },
        {
          name: "DEVESH PAREEK",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/devesh.jpg",
        },
        {
          name: "JOSHI SHIVA TEJA",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/joshi.jpg",
        },
        {
          name: "SNEHA SINGH",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/sneha.png",
        },
        {
          name: "PHALAK TIWARI",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/unknown.jpg",
        },
        {
          name: "HARSHIT RAO",
          post: "EXCUTIVE MEMBER",
          imgLocation: "./img/members/final_year/unknown.jpg",
        },
        {
          name: "ABHIK MAHATO",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/abhik.jpg",
        },
        {
          name: "JOYEETA MANDAL",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/jayeeta.jpg",
        },

        {
          name: "PRAKASH KUMAR HANSDA",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/prakash_k_hansda.jpg",
        },
        {
          name: "HEMANTH KOPPADI",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/rukhwik.jpg",
        },
        {
          name: "SAHARSH JAISWAL",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/saharsh.jpg",
        },
        {
          name: "SNEHA ROY",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/sneha.jpg",
        },
        {
          name: "UTKARSH AGARWAL",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/utkarsh.jpg",
        },
        {
          name: "RUTHWIK PAVULURI",
          post: "SENIOR MEMBER",
          imgLocation: "./img/members/pre_final/unknown.jpg",
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

        <div className="landing" id="ecellLanding">
          <div>
            <Back_Button />

            <div className="about_cell">
              <div className="about_back">
                <h1>Entrepreneurship Cell</h1>
                <h3>Welcome To The Entrepreneurship Cell Of The Club</h3>
              </div>
            </div>
          </div>

          <div id="anim" className="cell_details">
            <h1> Cell details</h1>
            <p className="cellinfo">
              "LOGIC WILL GET YOU FROM A TO B.IMAGINATION WILL GET YOU
              EVERYWHERE"
              <br />- ALBERT EINSTEIN
              <br />
              Rules and norms are there, meant to be followed, for the smooth
              pliability of social wagons. And then there is imagination.
              Imagination is a strange thing. It is wild, it is silly. It is the
              fuel to all great revolutionaries that have taken place in the
              history of the world. Every human is entitled with this special
              gift. To imagine, to be free. Free to make our own choices. Free
              to shape ourselves. As children, imagination comes to us as
              naturally as breathing. As a child, we aren't afraid to become
              Superman or Miss Universe. As grown-up's, we all know what would
              happen if we declared in public that we would like to become
              Superman! Imagination dies a natural death along with childhood.
              An Entrepreneur differs from us in this very aspect. He isn't
              ashamed of his big, silly plans. He isn't afraid to fail or tired
              of getting up. He never stopped imagining. An entrepreneur is a
              leader, a driving force behind semiconscious process of intuition
              and insight, rooted in experience. Every successful entrepreneur
              has been a person who was able to identify the problem and come up
              with a solution to it before someone else did. An entrepreneur
              develops this vision and a strategy of how to implement it.
            </p>
            <h1 style={{ marginTop: "10vh" }}>OUR AIM</h1>
            <p className="cellinfo" style={{ fontSize: "2.5rem" }}>
              We at Entrepreneurship and Innovation Cell, NIT Durgapur, are a
              bunch of people who believe in the potent power of imagination and
              dreams. We strive to nourish the spirit of entrepreneurship among
              our members from the student community and faculty, inspire and
              encourage them to take on entrepreneurial challenges, and assist
              them in their efforts to launch and run business. We will also try
              to foster technical innovation within our campus, and would help
              them in proper incubations of the same.
            </p>
            <h1>OUR OBJECTIVE</h1>
            <p className="cellinfo" style={{ fontSize: "2.5rem" }}>
              Inculcating the spirit of entrepreneurship in students. Developing
              leadership qualities among students. Motivating the students to
              come up with feasible and practical business plans. Helping bridge
              the gap between the industry and academics. Developing a strong
              network of entrepreneurs, venture capitalists, corporate
              executives, EXECUTIVE professionals and individuals who are
              directly or indirectly related to Entrepreneurship. To help NITD
              students and alumni leverage from this network.
            </p>
            <h1>OUR ACTIVITIES</h1>
            <p className="cellinfo" style={{ fontSize: "2.5rem" }}>
              Inviting eminent entrepreneurs and NITD alumni from various
              industry to deliver lectures on entrepreneurship. Organizing inter
              college business plan competitions and have the CEOs of reputed
              organizations and entrepreneurs judging the event. Organizing
              brainstorming sessions to foster entrepreneurship and technical
              innovation Organizing a series of events related to
              entrepreneurship, business, economics and technical innovation in
              techno-management fest ‘Aarohan’, of our college.
            </p>

            <div className="container">
              <div className="heading faculty">
                <h1 style={{ color: "white" }} s>
                  Meet the Members
                </h1>
              </div>

              {this.createList()}
            </div>
          </div>
        </div>
      </OnImagesLoaded>
    );
  }
}

export default ecell;
