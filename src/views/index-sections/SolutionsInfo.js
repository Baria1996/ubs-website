import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// custom components
import InfoCard from "../../components/InfoCard.js";
import commercial from "../../assets/img/icons/commercial.png";
import residental from "../../assets/img/icons/residental.png";
import institutional from "../../assets/img/icons/institutional.png";
import industrial from "../../assets/img/icons/industrial.png";
import customized from "../../assets/img/icons/customized.png";

function SolutionsInfo() {
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" sm="10" md="6" lg="6" xl="6">
              <InfoCard
                heading="Commercial usage"
                details="Site offices, Retail Outlets, ATM Centers, Kiosks, Warehouses & Building Extensions"
                image={commercial}
              />
            </Col>
            <Col className="ml-auto mr-auto" sm="10" md="6" lg="6" xl="6">
              <InfoCard
                heading="Industrial usage"
                details="Industrial Sheds, Framing systems, Trusses, Crane Bays, Pharmaceutical Plants etc."
                image={industrial}
              />
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" sm="10" md="6" lg="4" xl="4">
              <InfoCard
                heading="Institutional usage"
                details="Schools, Health Centers, Hospitals, Barracks, Religious Centers & utility Areas"
                image={institutional}
              />
            </Col>
            <Col className="ml-auto mr-auto" sm="10" md="6" lg="4" xl="4">
              <InfoCard
                heading="Customized usage"
                details="Integrated Buildings are designed based upon specific customer requirements"
                image={customized}
              />
            </Col>
            <Col className="ml-auto mr-auto" sm="10" md="6" lg="4" xl="4">
              <InfoCard
                heading="Residential usage"
                details="Mass Housing, Villas, Worker Campsites, Multi-Story Buildings, Bungalows"
                image={residental}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SolutionsInfo;
