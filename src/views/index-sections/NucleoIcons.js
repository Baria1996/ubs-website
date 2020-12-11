import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Nucleo Icons</h2>
              <h5 className="description font-weight-normal">
                U.B.S has over 27 years of experience in providing turnkey
                solutions, in diverse fields, by integrating design, production,
                and sales. U.B.S started out as a general order supplies
                company, given its dynamic nature it later on expanded into
                different sector. The several successful Ventures under the
                U.B.S umbrella are as follows:
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="/nucleo-icons"
                size="lg"
                target="_blank"
              >
                View Demo Icons
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons business_briefcase-24"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons design-2_ruler-pencil"></i>
                <i className="now-ui-icons ui-2_settings-90"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons business_globe"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons business_bank"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
