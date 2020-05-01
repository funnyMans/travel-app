import React from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import FbLogin from "./FbLogin";

class FbLoginSet extends React.Component {
  render() {
    return (
      <FacebookLoginButton>
        <FbLogin />
      </FacebookLoginButton>
    );
  }
}

export default FbLoginSet;
