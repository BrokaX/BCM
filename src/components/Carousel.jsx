import React, { useState } from "react";

export default function Carousel() {
  const slides = [
    "./assets/cards/Sample-card-1.png",
    "./assets/cards/Sample-card-2.png",
    "./assets/cards/Sample-card-3.png",
  ];
  const [index, setIndex] = useState(0);
  const length = 3;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  let position = slides[index].toString();

  

  return (
    <div>
      <div>
        <img className="main-card" src={position} alt="card preview" />
        <div className="carousel">
          <div className="BC-templates">
            <div className="carousel-images">
              {slides &&
                slides.map((value, length) => {
                  let image = [value].toString();
                  return (
                    <img
                      value={1}
                      src={[image]}
                      key={length}
                      alt="card preview"
                    />
                  );
                })}
            </div>
          </div>
          <button className="Slide-previous" onClick={handlePrevious}>
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </button>
          <button className="Slide-next" onClick={handleNext}>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
