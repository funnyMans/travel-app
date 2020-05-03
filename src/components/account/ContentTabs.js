import React, { useState } from "react";
import { connect } from "react-redux";
import "../../images/yerevan.jpg";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

const ContentTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  console.log(props.state);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Cities
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Details
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            {props.state.map((it) => {
              return (
                <Col sm="3" className="mt-2">
                  <Card body>
                    <CardTitle className="text-center">
                      <span className="font-weight-bolder">{it.name}</span>
                    </CardTitle>

                    <CardImg
                      top
                      width="100%"
                      src={require(`../../images/${it.image}.jpg`)}
                      alt="Card image cap"
                    />
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>Tab 2 Contents</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.listReducer[2]);

  return {
    state: state.listReducer,
  };
};

export default connect(mapStateToProps, null)(ContentTabs);
