import React from "react";
import "../index.css";

//the Modal component contains the rules for the game and appears when the help button is clicked
const Modal = ({ closeModal }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="header">
          <h1>
            <u>RULES</u>
          </h1>
        </div>
        <div className="body">
          <p>
            1. The game is won when each card has been paired up with it's mate.
          </p>
          <p>
            2. When a pair of cards are matched they remain open so you can keep
            track of your progress.
          </p>
          <p>
            3. To restart the game the restart button can be clicked to
            reshuffle the cards.
          </p>
          <p>
            4. Incorrect guesses stay open for only a brief moment to help
            improve your recall ability over time.
          </p>
        </div>
        <div className="footer">
          {/*the modal can be closed using the button below*/}
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
