import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentTabs from "./ContentTabs";
import { connect } from "react-redux";

function ProfileItem(props) {
  let cities;
  if (props.menuButton === "CITIES") {
    cities = <ContentTabs />;
  }
  return <div className="profItem">{cities}</div>;
}

const mapStateToProps = (state) => {
  console.log(state.menuButtonReducer.menuButton);

  return {
    menuButton: state.menuButtonReducer.menuButton,
  };
};

export default connect(mapStateToProps, null)(ProfileItem);
