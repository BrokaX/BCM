import React, { useState } from 'react';
import './Carousel.css'
const slides = [
  './assets/cards/Sample-card-1.png',
  './assets/cards/Sample-card-2.png',
  './assets/cards/Sample-card-3.png',
  './assets/cards/Sample-card-4.png',
  './assets/cards/Sample-card-5.png',
];

const Carousel = ({ bgURL }) => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);

    bgURL(slides[index]);
  };
  const handleNext = () =>{
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    bgURL(slides[index]);
  }

  const handleChange = (image) => {
    setIndex(slides.indexOf(image));
    bgURL(slides[index]);
  };
  // Render
  return (
    <div>
      <div>
        <img className='main-card' src={slides[index]} alt='card preview' />
        <div className='carousel'>
          <div className='BC-templates'>
            <div className='carousel-images'>
              {slides.map((image, idx) => (
                <img
                className=''
                  key={idx}
                  src={image}
                  alt='card preview'
                  onClick={() => handleChange(image)}
                />
              ))}
            </div>
          </div>
          <button className='Slide-previous' onClick={handlePrevious}>
            <i className='fa fa-angle-left' aria-hidden='true'></i>
          </button>
          <button className='Slide-next' onClick={handleNext}>
            <i className='fa fa-angle-right' aria-hidden='true'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
