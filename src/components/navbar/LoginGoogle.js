import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { handleGoogleResponse } from "../../Redux/actions/index";

class LoginGoogle extends Component {
  responseGoogle = (response) => {
    if (response.accessToken) {
      this.props.getResponse(response);
    }
  };
  render() {
    return (
      <div className="googleButton">
        <GoogleLogin
          clientId="901376225748-940h0mrdf5hl9c678385ma0mq9sk6fi9.apps.googleusercontent.com"
          clientSecret="TJJvBXTTjgwzpTSAZ-N5T1f5"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          icon={false}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResponse: (newResponse) => {
      dispatch(handleGoogleResponse(newResponse));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginGoogle);
