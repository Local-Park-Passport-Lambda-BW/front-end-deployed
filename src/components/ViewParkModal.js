import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import Rating from "react-rating";

const ViewParkModal = props => {
  const { park, className, parkId, handleClick } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="viewButton" onClick={toggle}>
        view
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{park.name}</ModalHeader>
        <ModalBody>
          <p>{park.description}</p>
          <p>{park.city}</p>
          <p>{park.country}</p>

          <h6>Features</h6>

          <Rating
            id="card-stars"
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
            onClick={rating => handleClick(rating, parkId)}
            initialRating={park.average_rating}
          />
          {` `}
          {` `}
          <button className="reviewButton">Add a Review</button>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            placeholder="Leave a comment..."
          />
          <p>{park.comment}</p>

          <button color="success">Add Rating</button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ViewParkModal;
