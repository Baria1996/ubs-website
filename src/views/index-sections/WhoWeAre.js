import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function WhoWeAre() {
  return (
    <>
      <div className="section section-about-us">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Who we are</h2>
              <h5 className="description font-weight-normal">
                We are manufacturers of Sandwich Panels (EPS, PU, Rockwool),
                Prefab Containers, Security Booth, Guard Shacks, Aluminum
                Windows, Aluminum Ventilators, Doors, Flashing (all types),
                Louvers, Ridge and all Prefab Accessories
              </h5>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
              <Col md="6">
                <div
                  className="image-container image-left"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/login.jpg") + ")",
                  }}
                >
                  <p className="blockquote font-weight-normal blockquote-primary">
                    United Business Systems was founded in 1987, by its CEO; Mr
                    khurram Shezad. Its sole aim at that time was to transform
                    paper-based offices into a smart office.
                    <br></br>
                  </p>
                </div>
                <div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </Col>
              <Col md="5">
                <div
                  className="image-container image-right"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg1.jpg") + ")",
                  }}
                ></div>
                <h3>We began from humble beginnings</h3>
                <p className="font-weight-normal">
                  however with time it has transformed into a
                  multi-million-dollar organization. Over time UBS took over and
                  dominated the office equipment and automation related services
                  sector.
                </p>
                <a href="who-we-are" color="primary">
                  Learn more
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default WhoWeAre;
