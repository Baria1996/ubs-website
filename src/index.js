/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import Clients from "views/Clients.js";
import WhoWeAre from "views/WhoWeAre.js";
import WhatWeDo from "views/WhatWeDo.js";
import OurWork from "views/OurWork.js";
import OurSolutions from "views/OurSolutions.js";
import ContactUs from "views/ContactUs.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/our-esteemed-clients"
        render={(props) => <Clients {...props} />}
      />
      <Route path="/who-we-are" render={(props) => <WhoWeAre {...props} />} />
      <Route path="/what-we-do" render={(props) => <WhatWeDo {...props} />} />
      <Route
        path="/our-solutions"
        render={(props) => <OurSolutions {...props} />}
      />
      <Route path="/our-work" render={(props) => <OurWork {...props} />} />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Redirect to="/index" />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
