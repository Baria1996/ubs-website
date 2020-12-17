import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <p className="description font-weight-normal">
                UBS has over 33 years of experience in providing turnkey
                solutions, in diverse fields by integrating design, production
                and sales. UBS started out as general order supplier company.
                Given its dynamic nature it later on expanded into different
                sector. The several successful ventures under the UBS umbrella
                are as follows:
              </p>
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
                    Ibad Sheryar (Pvt) Ltd.
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
                    UBS Construction & Engineering Division
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
                    UBS General Order Supplies
                  </NavLink>
                </NavItem>
              </Nav>
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <Row>
                        <Col lg="6" md="12">
                          <p className="font-weight-normal text-left text-muted">
                            <span className="text-primary">(2007-Present)</span>
                            <br></br>ISL is one of the leading manufacturer and
                            supplier of sandwich panels (EPS/PU/Rockwool) and
                            structures in Pakistan. First company in Pakistan to
                            introduce fully automated continuous sandwich
                            manufacturing in Pakistan. The plant was setup in
                            2007 in Hattar Industrial Estate.
                          </p>
                        </Col>
                        <Col lg="6" md="12">
                          <p className="font-weight-normal text-left text-muted">
                            <br></br>
                            Our services include:
                            <br></br>
                            <i className="fas fa-hand-point-right"></i>{" "}
                            Designing, manufacturing, fabrication and supply of
                            Sandwich panels, steel structure memberes and
                            accessories
                            <br></br>
                            <i className="fas fa-hand-point-right"></i> Site
                            office manufacturing and supply (containers)
                            <br></br>
                          </p>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <Row>
                        <Col lg="6" md="12">
                          <p className="font-weight-normal text-left text-muted">
                            <span className="text-primary">(2005-Present)</span>
                            <br></br>A civil engineering company dedicated to
                            providing turnkey solutions for various civil
                            engineering applications.
                          </p>
                        </Col>
                        <Col lg="6" md="12">
                          <p className="font-weight-normal text-left text-muted">
                            <br></br>
                            Our expertise include:
                            <br></br>
                            <i className="fas fa-hand-point-right"></i> Mass
                            Housing & Infrastructure Development
                            <br></br>
                            <i className="fas fa-hand-point-right"></i> Modular
                            Construction
                            <br></br>
                            <i className="fas fa-hand-point-right"></i> Dry
                            Construction Technology
                            <br></br>
                            <i className="fas fa-hand-point-right"></i> Heavy &
                            Light gauge steel structures (Industrial Sheds,
                            Warehouses, Multi storey buildings, houses, site
                            offices, roofing systems etc)
                            <br></br>
                            <i className="fas fa-hand-point-right"></i>{" "}
                            Construction in Topographically adverse areas
                            <br></br>
                          </p>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p className="font-weight-normal text-muted">
                        <span className="text-primary text-center">
                          (1984-Present)
                        </span>
                        <br></br>
                        Importing, trading, procurement and supply of goods
                        related to the construction industry, office equipment,
                        ATM machines, CNG station apparatuses and kits, textile
                        relief goods and food items. Over 33 years of experience
                        in import and sale of office equipment, computer and
                        accessories, medical kits and antibacterial clothes. UBS
                        previously held the country franchise for NRG and won
                        the best performance awards from among 200 distributers
                        from across the globe, consecutively from 1997- 2003.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
