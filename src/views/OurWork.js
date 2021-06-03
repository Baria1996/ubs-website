import React from "react";
import ProjectCard from "../components/ProjectCard";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

const items = [
  {
    heading: "Containers/Porta-Cabins",
    image: require("assets/img/projects/containers/containers.jpeg"),
    category: "containers",
  },
  {
    heading: "PEB/Steel Structures",
    image: require("assets/img/projects/steel/Peshawar Shed (1i).JPG"),
    category: "steel",
  },
  {
    heading: "Housing Projects",
    image: require("assets/img/projects/housing/Picture6.png"),
    category: "housing",
  },
  {
    heading: "Pre-Fab Huts",
    image: require("assets/img/projects/huts/HUTS (6).jpeg"),
    category: "huts",
  },
  {
    heading: "Mega Power Projects",
    image: require("assets/img/projects/mega/Bhikki Power plant4.jpg"),
    category: "mega",
  },
  {
    heading: "Pre-Fab Multi Storey Buildings",
    image: require("assets/img/projects/multistorey/China Embassy Islamabad (1).jpeg"),
    category: "multistorey",
  },
  {
    heading: "Educational Institutions",
    image: require("assets/img/projects/educational/Kotli High School (17).JPG"),
    category: "educational",
  },
  {
    heading: "Civil Construction",
    image: require("assets/img/projects/civil/Mahgul-resort-changla-gali.jpg"),
    category: "civil",
  },
  {
    heading: "Commercial Buildings",
    image: require("assets/img/projects/commercial/Gulberg Green Booking Office.jpeg"),
    category: "commercial",
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
      <IndexNavbar />
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
