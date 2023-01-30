import React from "react";
import { useState } from "react";
// import FirebaseService from "../services/firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Carousel from "./Carousel";
import { QRCodeCanvas } from "qrcode.react";
import FooterMain from "./FooterMain";
const width = {width : '100%'}
export default function CardForm() {

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const gnerateQR = (e) => {
    setUrl(e.target.value);
  };
  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={50}
      bgColor={"#fff"}
      level={"H"}
    />
  );
  const [user, setUser] = useState({
    name: "",
    slogan: "",
    email: "",
    phone: "",
    youtube: "",
    facebook: "",
    twitter: "",
    instagram: "",
    website: "",
    whatsapp: "",
  });
  const [picPreview, setPicpreview] = useState(null);
  const handleImage = (e) => {
    const file = e.target.files[0];
    setPicpreview(URL.createObjectURL(file));
    setImage(e.target.files[0]);
  };
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  function forQR() {
    return Object.values(user);
  }
  return (
    
    <div className="Form-cover">
      <section>
      <div className="row no-gutters Business-card-container">
        <div className="col Business-card-form">
          <h1 className="form-title">Create-Business Card</h1>
          <form className=" row g-3" method="POST">
            <div className="col-md-6 ">
              <label htmlFor="title" className="Contact-us-label">
                Title of Business
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="slogan"
                defaultValue={user.slogan}
                placeholder="Title"
                className="Contact-us-input form-control"
                id="title"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="name" className="Contact-us-label">
                Name
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="name"
                defaultValue={user.name}
                placeholder="Required"
                className="Contact-us-input form-control"
                id="slogan"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="Contact-us-label">
                Email
              </label>
              <input
                onChange={getUserData}
                type="email"
                name="email"
                defaultValue={user.email}
                className="Contact-us-input form-control"
                id="inputEmail4"
                placeholder="email@example.com"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="Contact-us-label">
                Phone
              </label>
              <input
                onChange={getUserData}
                type="tel"
                name="phone"
                defaultValue={user.phone}
                placeholder="Phone-Number"
                className="Contact-us-input form-control"
                id="phone"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="youtube" className="Contact-us-label">
                Youtube
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="youtube"
                defaultValue={user.youtube}
                placeholder="Youtube Channel Url"
                className="Contact-us-input form-control"
                id="youtube"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="insta" className="Contact-us-label">
                Instagram
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="instagram"
                defaultValue={user.instagram}
                placeholder="Optional"
                className="Contact-us-input form-control"
                id="insta"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="twitter" className="Contact-us-label">
                Twitter
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="twitter"
                defaultValue={user.twitter}
                placeholder="Optional"
                className="Contact-us-input form-control"
                id="twitter"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="websiteLink" className="Contact-us-label">
                Website Link
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="website"
                defaultValue={user.website}
                className="Contact-us-input form-control"
                id="websiteLink"
                placeholder="https://www.example.com"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="facebook" className="Contact-us-label">
                Facebook Link
              </label>
              <input
                onChange={getUserData}
                type="text"
                className="Contact-us-input form-control"
                defaultValue={user.facebook}
                name="facebook"
                id="facebook"
                placeholder="https://www.facebook.com//"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="whatsapp" className="Contact-us-label">
                WhatsApp
              </label>
              <input
                onChange={getUserData}
                type="tel"
                className="Contact-us-input form-control"
                name="whatsapp"
                defaultValue={user.whatsapp}
                id="whatsapp"
                placeholder="Phone-number"
              />
            </div>
          </form>
          <div className="" id="carder">
            <div className="mb-3">
              <label htmlFor="formFile" className="Contact-us-label">
                Choose a Logo File
              </label>
              <input
                accept="images/*"
                onChange={handleImage}
                multiple={false}
                className="Contact-us-input form-control"
                type="file"
                id="formFile"
              />

              <button id="upload" className="Contact-us-submit float-end">
                Upload
              </button>
            </div>
          </div>
        </div>

        {/* Card Preview */}

        <div className="col Business-card-preview">
          <div className="Card-preview">
            <h1 className="form-title">Card Preview</h1>
            <div className="Business-card-preview-container">
              <Carousel />

              <div className="Card-preview-info">
                <h4 className="User-info username">{user.name}</h4>
                <h4 className="User-info business-title">{user.slogan}</h4>
                <h4 className="User-info user-email">
                  {user.email ? (
                    <>
                      <i className="fa-sharp fa-solid fa-envelope">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.email}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-phone">
                  {user.phone ? (
                    <>
                      <i className="fa-solid fa-phone-volume">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.phone}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-youtube">
                  {user.youtube ? (
                    <>
                      <i className="fa-brands fa-youtube">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.youtube}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-facebook">
                  {user.facebook ? (
                    <>
                      <i className="fa-brands fa-facebook">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.facebook}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-twitter">
                  {user.twitter ? (
                    <>
                      <i className="fa-brands fa-twitter">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.twitter}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-instagram">
                  {user.instagram ? (
                    <>
                      <i className="fa-brands fa-instagram">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.instagram}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-website">
                  {user.website ? (
                    <>
                      <i className="fa-solid fa-globe">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.website}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                <h4 className="User-info user-whatsapp">
                  {user.whatsapp ? (
                    <>
                      <i className="fa-brands fa-whatsapp">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.whatsapp}
                    </>
                  ) : (
                    ""
                  )}
                </h4>
                {/* <input
               type="text"
               name="QRCode"
              value={Object.values(user)}
                onChange={gnerateQR}
                disabled
                hidden
              /> */}
                {/* <textarea
                  value={forQR()}
                  onChange={(e) => setUrl(e.target.url)}
                >
                  {this.state.text}{" "}
                </textarea>
                <div>{qrcode} </div> */}
                <img
                  className="User-profile-pic"
                  src={picPreview}
                  alt="user profile"
                />
              </div>
            </div>
          </div>

          {/* Cards Selection */}
      
        </div>
      </div>
      </section>
      <FooterMain style={width} />
    </div>
  );
}
