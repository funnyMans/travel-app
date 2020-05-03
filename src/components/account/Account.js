import React from "react";
import NavProfile from "./NavProfile";
import UserImage from "./UserImage.js";
import ProfileItem from "./ProfileItem";
import { connect } from "react-redux";
import ls from "local-storage";

function Account(props) {
  console.log(props.name);

  let account;
  if (props.auth1 || props.auth2) {
    account = (
      <div className="accountSet">
        <UserImage />
        <NavProfile />
        <ProfileItem />
      </div>
    );
  } else {
    account = null;
  }

  return <div>{account}</div>;
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, null)(Account);
