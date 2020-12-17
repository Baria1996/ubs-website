import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import PrimaryNavbar from "components/Navbars/PrimaryNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Tabs from "components/Tabs.js";

function WhatWeDo() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <PrimaryNavbar />
      <div className="wrapper">
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                <div className="space-50"></div>
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12">
                <h2 className="title text-left mt-0 pt-0">What we do</h2>
                <p className="text-muted font-weight-normal">
                  With progression of time UBS business group diversified into
                  the many other sectors primarily; Compressed Natural Gas
                  retail, General Trading, Construction, Manufacturing, Textile
                  Merchandising,Real Estate, Business Consultancy, and Overseas
                  Investment. Our services include:
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Mass Housing
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Infrastructure
                  Development
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> High Rise
                  Buildings
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Civil Construction
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Pre-Engineered &
                  Pre-Fab Buildings
                </p>
              </Col>
              <Col lg="6" md="12">
                <img
                  className="img-raised rounded mt-4"
                  src={require("assets/img/projects/Balakot Housing (2).png")}
                  alt="..."
                />
              </Col>
            </Row>
          </Container>
        </div>
        <Tabs />
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                {/* <h3 className="title text-primary font-weight-normal mt-0 pt-0">
                  Work Flow
                </h3> */}
              </Col>
            </Row>
            <Row>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/consultation.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">
                    Consultation
                  </h6>
                </div>
              </Col>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/design.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">Designing</h6>
                </div>
              </Col>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/collaboration.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">Management</h6>
                </div>
              </Col>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/conveyor.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">
                    Manufacturing
                  </h6>
                </div>
              </Col>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/crane.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">
                    Construction
                  </h6>
                </div>
              </Col>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/support.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">Support</h6>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default WhatWeDo;
