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
                    description="Access to Schools with high-quality classrooms and safe
                      learning environments is something every parent wants and
                      every child needs."
                    image={require("assets/img/projects/SANDWICH PANELS (13).jpeg")}
                  />
                </Col>
                <Col md="4">
                  <ProjectCard
                    heading="Trapezoidal Corrugated Sheets"
                    description="We invite you to explore our variety of cost efficient and
                      quality designed structures, built for a lifetime to
                      endure severe weather conditions."
                    image={require("assets/img/projects/SANDWICH PANELS (3).jpeg")}
                  />
                </Col>
                <Col md="4">
                  <ProjectCard
                    heading="Wall Sandwich Panel"
                    description="We are leading Manufacturers of Prefabricated Houses,
                      Villas, Farm Houses, Rooftop Rooms, Hostels, Cottages,
                      Porta cabin, Liftable Rooms etc."
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
