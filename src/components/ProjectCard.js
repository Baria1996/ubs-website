import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, Row, Col } from "reactstrap";

function ProjectCard(props) {
  function importAll(r) {
    return r.keys().map(r);
  }
  // get images from the related folder
  let images = [];
  if (props.category === "container") {
    images = importAll(
      require.context(
        "../assets/img/projects/container",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "factory") {
    images = importAll(
      require.context(
        "../assets/img/projects/factory",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "house") {
    images = importAll(
      require.context(
        "../assets/img/projects/house",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "hut") {
    images = importAll(
      require.context(
        "../assets/img/projects/hut",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "largescale") {
    images = importAll(
      require.context(
        "../assets/img/projects/largescale",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "office") {
    images = importAll(
      require.context(
        "../assets/img/projects/office",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "school") {
    images = importAll(
      require.context(
        "../assets/img/projects/school",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "shed") {
    images = importAll(
      require.context(
        "../assets/img/projects/shed",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else {
    images = [];
  }

  const [modal1, setModal1] = React.useState(false);
  return (
    <>
      <div
        className="cursor-pointer team-player mb-4 pb-4"
        onClick={() => setModal1(true)}
      >
        <img
          alt="..."
          className="img-fluid img-raised rounded"
          src={props.image}
        ></img>
        <h4 className="title text-black mt-0">{props.heading}</h4>
        <p className="description font-weight-normal">{props.description}</p>
      </div>
      <Modal size="lg" isOpen={modal1} toggle={() => setModal1(false)}>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setModal1(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">{props.heading}</h4>
        </div>
        <ModalBody>
          <Row>
            {images.map((item, index) => {
              return (
                <Col md="4" key={index}>
                  <img
                    className="img-fluid img-fit rounded mb-4"
                    src={item}
                    alt={item.altText}
                  />
                </Col>
              );
            })}
          </Row>
        </ModalBody>
        <div className="modal-footer">
          <Button
            color="primary"
            type="button"
            onClick={() => setModal1(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ProjectCard;
