import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import ls from "local-storage";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Form,
  Input,
} from "reactstrap";
import Logout from "./Logout";
import LogInDropDown from "./LogInDropDown";

const NavbarWrapper = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let setButton;
  let setProfile;

  if (props.auth1 || props.auth2) {
    setButton = <Logout />;
    setProfile = (
      <NavLink href="/profile" className="zoom">
        <span className="h4">Profile</span>
      </NavLink>
    );
  } else {
    setButton = <LogInDropDown />;
    setProfile = null;
  }

  return (
    <div>
      <Navbar color="info" dark expand="lg" className="fixed-top w-75 mx-auto">
        <NavbarBrand className="ml-4 zoom" href="/">
          <span className="font-weight-bold h2">Traveller.am</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-2" navbar>
            <NavItem>
              <NavLink href="/about" color="dark" className="zoom">
                <span className="h4">About Us</span>
              </NavLink>
            </NavItem>
            <NavItem>{setProfile}</NavItem>
            <UncontrolledDropdown nav inNavbar className="zoom">
              <DropdownToggle nav caret>
                <span className="h4">Options</span>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {setButton}
            <Form className="form-inline">
              <Input type="search" placeholder="search" aria-label="Search" />
              <Button className="btn-dark">Search</Button>
            </Form>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(ls.get("state[0]"));

  return {
    auth1:
      ls.get("state[0]") !== null
        ? ls.get("state[0]").auth
        : state.fbResponseReducer.auth,
    auth2:
      ls.get("state[1]") !== null
        ? ls.get("state[1]").auth
        : state.googleResponseReducer.auth,
  };
};
export default connect(mapStateToProps, null)(NavbarWrapper);
