import React, { Component } from "react";

export default class homeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="home">
        <div className="inner_home">
          <h1>Centre for Cognitive Activities</h1>
          <p>
            CCA, Centre for Cognitive Activities, is the focal point where
            convergence of all technical and scientific endeavours of the
            students materialise. As the technical gymkhana of the institute,
            this club is the revolution which bridges the gap between knowledge
            and application. Bulk of the extracurricular activities held in the
            college all the year round are organised by the CCA , with the
            objective of probing the dark recesses of human mind so that the
            grey cells are stimulated to create , conceptualise and evolve,
            triggering a rebellion of the new age mind against baseless
            conventions and meek acceptance.
          </p>
        </div>
      </div>
    );
  }
}
