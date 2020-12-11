import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import WhoWeAre from "./index-sections/WhoWeAre.js";
import OurSolutions from "./index-sections/OurSolutions.js";
import SolutionsInfo from "./index-sections/SolutionsInfo.js";
// import NucleoIcons from "./index-sections/NucleoIcons.js";
import WhatWeDo from "./index-sections/WhatWeDo.js";
import OurWork from "./index-sections/OurWork.js";
import ContactUs from "./index-sections/ContactUs.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <WhoWeAre />
          {/* <NucleoIcons /> */}
          <WhatWeDo />
          <OurSolutions />
          <SolutionsInfo />
          <OurWork />
          <ContactUs />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
