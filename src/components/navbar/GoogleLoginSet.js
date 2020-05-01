import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleLoginButton } from "react-social-login-buttons";
import LoginGoogle from "./LoginGoogle";

const GoogleLoginSet = () => {
  return (
    <GoogleLoginButton>
      <LoginGoogle />
    </GoogleLoginButton>
  );
};

export default GoogleLoginSet;
