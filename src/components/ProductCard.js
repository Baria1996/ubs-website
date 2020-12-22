import React from "react";

// reactstrap components
import { Row, Col, Card, CardBody } from "reactstrap";

function ProductCard(props) {
  return (
    <>
      <Card>
        <CardBody>
          <Row>
            <Col md="5">
              <img alt="..." className="img-fluid m-0" src={props.image}></img>
            </Col>
            <Col md="7">
              <p className="description font-weight-normal text-left">
                {props.description}
              </p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard;
