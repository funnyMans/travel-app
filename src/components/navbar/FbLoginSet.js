import React from "react";
import FacebookLogin from "react-facebook-login";
import { FacebookLoginButton } from "react-social-login-buttons";

class FbLoginSet extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLoginButton>
        <div className="fbButton">
          <FacebookLogin
            buttonText="Facebook"
            appId="214267816513566"
            autoLoad={false}
            fields="name,email,picture"
            scope="public_profile"
            callback={this.responseFacebook}
          />
        </div>
      </FacebookLoginButton>
    );
  }
}

export default FbLoginSet;
