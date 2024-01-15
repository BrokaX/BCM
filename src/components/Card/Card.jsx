import React, { useState } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import FirebaseService from '../../services/firebase';
import './Card.css';
const Card = ({ card, refreshList }) => {
  const [currentCard, setCurrentCard] = useState(card);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCard({ ...currentCard, [name]: value });
  };
  const [url, setUrl] = useState('');
  const generateQR = (e) => {
    setUrl(e.target.value);
  };
  const updateCard = async (e) => {
    e.preventDefault();
      setLoading(true);
      try {
        await updateDoc(doc(FirebaseService.db, 'cards', currentCard.id), {
          ...currentCard,
        });
        refreshList();
        setLoading(false);
        setMessage('Updated successfully!');
      } catch (err) {
        console.log(err);
      }
  };

  const deleteCard = async () => {
    try {
      await deleteDoc(doc(FirebaseService.db, 'cards', currentCard.id));
      refreshList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='main__card__container'>
      {currentCard && (
        <div className='edit__card__form__container'>
          <h4>{currentCard.title}</h4>
          <form className='edit__card__form' method='POST'>
            <div className='card__column'>
              <label htmlFor='title' className='form-label'>
                Business Title
              </label>
              <input
                onChange={handleInputChange}
                type='text'
                name='title'
                defaultValue={currentCard.title}
                placeholder='Business Title'
                className='form-control'
                id='title'
              />
            </div>
            <div className='card__column'>
              <label htmlFor='name' className='form-label'>
                Business Owner
              </label>
              <input
                onChange={handleInputChange}
                type='text'
                name='name'
                defaultValue={card.name}
                placeholder='Business Owner'
                className='form-control'
                id='name'
              />
            </div>
            <div className='card__column'>
              <label htmlFor='email' className='form-label'>
                Email Address
              </label>
              <input
                onChange={handleInputChange}
                type='email'
                name='email'
                defaultValue={card.email}
                className='form-control'
                id='email'
                placeholder='example@email.com'
              />
            </div>
            <div className='card__column'>
              <label htmlFor='phone' className='form-label'>
                Phone Number
              </label>
              <input
                onChange={handleInputChange && generateQR}
                type='number'
                name='phone'
                defaultValue={card.phone}
                placeholder='Phone Number'
                className='form-control'
                id='phone'
              />
            </div>
            <div className='card__column'>
              <label htmlFor='website' className='form-label'>
                Website
              </label>
              <input
                onChange={handleInputChange}
                type='text'
                name='website'
                defaultValue={card.website}
                className='form-control'
                id='website'
                placeholder='https://www.example.com/'
              />
            </div>
            <div className='card__column'>
              <label htmlFor='youtube' className='form-label'>
                Youtube
              </label>
              <input
                onChange={handleInputChange}
                type='text'
                name='youtube'
                defaultValue={card.youtube}
                placeholder='https://www.youtube.com/'
                className='form-control'
                id='youtube'
              />
            </div>
            <div className='card__column'>
              <label htmlFor='facebook' className='form-label'>
                Facebook
              </label>
              <input
                onChange={handleInputChange}
                type='text'
                className='form-control'
                defaultValue={card.facebook}
                name='facebook'
                id='facebook'
                placeholder='https://www.facebook.com/'
              />
            </div>
            <div className='card__column'>
              <label htmlFor='twitter' className='form-label'>
                Twitter
              </label>
              <input
                onChange={handleInputChange}
                type='text'
                name='twitter'
                defaultValue={card.twitter}
                placeholder='https://twitter.com/'
                className='form-control'
                id='twitter'
              />
            </div>
            <div className='card__column'>
              <label htmlFor='instagram' className='form-label'>
                Instagram
              </label>
              <input
                onChange={handleInputChange}
                type='text'
                name='instagram'
                defaultValue={card.instagram}
                placeholder='https://www.instagram.com/'
                className='form-control'
                id='instagram'
              />
            </div>
            <div className='card__column'>
              <label htmlFor='whatsapp' className='form-label'>
                WhatsApp
              </label>
              <input
                onChange={handleInputChange}
                type='number'
                className='form-control'
                name='whatsapp'
                defaultValue={card.whatsapp}
                id='whatsapp'
                placeholder='WhatsApp Number'
              />
            </div>
          </form>
        </div>
      )}
      <div className='action__buttons__container'>
        <button className='badge badge-danger mr-2' onClick={deleteCard}>
          Delete
        </button>
        <button
          type='submit'
          className='badge badge-success'
          onClick={updateCard}
        >
          Update
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Card;
