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
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">UBS Group of Companies</h1>
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
