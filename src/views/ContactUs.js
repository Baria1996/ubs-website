import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Card, CardBody } from "reactstrap";

// core components
import PrimaryNavbar from "components/Navbars/PrimaryNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function ContactUs() {
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
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Get in touch</h2>
                <h5 className="description font-weight-normal">
                  Use the contact information below to contact us regarding any
                  of our services. Our hard working team will get back to you as
                  soon as possible.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="3"></Col>
              <Col md="6">
                <Card>
                  <CardBody className="text-left">
                    <p className="description text-left font-weight-normal">
                      <i className="pr-1 fas fa-phone-square"></i> +923004548461
                      <br></br>
                      <i className="fas fa-fax"></i> 0092 51 2363409
                      <br></br>
                      <i className="pr-1 fas fa-envelope"></i>{" "}
                      ibadsheryar@hotmail.com
                      <br></br>
                      <i className="pr-1 fas fa-map-marker-alt"></i> UBS Group
                      of Companies Office No. 5,6,1 1,12, First Floor, Sardar
                      Arcade, G-11 Markaz, Islamabad
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.facebook.com/UBSBusinessGroup/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn btn-round float-right"
                      color="info"
                      href="mailto:ibadsheryar@hotmail.com"
                      target="_blank"
                    >
                      Send an Email
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3"></Col>
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default ContactUs;
