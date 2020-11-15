import React, { Component } from "react";

export default class aboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="about" style={{ display: this.props.disp }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="brk-img-double-wide">
                <div className="brk-img-double-wide__container">
                  <img src="./img/about3.png" className="lazyload" alt="" />
                </div>
                <div className="brk-img-double-wide__container">
                  <img src="./img/about2.jpg" className="lazyload" alt="" />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h1>About CCA!</h1>
              <p>
                CCA, Centre for Cognitive Activities, is the focal point where
                convergence of all technical and scientific endeavours of the
                students materialises. As the technical gymkhana of the
                institute, this club is the revolution which bridges the gap
                between knowledge and application. Bulk of the extracurricular
                activities held in the college all the year round are organised
                by the CCA , with the objective of probing the dark recesses of
                human mind so that the grey cells are stimulated to create ,
                conceptualise and evolve, triggering a rebellion of the new age
                mind against baseless conventions and meek acceptance.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
