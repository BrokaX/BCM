import React from "react";
// Components
import FooterMain from "./FooterMain.js";

const Library = () => {
  const slides = [
    "./assets/cards/Sample-card-1.png",
    "./assets/cards/Sample-card-2.png",
    "./assets/cards/Sample-card-3.png",
  ];

  // Render
  return (
    // <div className="row text-light">
    //   <h1 className="m-4">Your Business Cards</h1>
    //   <div className="col-md-5">
    //     <img className="main-card-library" src={slides[0]} alt="sample-card-01" />
    //     <button className="Contact-us-submit me-md-2 p-2">
    //         Edit
    //     </button>
    //     <button className="Contact-us-submit me-md-2 p-2">
    //         Delete
    //     </button>
    //   </div>
    //   <div className="col-md-5">
    //     <img className="main-card-library" src={slides[1]} alt="sample-card-01" />
    //     <button className="Contact-us-submit me-md-2 p-2">
    //         Edit
    //     </button>
    //     <button className="Contact-us-submit me-md-2 p-2">
    //         Delete
    //     </button>
    //   </div>
    //   <div className="col-md-5">
    //     <img className="main-card-library" src={slides[2]} alt="sample-card-01" />
    //     <button className="Contact-us-submit me-md-2 p-2">
    //         Edit
    //     </button>
    //     <button className="Contact-us-submit me-md-2 p-2">
    //         Delete
    //     </button>
    //   </div>
    //   <FooterMain />
    // </div>
    <div>
      <h1 className="m-4 text-light">Your Business Cards</h1>

      <div className="library-body ">
 
        {/* First Card */}
        <div className="library-card-container ">
          <img
            className="main-card-library"
            src={slides[0]}
            alt="sample-card-01"
          />
          <div>
            <button className="library-edit-btn">Edit</button>
            <button className="library-delete-btn">Delete</button>
          </div>
        </div>
        {/* First Card END*/}
        
       
       
        
        
       
         {/* First Card */}
         <div className="library-card-container">
          <img
            className="main-card-library"
            src={slides[0]}
            alt="sample-card-01"
          />
          <div>
            <button className="library-edit-btn">Edit</button>
            <button className="library-delete-btn">Delete</button>
          </div>
        </div>
        {/* First Card END*/}
        
      </div>
      <FooterMain />
    </div>
  );
};

export default Library;
