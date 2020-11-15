import React, { Component } from "react";
import { figure } from "react-bootstrap";

export default class cellsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="cells" style={{ display: this.props.disp }}>
        <div className="text">
          <h1>Our Cells</h1>
          <p>
            CCA is divided into five cells which work together in collaboration
            with each other. We believe in the fact that togetherness yields
            excellent results. These cells basically function to cover every
            aspect required for the success of an organisation.
          </p>
        </div>
        <div className="cellBack"></div>
        <div className="cell_thumbnails conatainer">
          <div className="row">
            <span id="cell_name"></span>
            <div className="cells" id="core">
              <p>
                <a href="/core">
                  <figure className="effect-steve">
                    <img src="./img/cells/core.png" alt="core" />
                  </figure>
                </a>
              </p>
              <h1 className="cellTag">Core cell</h1>
            </div>
            <div className="cells" id="wdct">
              <p>
                <a href="/wdct">
                  <figure className="effect-steve">
                    <img src="./img/cells/wdct.png" alt="wdct" />
                  </figure>
                </a>
              </p>
              <h1 className="cellTag">WDCT</h1>
            </div>
            <div className="cells" id="robo">
              <p>
                <a href="/robo">
                  <figure className="effect-steve">
                    <img src="./img/cells/robo.png" alt="robo" />
                  </figure>
                </a>
              </p>
              <h1 className="cellTag">Robo cell</h1>
            </div>
            <div className="cells" id="rndi">
              <p>
                <a href="/rnd">
                  <figure className="effect-steve">
                    <img src="./img/cells/rndi.png" alt="rnd" />
                  </figure>
                </a>
              </p>
              <h1 className="cellTag">R&D cell</h1>
            </div>
            <div className="cells" id="ecell">
              <a href="/ecell">
                <p>
                  <figure className="effect-steve">
                    <img src="./img/cells/ecell.png" alt="ecell" />
                  </figure>
                </p>
              </a>

              <h1 className="cellTag">E cell</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
