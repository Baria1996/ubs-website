import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function OurWork() {
  return (
    <>
      <div className="wrapper">
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Our work</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/bg7.jpg")}
                    ></img>
                    <h4 className="title">Schoool Projects</h4>
                    {/* <p className="category text-info">info</p> */}
                    <p className="description font-weight-normal">
                      Access to Schools with high-quality classrooms and safe
                      learning environments is something every parent wants and
                      every child needs.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.facebook.com/UBSBusinessGroup/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/bg5.jpg")}
                    ></img>
                    <h4 className="title">Shed Projects</h4>
                    {/* <p className="category text-info">info</p> */}
                    <p className="description font-weight-normal">
                      We invite you to explore our variety of cost efficient and
                      quality designed structures, built for a lifetime to
                      endure severe weather conditions.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.facebook.com/UBSBusinessGroup/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/bg6.jpg")}
                    ></img>
                    <h4 className="title">House Projects</h4>
                    {/* <p className="category text-info">info</p> */}
                    <p className="description font-weight-normal">
                      We are leading Manufacturers of Prefabricated Houses,
                      Villas, Farm Houses, Rooftop Rooms, Hostels, Cottages,
                      Porta cabin, Liftable Rooms etc.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.facebook.com/UBSBusinessGroup/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <div className="space-50"></div>
                  <Button
                    className=""
                    color="info"
                    href="our-work"
                    outline
                    target="_blank"
                  >
                    View More
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default OurWork;
