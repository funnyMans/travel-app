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
          clientId="831687896322-44sc959subao4ngh3mdg1bbhhogbl96m.apps.googleusercontent.com"
          clientSecret="SFO24sa0c85TiXnL2OH6aWLZ"
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
