import React from "react";
import InfoCardSmall from "../../components/InfoCardSmall.js";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function WhatWeDo() {
  return (
    <>
      <Container className="text-center">
        <Row className="justify-content-md-center">
          <Col lg="8" md="12"></Col>
        </Row>
        <Row>
          <Col md="6" className="text-left">
            <h2 className="title ">What we do</h2>
            <h5 className="description font-weight-normal">
              With progression of time UBS business group diversified into the
              many other sectors primarily; Compressed Natural Gas retail,
              General Trading, Construction, Manufacturing, Textile
              Merchandising,Real Estate, Business Consultancy, and Overseas
              Investment.
            </h5>
            <Button
              className="btn-default mb-4"
              color="info"
              href="what-we-do"
              size="md"
            >
              Find out more
            </Button>
          </Col>
          <Col md="6">
            <InfoCardSmall
              heading="Ibad Shehryart (Pvt.) Ltd(I.S.L)"
              details="A Steel Structure Company"
            />
            <InfoCardSmall
              heading="UBS Constructions & Engineering Division"
              details="A Civil Engineering Company"
            />
            <InfoCardSmall
              heading="UBS General Order Supplies"
              details="Importing, trading, procurement, and supply of goods"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WhatWeDo;
