/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header" filter-color="orange">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "linear-gradient(#000000aa , #ffffff00), url(" +
              require("assets/img/main-bg.jpg") +
              ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              className="mt-4 pt-4"
              src={require("assets/img/logo.png")}
              alt="..."
            />
            <h1 className="text-primary font-weight-bold mt-4">
              <em>Group of Companies</em>
            </h1>
            <h3>The Construction Revolution</h3>
          </div>
          <h6 className="category category-absolute">
            Delivery all accross Pakistan.
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
