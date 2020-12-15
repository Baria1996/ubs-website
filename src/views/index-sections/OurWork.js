import React from "react";
import ProjectCard from "../../components/ProjectCard";

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
                  <ProjectCard
                    heading="Schoool Projects"
                    description="Access to Schools with high-quality classrooms and safe
                      learning environments is something every parent wants and
                      every child needs."
                    link="our-work"
                    image={require("assets/img/bg6.jpg")}
                  />
                </Col>
                <Col md="4">
                  <ProjectCard
                    heading="Shed Projects"
                    description="We invite you to explore our variety of cost efficient and
                      quality designed structures, built for a lifetime to
                      endure severe weather conditions."
                    link="our-work"
                    image={require("assets/img/bg7.jpg")}
                  />
                </Col>
                <Col md="4">
                  <ProjectCard
                    heading="House Projects"
                    description="We are leading Manufacturers of Prefabricated Houses,
                      Villas, Farm Houses, Rooftop Rooms, Hostels, Cottages,
                      Porta cabin, Liftable Rooms etc."
                    link="our-work"
                    image={require("assets/img/bg8.jpg")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <div className="space-50"></div>
                  <Button className="" color="info" href="our-work">
                    View all projects
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
