import React from "react";
import ProjectCard from "../components/ProjectCard";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import PrimaryNavbar from "components/Navbars/PrimaryNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

const items = [
  {
    heading: "Container Projects",
    image: require("assets/img/projects/container/Supply od ISolation Containers During COVID-19 (13).jpeg"),
    category: "container",
  },
  {
    heading: "Factory Projects",
    image: require("assets/img/projects/factory/Factory-ISL (1).png"),
    category: "factory",
  },
  {
    heading: "House Projects",
    image: require("assets/img/projects/house/Balakot Housing (2).png"),
    category: "house",
  },
  {
    heading: "Hut Projects",
    image: require("assets/img/projects/hut/HUTS (6).jpeg"),
    category: "hut",
  },
  {
    heading: "Factories & Large-scale Projects",
    image: require("assets/img/projects/largescale/Bhikki Power plant4.jpg"),
    category: "largescale",
  },
  {
    heading: "Office Projects",
    image: require("assets/img/projects/office/China Embassy Islamabad (1).jpeg"),
    category: "office",
  },
  {
    heading: "School Projects",
    image: require("assets/img/projects/school/Kotli High School (17).JPG"),
    category: "school",
  },
  {
    heading: "Shed Projects",
    image: require("assets/img/projects/shed/Chitral Shed 4.JPG"),
    category: "shed",
  },
];

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
            <h2 className="title">Our work</h2>
            <p className="text-muted text-center font-weight-normal">
              UBS team is dedicated to delivering expertly Prefab building
              solutions and getting the job done fast and without fuss! It’s up
              to you to make the right choice of a construction method for your
              project that ensures timely delivery, assured quality and no
              escalation in agreed costs — and we are here to help you make that
              decision easy!
            </p>
            <div className="section">
              <Row>
                {items.map((item, index) => {
                  return (
                    <Col md="4" key={index}>
                      <ProjectCard
                        heading={item.heading}
                        link={item.link}
                        image={item.image}
                        category={item.category}
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

export default OurWork;
