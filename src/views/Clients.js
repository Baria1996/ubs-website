import React from "react";
import ClientsSection from "components/ClientsSection.js";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import PrimaryNavbar from "components/Navbars/PrimaryNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function Clients() {
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
                <h2 className="title">Our Esteemed Clients</h2>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <ClientsSection />
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Clients;
