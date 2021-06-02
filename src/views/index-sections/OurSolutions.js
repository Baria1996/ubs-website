import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

function OurSolutions() {
  return (
    <>
      <div className="wrapper">
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Sandwich Panels</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player mb-4 pb-4">
                    <img
                      alt="..."
                      className="img-raised rounded img-fit-index"
                      src={require("assets/img/products/SANDWICH PANELS (5).jpeg")}
                    ></img>
                    <h4 className="title text-black mt-0">
                      EPS Sandwich Panel
                    </h4>
                    {/* <p className="description font-weight-normal">
                      Color steel sandwich panel roof is a common product in the
                      current building materials, with light weight, efficient
                      and environmentally friendly features.
                    </p> */}
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player mb-4 pb-4">
                    <img
                      alt="..."
                      className="img-raised rounded img-fit-index"
                      src={require("assets/img/products/PU2.jpg")}
                    ></img>
                    <h4 className="title text-black mt-0">
                      PU/PIR Sandwich panel
                    </h4>
                    {/* <p className="description font-weight-normal">
                      EPS Sandwich panel is composite two layers pre-painted
                      steel sheets and (EPS) polystyrene hard foams. Used as
                      roof, wall and cold room materials.
                    </p> */}
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player mb-4 pb-4">
                    <img
                      alt="..."
                      className="img-raised rounded img-fit-index"
                      src={require("assets/img/products/rockwool.jpg")}
                    ></img>
                    <h4 className="title text-black mt-0">
                      Rockwool Sandwich panel
                    </h4>
                    {/* <p className="description font-weight-normal">
                      EPS Sandwich panel is kind of board used for enclosing
                      structures, which has good heat insulation and higher
                      intensity, and has Light Guage Weight
                    </p> */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Button className="" color="info" href="our-solutions">
                    View all products
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

export default OurSolutions;
