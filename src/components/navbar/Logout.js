import React, { Component } from "react";
import { handleLogOut } from "../../Redux/actions/index";
import { connect } from "react-redux";
import { Button } from "reactstrap";

class Logout extends Component {
  render() {
    return (
      <Button className="btn-dark" onClick={() => this.props.logOut()}>
        <span className="font-weight-bolder">Log Out</span>
      </Button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.fbResponseReducer[0].auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(handleLogOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
