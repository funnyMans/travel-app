import React, { useState } from "react";
import { connect } from "react-redux";
import ls from "local-storage";
import river from "../../images/river.jpg";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";

function UserImage(props) {
  const { className, image, name, email } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      className="close"
      style={{
        position: "absolute",
        top: "40px",
        right: "50px",
        fontSize: "4rem",
      }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <div className="userImage">
      <Button color="secondary" onClick={toggle}>
        <img src={image} alt="user" className="w-100 h-auto" />
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        external={externalCloseBtn}
      >
        <ModalHeader>
          <img
            src={image}
            alt="user"
            className="w-100 h-auto rounded-pill borderImage"
          />
        </ModalHeader>
        <ModalBody>
          <div className=" text-center">
            <span>Contact info:</span>
          </div>
          <ListGroup className="h4">
            <ListGroupItem className="justify-content-between">
              Name: <Badge pill>{name}</Badge>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between">
              E-Mail: <Badge pill>{email}</Badge>
            </ListGroupItem>
          </ListGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = () => {
  if (ls.get("state")[0].auth) {
    return {
      name: ls.get("state")[0].name,
      image: ls.get("state")[0].image,
      email: ls.get("state")[0].email,
    };
  } else if (ls.get("state")[1].auth) {
    return {
      name: ls.get("state")[1].name,
      image: ls.get("state")[1].image,
      email: ls.get("state")[1].email,
    };
  } else {
    return {
      name: "Unknown User",
      image: river,
      email: "unknownUser@gmail.com",
    };
  }
};

export default connect(mapStateToProps, null)(UserImage);
