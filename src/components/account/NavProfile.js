import React from "react";
import { ButtonGroup, Button } from "reactstrap";

export default function NavProfile() {
  return (
    <div className="navProfile">
      <ButtonGroup vertical>
        <Button className="text-left rounded zoom ml-2 font-weight-bold btn-lg shadow-btn">
          Search for Trip
        </Button>
        <Button className="text-left rounded zoom ml-2 font-weight-bold btn-lg shadow-btn">
          My Trips
        </Button>
        <Button className="text-left rounded zoom ml-2 font-weight-bold btn-lg shadow-btn">
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
