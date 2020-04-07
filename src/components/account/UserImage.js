import React, { useState } from "react";
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

const UserImage = (props) => {
  const { className } = props;

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
        <img src={river} alt="user" className="w-100 h-auto" />
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        external={externalCloseBtn}
      >
        <ModalHeader>
          <img
            src={river}
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
              Name: <Badge pill>Vladimir Petrosyan</Badge>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between">
              Gender: <Badge pill>Male</Badge>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between">
              Age: <Badge pill>26</Badge>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between">
              Mail: <Badge pill>vl.petrosyan94@gmail.com</Badge>
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
};

export default UserImage;
