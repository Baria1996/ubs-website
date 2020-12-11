import React from "react";

// reactstrap components
import { Card, CardBody } from "reactstrap";

function InfoCards(props) {
  return (
    <a href="our-solutions">
      <Card>
        <CardBody className="text-center">
          <div className="space-25"></div>
          <img alt="..." className="img-fluid" src={props.image}></img>
          <div className="space-25"></div>
          <h3 className="text-primary">{props.heading}</h3>
          <p className="text-muted font-weight-normal">{props.details}</p>
        </CardBody>
      </Card>
    </a>
  );
}

export default InfoCards;
