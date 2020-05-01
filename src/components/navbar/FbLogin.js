import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { handleFbResponse } from "../../Redux/actions/index";

class FbLogin extends React.Component {
  responseFacebook = (response) => {
    console.log(response);

    if (response.accessToken) {
      this.props.getResponse(response);
    }
  };
  render() {
    return (
      <FacebookLogin
        appId="214267816513566"
        fields="name,email,picture.type(large)"
        autoload={true}
        scope="public_profile,email"
        callback={this.responseFacebook}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResponse: (newResponse) => {
      dispatch(handleFbResponse(newResponse));
    },
  };
};

export default connect(null, mapDispatchToProps)(FbLogin);
