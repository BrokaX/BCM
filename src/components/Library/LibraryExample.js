import React, { useEffect, useState } from 'react';
import './Library.css';
import { collection, getDocs } from 'firebase/firestore';
import FirebaseService from '../../services/firebase.js';
import Card from '../Card/Card.jsx';
import FooterMain from '../FooterMain.js';

const Library = () => {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(FirebaseService.db, 'cards')
        );

        // Extract data from documents
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCards(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const refreshList = () => {
    setCurrentCard(null);
    setCurrentIndex(-1);
  };

  const setActiveCard = (card, index) => {
    setCurrentCard(card);
    setCurrentIndex(index);
  };

  // Render
  return (
    <div className='library-main'>
      <div className='library-body'>
        <div className='library-card-container '>
          {cards &&
            cards.map((card, index) => (
              
              <div
                className={
                  '' + (index === currentIndex ? 'selected__card' : '')
                }
                onClick={() => setActiveCard(card, index)}
                key={card.id }
              >
                <div
                  style={{ backgroundImage: `url(${card.templateUrl})` }}
                  className='card__container'
                >
                  <div className='Card-preview-info'>
                    <h4 className='User-info business-title'>{card.title}</h4>
                    <h4 className='User-info username'>{card.name}</h4>
                    <h4 className='User-info user-email'>
                      {card.email ? (
                        <div>
                          <i className='fa-sharp fa-solid fa-envelope'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </i>
                          {card.email}
                        </div>
                      ) : (
                        ''
                      )}
                    </h4>
                    <h4 className='User-info user-phone'>
                      {card.phone ? (
                        <div>
                          <i className='fa-solid fa-phone-volume'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </i>
                          {card.phone}
                        </div>
                      ) : (
                        ''
                      )}
                    </h4>
                    <h4 className='User-info user-website'>
                      {card.website ? (
                        <>
                          <i className='fa-solid fa-globe'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </i>
                          {card.website}
                        </>
                      ) : (
                        ''
                      )}
                    </h4>
                    <h4 className='User-info user-youtube'>
                      {card.youtube ? (
                        <>
                          <i className='fa-brands fa-youtube'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </i>
                          {card.youtube}
                        </>
                      ) : (
                        ''
                      )}
                    </h4>
                    <h4 className='User-info user-facebook'>
                      {card.facebook ? (
                        <>
                          <i className='fa-brands fa-facebook'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </i>
                          {card.facebook}
                        </>
                      ) : (
                        ''
                      )}
                    </h4>
                    <h4 className='User-info user-twitter'>
                      {card.twitter ? (
                        <>
                          <i className='fa-brands fa-twitter'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </i>
                          {card.twitter}
                        </>
                      ) : (
                        ''
                      )}
                    </h4>
                    <h4 className='User-info user-instagram'>
                      {card.instagram ? (
                        <>
                          <i className='fa-brands fa-instagram'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </i>
                          {card.instagram}
                        </>
                      ) : (
                        ''
                      )}
                    </h4>
                    <h4 className='User-info user-whatsapp'>
                      {card.whatsapp ? (
                        <>
                          <i className='fa-brands fa-whatsapp'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </i>
                          {card.whatsapp}
                        </>
                      ) : (
                        ''
                      )}
                    </h4>
                    <div className='qr-code'> </div>
                    <div className='User-profile-pic-container'>
                      <img
                        className='User-profile-pic'
                        src={card.imageURL}
                        alt='user profile'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button className='library-edit-btn'>Edit</button>
                  <button className='library-delete-btn'>Delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='edit-card'>
        {currentCard && <Card card={currentCard} refreshList={refreshList} />}
      </div>
      <FooterMain />
    </div>
  );
};

export default Library;
