import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FbLoginSet from "./FbLoginSet";
import GoogleLoginSet from "./GoogleLoginSet";
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
  ButtonDropdown,
  Form,
  Input,
} from "reactstrap";

const NavbarWrapper = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dropdownToggle = () => setOpen(!dropdownOpen);

  return (
    <div>
      <Navbar color="info" dark expand="sm" className="fixed-top w-75 mx-auto">
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
            <NavItem>
              <NavLink href="/profile" className="zoom">
                <span className="h4">Profile</span>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="zoom">
              <DropdownToggle nav caret>
                <span className="h4">Options</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <ButtonDropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
              <DropdownToggle caret color="success">
                <span className="font-weight-bold">Sign In</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Sign in with:</DropdownItem>
                <DropdownItem className="text-warning text-center">
                  <FbLoginSet />
                </DropdownItem>
                <DropdownItem className="text-warning text-center">
                  <GoogleLoginSet />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem header className="text-center">
                  or
                </DropdownItem>
                <DropdownItem className="text-center">
                  {" "}
                  <span className="d-block zoom text-primary font-weight-bold">
                    Sign Up
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Nav>
          <Form className="form-inline">
            <Input type="search" placeholder="search" aria-label="Search" />
            <Button className="btn-dark">Search</Button>
          </Form>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarWrapper;
