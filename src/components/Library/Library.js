import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
// Components
import Card from "../Card.js";
import FooterMain from "../FooterMain.js";
// Services
import FirebaseService from "../../services/firebase.js";

const Library = () => {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const q = query(
      collection(FirebaseService.db, 'cards'),
      orderBy('created', 'desc')
    );
    onSnapshot(q, (querySnapshot) => {
      setCards(
        querySnapshot.docs.map((doc) => ({
         ...doc.data()
        }))
      );
    });
  }, []);

  const refreshList = () => {
    setCurrentCard(null);
    setCurrentIndex(-1);
  };

  const setActiveCard = (card, index) => {
    const {
      title,
      name,
      email,
      phone,
      website,
      youtube,
      facebook,
      twitter,
      instagram,
      whatsapp,
      imageURL,
    } = card;

    setCurrentCard({
      id: card.id,
      title,
      name,
      email,
      phone,
      website,
      youtube,
      facebook,
      twitter,
      instagram,
      whatsapp,
      imageURL,
    });
    setCurrentIndex(index);
  };

  // Render
  return (
    <div className="list row d-flex flex-column min-vh-100 text-light">
      <div className="col-md-6">
        <ul className="list-group">
          { cards &&
            cards.map((card, index) =>
              <li
                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                onClick={() => setActiveCard(card, index)}
                key={card.id}
              >
                { card.title }
              </li>
            )}
        </ul>
      </div>
      <div className="col-md-6">
        {currentCard && (
          <Card card={currentCard} refreshList={refreshList} />
        )}
      </div>
      <FooterMain />
    </div>
  );
};

export default Library;
