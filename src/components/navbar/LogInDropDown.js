import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";
import FbLoginSet from "./FbLoginSet";
import GoogleLoginSet from "./GoogleLoginSet";

const LogInDropDown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const dropdownToggle = () => setOpen(!dropdownOpen);
  return (
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
  );
};

export default LogInDropDown;
