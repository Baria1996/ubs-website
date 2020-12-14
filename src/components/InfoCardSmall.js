import React from "react";

// reactstrap components
import { Card, CardBody } from "reactstrap";

function InfoCardSmall(props) {
  return (
    <a href={props.redirect}>
      <Card>
        <CardBody className="text-left">
          <h6 className="text-primary">{props.heading}</h6>
          <h6 className="text-muted font-weight-normal">{props.details}</h6>
        </CardBody>
      </Card>
    </a>
  );
}

export default InfoCardSmall;
