import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// Components
import Carousel from "./Carousel";
// Services
import FirebaseService from "../services/firebase";

export default function Form() {
  // Card
  const initialCardState = {
    id: null,
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
    imageURL: "",
  };

  const [card, setCard] = useState(initialCardState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  // Create (CRUD)
  const saveCard = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(FirebaseService.db, "cards"), {
        id: card.id,
        title: card.title,
        name: card.name,
        email: card.email,
        phone: card.phone,
        website: card.website,
        youtube: card.youtube,
        facebook: card.facebook,
        twitter: card.twitter,
        instagram: card.instagram,
        whatsapp: card.whatsapp,
        imageURL: card.imageURL,
      });
      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };

  const newCard = () => {
    setCard(initialCardState);
    setImage(null);
    setSubmitted(false);
  };
  // End Card

  // Imaqe
  const [image, setImage] = useState(null);
  const [picPreview, setPicPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setPicPreview(URL.createObjectURL(file));
    if (file) {
      setImage(file);
    }
  };

  const handleImageSubmit = () => {
    const imageRef = ref(FirebaseService.storage, image.name); // create a storage reference from our storage service
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((data) => {
            card.imageURL = data;
          })
          .catch((err) => {
            console.log(err);
          });
        console.log("file uploaded!");
        setImage(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // End Image



  // End Carousel Slide

  // Qr Code
  const [url , setUrl] = useState("");
  const generateQR = (e) => {
    setUrl(e.target.value);
  };
  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url }
      size={50}
      bgColor={"#fff"}
      level={"H"}
    />
  ); 
  // End Qr Code

  //Render
  return (
    <div className="Form-cover text-light">
      <div className="row no-gutters Business-card-container">
        <div className="col Business-card-form">
          <h1>Create Business Card</h1>
          <form className="row g-3 mb-3" method="POST">
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                Business Title
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="title"
                defaultValue={card.title}
                placeholder="Business Title"
                className="form-control"
                id="title"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Business Owner
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
                defaultValue={card.name}
                placeholder="Business Owner"
                className="form-control"
                id="name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                onChange={handleInputChange}
                type="email"
                name="email"
                defaultValue={card.email}
                className="form-control"
                id="email"
                placeholder="example@email.com"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                onChange={handleInputChange && generateQR}
                type="number"
                name="phone"
                defaultValue={card.phone}
                placeholder="Phone Number"
                className="form-control"
                id="phone"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="website" className="form-label">
                Website
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="website"
                defaultValue={card.website}
                className="form-control"
                id="website"
                placeholder="https://www.example.com/"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="youtube" className="form-label">
                Youtube
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="youtube"
                defaultValue={card.youtube}
                placeholder="https://www.youtube.com/"
                className="form-control"
                id="youtube"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="facebook" className="form-label">
                Facebook
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                defaultValue={card.facebook}
                name="facebook"
                id="facebook"
                placeholder="https://www.facebook.com/"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="twitter" className="form-label">
                Twitter
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="twitter"
                defaultValue={card.twitter}
                placeholder="https://twitter.com/"
                className="form-control"
                id="twitter"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="instagram" className="form-label">
                Instagram
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="instagram"
                defaultValue={card.instagram}
                placeholder="https://www.instagram.com/"
                className="form-control"
                id="instagram"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="whatsapp" className="form-label">
                WhatsApp
              </label>
              <input
                onChange={handleInputChange}
                type="number"
                className="form-control"
                name="whatsapp"
                defaultValue={card.whatsapp}
                id="whatsapp"
                placeholder="WhatsApp Number"
              />
            </div>
          </form>
          <div id="carder">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Logo
              </label>
              <input
                accept="images/*"
                onChange={handleImage}
                multiple={false}
                className="form-control"
                type="file"
                id="formFile"
              />
              <button
                id="upload"
                className="btn btn-secondary my-2 float-end"
                onClick={handleImageSubmit}
              >
                Upload
              </button>
            </div>
          </div>
        </div>

        {/* Card Preview */}
        <div className="col Business-card-preview">
          <div className="Card-preview">
            <h1>Card Preview</h1>
            <div className="Business-card-preview-container">
              <Carousel />
              <div className="Card-preview-info">
                <h4 className="User-info business-title">{card.title}</h4>
                <h4 className="User-info username">{card.name}</h4>
                <h4 className="User-info user-email">
                  {card.email ? (
                    <div>
                      <i className="fa-sharp fa-solid fa-envelope">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {card.email}
                    </div>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-phone">
                  {card.phone ? (
                    <div>
                      <i className="fa-solid fa-phone-volume">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {card.phone}
                    </div>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-website">
                  {card.website ? (
                    <>
                      <i className="fa-solid fa-globe">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {card.website}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-youtube">
                  {card.youtube ? (
                    <>
                      <i className="fa-brands fa-youtube">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {card.youtube}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-facebook">
                  {card.facebook ? (
                    <>
                      <i className="fa-brands fa-facebook">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {card.facebook}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-twitter">
                  {card.twitter ? (
                    <>
                      <i className="fa-brands fa-twitter">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {card.twitter}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-instagram">
                  {card.instagram ? (
                    <>
                      <i className="fa-brands fa-instagram">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {card.instagram}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-whatsapp">
                  {card.whatsapp ? (
                    <>
                      <i className="fa-brands fa-whatsapp">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {card.whatsapp}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <div className="qr-code">{qrcode} </div>
                <img
                  className="User-profile-pic"
                  src={picPreview}
                  alt="user profile"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button onClick={saveCard} className="Contact-us-submit me-md-2">
            Save Changes
          </button>
          {submitted &&
            <div className="alert alert-dismissible fade show bg-secondary" role="alert">
              Changes Saved to your Library   
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={newCard} >
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
