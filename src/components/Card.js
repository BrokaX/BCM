import React, { useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
// Services
import FirebaseService from "../services/firebase";

const Card = (props) => {
  const initialCardState = {
    key: null,
    title: "",
    name: "",
    email: "",
    phone: null,
    website: "",
    youtube: "",
    facebook: "",
    twitter: "",
    instagram: "",
    whatsapp: null,
    imageURL: ""
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

  // Update (CRUD)
  const updateCard = async (e) => {
    e.preventDefault()
    try {
      await updateDoc(doc(FirebaseService.db, "cards", currentCard.id), {
        title: currentCard.title,
        name: currentCard.name,
        email: currentCard.email,
        phone: currentCard.phone,
        website: currentCard.website,
        youtube: currentCard.youtube,
        facebook: currentCard.facebook,
        twitter: currentCard.twitter,
        instagram: currentCard.instagram,
        whatsapp: currentCard.whatsapp,
        imageURL: currentCard.imageURL
      })
      setMessage("Updated successfully!");
    } catch (err) {
      console.log(err);
    };
  };

  // Delete (CRUD)
  const deleteCard = async () => {
    try {
      await deleteDoc(doc(FirebaseService.db, "cards", currentCard.id));
      props.refreshList();
    } catch (err) {
      console.log(err);
    };
  };

  // Render
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
