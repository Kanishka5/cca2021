import React, { Component } from "react";
import { Container, iframe, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default class arhnSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="arhn" style={{ display: this.props.disp }}>
        <img src="/img/arhn.png" alt="" />
        <Container>
          <Row>
            <Col sm={6}>
              <h1>Aarohan - The Annual Techno-Management Fest</h1>
              <p>
                Aarohan means to conquer greater heights. As the annual Techno
                Management festival of NIT Durgapur, it dares one to elevate his
                limits and to defy one's capacity. This year, yet again, they
                celebrate technology with a hope to explore that minuscule thing
                that always eludes us - perfection. Aarohan hosts a galaxy of
                events aimed at boosting the technological and managerial skills
                inherent in today's youth and providing them with an opportunity
                to showcase their innovative ideas and thoughts.
                <br />
              </p>
            </Col>
            <Col sm={6}>
              <div className="brk-img-double-wide-nohover">
                <div className="brk-img-double-wide__container">
                  <img src="./img/fest2.jpg" className="lazyload" alt="" />
                </div>
                <div className="embed-responsive embed-responsive-16by9 brk-img-double-wide__container">
                  {/* iframe not working to be reviewed */}
                  <iframe
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/NbAaWXNoIwE"
                    title="arhn"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
