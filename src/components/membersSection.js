import React, { Component } from "react";
import "./css/memberSection.css";

// const members=[
//     {
//         "name":"abc",
//         "post":"Head",
//         "imgLocation":"..img/members/ddsd"
//     },
// ]
// post, name, imgLocation
var imgPF = "./img/members/pre_final/";
var imgF = "./img/members/final_year/";

// if (window.innerWidth > 800)
// {
//     var styleImg={
//         img:{
//             left:'-3.5vw',
//         }
//     }
//     console.log("^^^^^^^");
// }

export default class cellsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          name: "JESWANT SAIGOPI",
          post: "HEAD, PUBLICITY",
          imgLocation: imgF + "jeswant.jpg",
        },
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
          name: "AASHREY JAIN",
          post: "HEAD, ROBOCELL",
          imgLocation: imgF + "aashrey.jpg",
        },
        {
          name: "ABHISHEK KAMAL",
          post: "HEAD, ROBOCELL",
          imgLocation: imgF + "abhishek.jpg",
        },
        {
          name: "NISHANT YADAV",
          post: "HEAD, E-CELL",
          imgLocation: imgF + "nishant.jpg",
        },
        {
          name: "TANVI TEJASWINI",
          post: "HEAD, E-CELL",
          imgLocation: imgF + "tanvi.jpg",
        },
        {
          name: "ADIL HOSSAIN",
          post: "HEAD, RnD CELL",
          imgLocation: imgF + "Adil.jpg",
        },
        {
          name: "SNIGDHA MAHATO",
          post: "HEAD, RnD CELL",
          imgLocation: imgF + "snigdha.jpg",
        },
        {
          name: "ARINDAM MANDAL",
          post: "ROBOCON COORDINATOR",
          imgLocation: imgF + "arindam.jpg",
        },
        {
          name: "VIVEK JHA",
          post: "DEPUTY TREASURER",
          imgLocation: imgF + "vivek.jpg",
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
          name: "HARSH DOKANIA",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "harsh.png",
        },
        {
          name: "PAWAN KUMAR",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "pavan.jpg",
        },
        {
          name: "PURNIMA",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "purnima.jpg",
        },
        {
          name: "SWAPNIL CHATTERJEE",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "swapnil.jpg",
        },
        {
          name: "JOSHI SHIVA TEJA",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "joshi.jpg",
        },
        {
          name: "JESWANTH SAIGOPI",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "jeswant.jpg",
        },
        {
          name: "SNEHA SINGH",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "sneha.png",
        },
        {
          name: "PHALAK TIWARI",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "phalak.jpg",
        },
        {
          name: "HARSHIT RAO",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "harshit.jpg",
        },
        {
          name: "DEVESH PAREEK",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "devesh.jpg",
        },
        {
          name: "VRUSHALI SATPUTE",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "vrushali.png",
        },
        {
          name: "VIKRAM RAYAVARAPU",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "vikram.png",
        },
        {
          name: "SUGANA RAM",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "sugnaram.jpg",
        },
        {
          name: "VIKAS SINGH",
          post: "EXECUTIVE MEMBER",
          imgLocation: imgF + "vikas.png",
        },
      ],
    };
  }
  createList() {
    var i,
      j,
      k = 0,
      row = [],
      col = [];
    for (i = 0; i < Math.floor(this.state.members.length / 5); i++) {
      col.push(
        <div class="col-sm-2 col-md-offset-1">
          <div class="membercard MemberMembercard">
            <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
              <figure>
                <img
                  src={this.state.members[k].imgLocation}
                  alt=""
                  style={{ width: this.state.imgWidth }}
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
      for (j = 0; j < 4; j++) {
        col.push(
          <div class="col-sm-2">
            <div class="membercard MemberMembercard">
              <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
                <figure>
                  <img
                    src={this.state.members[k].imgLocation}
                    alt=""
                    style={{ width: this.state.imgWidth }}
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
      row.push(<div class="row no-gutter">{col}</div>);
      col = [];
    }

    /* If the number of members is a multiple of 5 then remove this col.push part */
    if (this.state.members.length % 5 !== 0) {
      col.push(
        <div class="col-sm-2 col-md-offset-1">
          <div class="membercard MemberMembercard">
            <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
              <figure>
                <img
                  src={this.state.members[k].imgLocation}
                  alt=""
                  style={{ width: this.state.imgWidth }}
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
    for (i = 1; i < this.state.members.length % 5; i++) {
      col.push(
        <div class="col-sm-2">
          <div class="membercard MemberMembercard">
            <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
              <figure>
                <img
                  src={this.state.members[k].imgLocation}
                  alt=""
                  style={{ width: this.state.imgWidth }}
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
    row.push(<div class="row no-gutter">{col}</div>);
    col = [];

    return row;
  }

  render() {
    return (
      <div id="team" style={{ display: this.props.disp }}>
        <div class="container">
          <div class="heading member">
            <h1 style={{ fontSize: 36 }}>Meet the Team</h1>
          </div>

          {this.createList()}
        </div>

        <div class="container">
          <div class="heading faculty">
            <h1>Meet the Faculty Advisors</h1>
          </div>
          <div class="row no-gutter">
            <div class="col-lg-3 col-lg-offset-2 col-sm-6">
              <div class="membercard MemberMembercard">
                <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
                  <figure>
                    <img src="./img/prof/nkr.png" style={{ left: "0" }} />
                    <svg viewBox="0 0 275 414" preserveAspectRatio="none">
                      <path d="M 0,414 275,414 275,350 0,350 z" />
                    </svg>
                    <figcaption>
                      <h1>PROF. N.K. ROY</h1>
                      <p>CHIEF FACULTY ADVISOR</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="membercard MemberMembercard">
                <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
                  <figure>
                    <img src="./img/prof/pk.png" style={{ left: "0" }} />
                    <svg viewBox="0 0 275 414" preserveAspectRatio="none">
                      <path d="M 0,414 275,414 275,350 0,350 z" />
                    </svg>
                    <figcaption>
                      <h1>PROF. P. KUMBHAKAR</h1>
                      <p>CHIEF FACULTY ADVISOR</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="membercard MemberMembercard">
                <a data-path-hover="M 0,414 275,414 275,240 0,280 z">
                  <figure>
                    <img src="./img/prof/jb.png" style={{ left: "0" }} />
                    <svg viewBox="0 0 275 414" preserveAspectRatio="none">
                      <path d="M 0,414 275,414 275,350 0,350 z" />
                    </svg>
                    <figcaption>
                      <h1 style={{ bottom: "-2px" }}>DR. JOYDEEP BANNERJEE</h1>
                      <p>CHIEF FACULTY ADVISOR</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
