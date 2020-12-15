import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import PrimaryNavbar from "components/Navbars/PrimaryNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

const items = [
  {
    src: require("assets/img/projects-temp/Office.png"),
    altText: "...",
  },
  {
    src: require("assets/img/projects-temp/lahore.png"),
    altText: "...",
  },
  {
    src: require("assets/img/projects-temp/Sukhi.png"),
    altText: "...",
  },
  {
    src: require("assets/img/projects-temp/Shed.png"),
    altText: "...",
  },
  {
    src: require("assets/img/projects-temp/Warehouse.png"),
    altText: "...",
  },
  {
    src: require("assets/img/projects-temp/House.png"),
    altText: "...",
  },
];

function ProjectDetails() {
  return (
    <>
      <PrimaryNavbar />
      <div className="wrapper">
        <div className="section">
          <Container>
            <h3 className="title">Project name</h3>
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
                {items.map((item) => {
                  return (
                    <Col md="3">
                      <img
                        className="img-fluid img-raised rounded mb-4"
                        src={item.src}
                        alt={item.altText}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default ProjectDetails;
