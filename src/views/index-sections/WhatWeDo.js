import React from "react";
import Tabs from "./Tabs.js";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function WhatWeDo() {
  return (
    <>
      <Container className="text-center">
        <Row className="justify-content-md-center">
          <Col lg="8" md="12">
            <h2 className="title">What we do</h2>
            {/* <h5 className="description font-weight-normal">
                U.B.S has over 27 years of experience in providing turnkey
                solutions, in diverse fields, by integrating design, production,
                and sales. U.B.S started out as a general order supplies
                company, given its dynamic nature it later on expanded into
                different sector. The several successful Ventures under the
                U.B.S umbrella are as follows:
              </h5> */}
          </Col>
        </Row>
        <Tabs />
      </Container>
    </>
  );
}

export default WhatWeDo;
