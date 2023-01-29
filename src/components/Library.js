import React, { useEffect, useState } from "react";
import CardsService from "../services/cards.js";
import Card from "./Card.js";
import FooterMain from "./FooterMain.js";

const Library = () => {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const onDataChange = (items) => {
    let cards = [];
    items.docs.forEach((item) => {
      let id = item.id;
      let data = item.data();
      cards.push({
        id: id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        slogan: data.slogan,
        website: data.website,
        youtube: data.youtube,
        facebook: data.facebook,
        instagram: data.instagram,
        twitter: data.twitter,
        whatsapp: data.whatsapp,
      });
    });
    setCards(cards);
  };

  useEffect(() => {
    const unsubscribe = CardsService.getAll().onSnapshot(onDataChange);
    return () => unsubscribe();
  }, []);

  const refreshList = () => {
    setCurrentCard(null);
    setCurrentIndex(-1);
  };

  const setActiveCard = (card, index) => {
    const {
      name,
      email,
      phone,
      slogan,
      website,
      youtube,
      facebook,
      instagram,
      twitter,
      whatsapp
    } = card;

    setCurrentCard({
      id: card.id,
      name,
      email,
      phone,
      slogan,
      website,
      youtube,
      facebook,
      instagram,
      twitter,
      whatsapp,
    });
    setCurrentIndex(index);
  };

  return (
    <div className="list row d-flex flex-column min-vh-100" >
      <div className="col-md-6">
        <ul className="list-group">
          { cards &&
            cards.docs.map((card, index) => (
              <li
                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                onClick={() => setActiveCard(card, index)}
                key={card.id}
              >
                { card.name }
              </li>
            ))}
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
