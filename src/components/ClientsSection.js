import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function ClientsSection() {
  return (
    <>
      <div className="wrapper">
        <div className="section text-center">
          <Container>
            {/* <h2 className="title">Our work</h2> */}
            <div className="team ">
              <Row>
                <Col md="12">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/clients/erra.png")}
                  ></img>
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/clients/green1.png")}
                  ></img>
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/clients/unicef.png")}
                  ></img>
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/clients/green2.png")}
                  ></img>
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/clients/mpcl.png")}
                  ></img>
                  <img
                    alt="..."
                    className="img-fluid mt-4"
                    src={require("assets/img/clients/ici.png")}
                  ></img>
                  <img
                    alt="..."
                    className="img-fluid mt-4"
                    src={require("assets/img/clients/hydro.png")}
                  ></img>
                  <img
                    alt="..."
                    className="img-fluid mt-4"
                    src={require("assets/img/clients/read.png")}
                  ></img>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ClientsSection;
