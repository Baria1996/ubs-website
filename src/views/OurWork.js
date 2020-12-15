import React from "react";
import ProjectCard from "../components/ProjectCard";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import PrimaryNavbar from "components/Navbars/PrimaryNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function OurWork() {
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
            <h3 className="title">Our work</h3>
            <p className="text-muted font-weight-normal">
              UBS team is dedicated to delivering expertly Prefab building
              solutions and getting the job done fast and without fuss! It’s up
              to you to make the right choice of a construction method for your
              project that ensures timely delivery, assured quality and no
              escalation in agreed costs — and we are here to help you make that
              decision easy!
            </p>
            <div className="section">
              <Row>
                <Col md="6">
                  <ProjectCard
                    heading="House Projects"
                    link="project-details"
                    image={require("assets/img/projects-temp/House.png")}
                  />
                </Col>
                <Col md="6">
                  <ProjectCard
                    heading="Office Projects"
                    link="project-details"
                    image={require("assets/img/projects-temp/Office.png")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <ProjectCard
                    heading="Schoool Projects"
                    link="project-details"
                    image={require("assets/img/projects-temp/Schoool.png")}
                  />
                </Col>
                <Col md="6">
                  <ProjectCard
                    heading="The Kartarpur Corridor"
                    link="project-details"
                    image={require("assets/img/projects-temp/Kartarpur.png")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <ProjectCard
                    heading="Sukhi Kinari Hydropower Project"
                    link="project-details"
                    image={require("assets/img/projects-temp/Sukhi.png")}
                  />
                </Col>
                <Col md="6">
                  <ProjectCard
                    heading="Andritz Hydropower Gulpur, Kotli AJK"
                    link="project-details"
                    image={require("assets/img/projects-temp/Andritz.png")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <ProjectCard
                    heading="Filtration Plants at Lahore"
                    link="project-details"
                    image={require("assets/img/projects-temp/lahore.png")}
                  />
                </Col>
                <Col md="6">
                  <ProjectCard
                    heading="Warehouse Projects"
                    link="project-details"
                    image={require("assets/img/projects-temp/Warehouse.png")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <ProjectCard
                    heading="Shed Projects"
                    link="project-details"
                    image={require("assets/img/projects-temp/Shed.png")}
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default OurWork;
