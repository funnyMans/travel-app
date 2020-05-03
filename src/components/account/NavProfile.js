import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import { connect } from "react-redux";
import { handleCheckedButton, handleList } from "../../Redux/actions/index";

function NavProfile(props) {
  return (
    <div className="navProfile">
      <ButtonGroup vertical>
        <Button className="text-left rounded zoom ml-2 font-weight-bold btn-lg shadow-btn">
          Search for Trip
        </Button>
        <Button className="text-left rounded zoom ml-2 font-weight-bold btn-lg shadow-btn">
          My Trips
        </Button>
        <Button
          className="text-left rounded zoom ml-2 font-weight-bold btn-lg shadow-btn"
          onClick={() => {
            props.checkCitiesButton();
            props.setList();
          }}
        >
          Armenian Cities
        </Button>
        <Button className="text-left rounded zoom ml-2 font-weight-bold btn-lg shadow-btn">
          Armenian Kitchen
        </Button>
        <Button className="text-left rounded zoom ml-2 font-weight-bold btn-lg shadow-btn">
          You should see..
        </Button>
      </ButtonGroup>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkCitiesButton: () => {
      dispatch(handleCheckedButton());
    },
    setList: () => {
      dispatch(handleList());
    },
  };
};

export default connect(null, mapDispatchToProps)(NavProfile);
