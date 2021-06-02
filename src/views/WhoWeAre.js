import React from "react";

// reactstrap components
import { Container, Row, Col, NavLink } from "reactstrap";

// core components
import PrimaryNavbar from "components/Navbars/PrimaryNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function WhoWeAre() {
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
                <h2 className="title text-left">Who we are</h2>
              </Col>
            </Row>
            <Row>
              <Col md="9">
                <p className="text-muted font-weight-normal">
                  We are manufacturers of Sandwich Panels (EPS, PU, Rockwool),
                  Prefab Containers, Security Booth, Guard Shacks, Aluminum
                  Windows, Aluminum Ventilators, Doors, Flashing (all types),
                  Louvers, Ridge and all Prefab Accessories
                </p>
                <img
                  className="img-raised rounded mb-4"
                  src={require("assets/img/main-bg.jpg")}
                  alt="..."
                />
                <div id="intro" className="space-70"></div>
                <p className="text-muted font-weight-normal">
                  Since its founding in 1987, I-J. B.S (United Business System),
                  with the Blessing of Allah Almighty have strictly adhered to
                  the guiding principles of the founding father; timely
                  delivery, quality products, customer satisfaction, and
                  integrity.
                  <span className="space-25"></span>
                  Adherence to these principles, alongside hard work paved our
                  path to success. Our pioneering efforts amongst other things
                  include:
                  <span className="space-25"></span>
                  <i className="fas fa-hand-point-right"></i> Pakistan's first
                  fully automated sandwich panel assembly plant.
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Prefabricated
                  light gauge & heavy gauge steel structures.
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> One window
                  construction solutions (Brick Masonry, R.C.C, and Steel
                  Structures).
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Disaster relief
                  (Immediate, Short Term, Long Term).
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Reconstruction &
                  rehabilitation of disaster affected areas.
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Construction in
                  topographically adverse locales. Earthquake resistant
                  structures.
                </p>
                <div id="mission" className="space-50"></div>
                <h3 className="text-primary text-left pt-2">
                  Mission Statement
                </h3>
                <p className="text-muted font-weight-normal">
                  <i className="fas fa-hand-point-right"></i> Become market
                  leaders in Civil Engineering industry with focus on:
                  <span className="ml-4">
                    <br></br>- Seismically resilient buildings.
                    <br></br>- Pre-Fabricated Buildings.
                    <br></br>- Pre-Engineered Buildings.
                    <br></br>- Precision Industrial engineering & fabrication.
                    <br></br>- Conventional building Construction.
                    <br></br>- High Rise Buildings.
                    <br></br>
                  </span>
                  <i className="fas fa-hand-point-right"></i> Offer innovative
                  building solutions
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Offer cost
                  effective solutions.
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> While Observing
                  strict adherence to ISO & Pakistan building code.
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Transform UBS into
                  entity that is capable of meeting the versatile needs of the
                  various industries in Pakistan.
                </p>
                <div id="vision" className="space-50"></div>
                <h3 className="text-primary text-left pt-2">
                  Vision Statement
                </h3>
                <p className="text-muted font-weight-normal">
                  To develop into a major national company with a regional
                  presence. While being renowned for its commitment, integrity,
                  quality and innovative solutions.
                </p>
              </Col>
              <Col md="3">
                <div>
                  <NavLink href="#intro" className="m-0 p-0 text-muted">
                    <i className="fas fa-angle-right"></i> Introduction
                  </NavLink>
                  <hr></hr>
                  <NavLink href="#mission" className="m-0 p-0 text-muted">
                    <i className="fas fa-angle-right"></i> Mission Statement
                  </NavLink>
                  <hr></hr>
                  <NavLink href="#vision" className="m-0 p-0 text-muted">
                    <i className="fas fa-angle-right"></i> Vision Statement
                  </NavLink>
                  <hr></hr>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default WhoWeAre;
