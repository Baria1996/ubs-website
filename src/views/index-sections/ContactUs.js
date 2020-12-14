import React from "react";

// reactstrap components
import { Container, Row, Col, NavLink } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="contact"
      >
        <Container>
          <Row className="justify-content-md-left">
            <Col md="4">
              <h3 className="title text-left mt-0 pt-0">Get in touch</h3>
              <h4 className="description text-left">
                We welcome queries from all our stakeholders and would like to
                hear from you
              </h4>
            </Col>
            <Col md="4"></Col>
            <Col md="4">
              <p className="description text-left">
                <NavLink
                  href="https://www.facebook.com/UBSBusinessGroup"
                  target="_blank"
                  id="fb-tooltip"
                  className="m-0 p-0"
                >
                  <i className="fab fa-facebook-square"></i> Like us on Facebook
                </NavLink>
                <i className="pr-1 fas fa-phone-square"></i> 0092 51 2363411 -
                13
                <br></br>
                <i className="fas fa-fax"></i> 0092 51 2363409
                <br></br>
                <i className="pr-1 fas fa-envelope"></i> ibadsheryar@hotmail.com
                <br></br>
                <i className="pr-1 fas fa-map-marker-alt"></i> UBS Group of
                Companies
                <br></br>
                Office No. 5,6,1 1,12, First Floor, Sardar Arcade, G-11 Markaz,
                Islamabad
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
