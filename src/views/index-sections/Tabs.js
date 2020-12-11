import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
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
      <Row>
        <Col className="ml-auto mr-auto" md="12">
          <div className="nav-align-center">
            <Nav className="justify-content-center" role="tablist" tabs>
              <NavItem>
                <NavLink
                  className={iconPills === "1" ? "active" : ""}
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setIconPills("1");
                  }}
                >
                  Ibad Shehryart (Pvt.) Ltd(I.S.L)
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={iconPills === "2" ? "active" : ""}
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setIconPills("2");
                  }}
                >
                  UBS Constructions & Engineering Division.
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={iconPills === "3" ? "active" : ""}
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setIconPills("3");
                  }}
                >
                  UBS General Order Supplies
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Col>
        <TabContent className="text-center" activeTab={"iconPills" + iconPills}>
          <TabPane tabId="iconPills1">
            <p>
              I think that’s a responsibility that I have, to push
              possibilities, to show people, this is the level that things could
              be at. So when you get something that has the name Kanye West on
              it, it’s supposed to be pushing the furthest possibilities. I will
              be the leader of a company that ends up being worth billions of
              dollars, because I got the answers. I understand culture. I am the
              nucleus.
            </p>
          </TabPane>
          <TabPane tabId="iconPills2">
            <p>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          </TabPane>
          <TabPane tabId="iconPills3">
            <p>
              I think that’s a responsibility that I have, to push
              possibilities, to show people, this is the level that things could
              be at. So when you get something that has the name Kanye West on
              it, it’s supposed to be pushing the furthest possibilities. I will
              be the leader of a company that ends up being worth billions of
              dollars, because I got the answers. I understand culture. I am the
              nucleus.
            </p>
          </TabPane>
        </TabContent>
      </Row>
      <Row>
        <Col md="12">
          <div className="space-50"></div>
          <Button
            className="btn-round"
            color="info"
            href="our-work"
            outline
            size="lg"
            target="_blank"
          >
            View More
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Tabs;
