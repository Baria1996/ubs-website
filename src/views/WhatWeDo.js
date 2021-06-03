import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Tabs from "components/Tabs.js";

function WhatWeDo() {
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
            <Row>
              <Col md="12">
                <div className="space-50"></div>
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12">
                <h2 className="title text-left mt-0 pt-0">What we do in UBS</h2>
                <p className="text-muted font-weight-normal">
                  With progression of time UBS business group diversified into
                  the many other sectors primarily; Compressed Natural Gas
                  retail, General Trading, Construction, Manufacturing, Textile
                  Merchandising,Real Estate, Business Consultancy, and Overseas
                  Investment. Our services include:
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> High Rise
                  Buildings
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Civil Construction
                  <br></br>
                  <i className="fas fa-hand-point-right"></i> Pre-Engineered &
                  Pre-Fab Buildings
                </p>
              </Col>
              <Col lg="6" md="12">
                <img
                  className="img-raised rounded mt-4"
                  src={require("assets/img/projects/house/Balakot Housing (2).png")}
                  alt="..."
                />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="space-50"></div>
                <h3 className="text-primary text-center">
                  Our expertise in above fields include
                </h3>
              </Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col md="5">
                <p className="text-muted font-weight-normal">
                  <br></br>- Mass Housing
                  <br></br>- Infrastructure Development
                  <br></br>- Marquees
                  <br></br>- Hotels & Resorts
                  <br></br>- Medical Facilities
                  <br></br>- Educational Institutions
                  <br></br>- Industrial Shed
                  <br></br>- Industrial Plants
                  <br></br>- Auditorium
                  <br></br>- Poultry Farms
                  <br></br>- Dairy Farms
                  <br></br>- Shopping complex
                  <br></br>- Aircraft Hangars
                  <br></br>- Cold Storages
                  <br></br>- Airport Terminal Building
                  <br></br>- Railway Stations
                  <br></br>- Slaughter House
                  <br></br>- Meat Processing Units
                </p>
              </Col>
              <Col md="5">
                <p className="text-muted font-weight-normal">
                  <br></br>- Residences
                  <br></br>- Restaurants
                  <br></br>- Basic Health units
                  <br></br>- R.O. Filtration Plants
                  <br></br>- Public Toilets,'Washrooms
                  <br></br>- Villas/Cottages
                  <br></br>- Houses
                  <br></br>- Mosques
                  <br></br>- Schools/Universities
                  <br></br>- Clean Rooms
                  <br></br>- Site Carnps
                  <br></br>- Marketing Offices
                  <br></br>- Military Camps/Barracks
                  <br></br>- Labor Dormitories
                  <br></br>- Ticket Booth
                </p>
              </Col>
              <Col md="1"></Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="space-50"></div>
                <h2 className="title text-left mt-0 pt-0">
                  What we do in Islamabad
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <p className="text-muted font-weight-normal">
                  <i className="fas fa-hand-point-right"></i> Sandwich Panels
                  (EPS/PU/Rockwool/Glass wool). <br></br>
                  <i className="fas fa-hand-point-right"></i> Heavy Gauge Steel
                  Structures. <br></br>
                  <i className="fas fa-hand-point-right"></i> Light Gauge Steel
                  Structures. <br></br>
                  <i className="fas fa-hand-point-right"></i> Metallic
                  Fabrication (Cutting/Flashing, welding , bending, Shearing &
                  corrugation. <br></br>
                  <i className="fas fa-hand-point-right"></i> Hot Roll & Cold
                  Roll manufacturing <br></br>
                  <i className="fas fa-hand-point-right"></i> Pre-fabricated &
                  Pre-Engineered Building accessories. <br></br>
                  <i className="fas fa-hand-point-right"></i> Portable
                  Buildings. <br></br>
                  <i className="fas fa-hand-point-right"></i> Erection ,
                  Installation of PEB & Pre-Fab building. <br></br>
                  <i className="fas fa-hand-point-right"></i> Complete Green
                  House Solutions. <br></br>
                  <i className="fas fa-hand-point-right"></i> Porta Cabins &
                  Lift-able Containers. <br></br>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Tabs />
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                {/* <h3 className="title text-primary font-weight-normal mt-0 pt-0">
                  Work Flow
                </h3> */}
              </Col>
            </Row>
            <Row>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/consultation.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">
                    Consultation
                  </h6>
                </div>
              </Col>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/design.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">Designing</h6>
                </div>
              </Col>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/collaboration.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">Management</h6>
                </div>
              </Col>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/conveyor.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">
                    Manufacturing
                  </h6>
                </div>
              </Col>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/crane.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">
                    Construction
                  </h6>
                </div>
              </Col>
              <Col md="2" lg="2">
                <div className="text-center">
                  <img
                    className="img m-4"
                    src={require("assets/img/icons/support.png")}
                    alt="..."
                  />
                  <h6 className="font-weight-normal text-muted">Support</h6>
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

export default WhatWeDo;
