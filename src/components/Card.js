import React, { useState } from "react";
import CardsService from "../services/cards.js";

const Card = (props) => {

  const initialCardState = {
    key: null,
    name: "",
    email: "",
    phone: null,
    slogan: "",
    website: "",
    youtube: "",
    facebook: "",
    instagram: "",
    twitter: "",
    whatsapp: null,
  };

  const [currentCard, setCurrentCard] = useState(initialCardState);
  const [message, setMessage] = useState("");

  const { card } = props;
  if (currentCard.id !== card.id) {
    setCurrentCard(card);
    setMessage("");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCard({ ...currentCard, [name]: value });
  };

  const updateCard = () => {
    const data = {
      name: currentCard.name,
      email: currentCard.email,
      phone: currentCard.phone,
      slogan: currentCard.slogan,
      website: currentCard.website,
      youtube: currentCard.youtube,
      facebook: currentCard.facebook,
      instagram: currentCard.instagram,
      twitter: currentCard.twitter,
      whatsapp: currentCard.whatsapp,
    };

    CardsService.update(currentCard.id, data)
      .then(() => {
        setMessage("Updated successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCard = () => {
    CardsService.remove(currentCard.id)
      .then(() => {
        props.refreshList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {currentCard && (
        <div className="edit-form">
          <h4>Card</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentCard.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={currentCard.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
          </form>
          <button className="badge badge-danger mr-2" onClick={deleteCard}>
            Delete
          </button>
          <button
            type="submit"
            className="badge badge-success"
            onClick={updateCard}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
