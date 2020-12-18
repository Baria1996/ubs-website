import React from "react";
import ProjectCard from "../../components/ProjectCard";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

function OurSolutions() {
  return (
    <>
      <div className="wrapper">
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Our solutions</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <ProjectCard
                    heading="Roof Sandwich Panel"
                    description="Color steel sandwich panel roof is a common 
                    product in the current building materials, with light weight, 
                    efficient and environmentally friendly features."
                    image={require("assets/img/projects/SANDWICH PANELS (13).jpeg")}
                  />
                </Col>
                <Col md="4">
                  <ProjectCard
                    heading="EPS Sandwich panel"
                    description="EPS Sandwich panel is composite two layers 
                    pre-painted steel sheets and (EPS) polystyrene hard foams. 
                    Used as roof, wall and cold room materials."
                    image={require("assets/img/projects/SANDWICH PANELS (3).jpeg")}
                  />
                </Col>
                <Col md="4">
                  <ProjectCard
                    heading="Wall Sandwich Panel"
                    description="EPS Sandwich panel is kind of board used for 
                    enclosing structures, which has good heat insulation and 
                    higher intensity, and has Light Guage Weight"
                    image={require("assets/img/projects/SANDWICH PANELS (5).jpeg")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <div className="space-50"></div>
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
