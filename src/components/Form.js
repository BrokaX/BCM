import React from "react";
import { useState } from "react";
import validator from "validator";
import FirebaseService from "../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
function Form() {
  const [isChecked, setIsChecked] = useState(false);
  const [failalert, setFailAlert] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
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
  const handleSubmit = () => {
    const imageRef = ref(FirebaseService.storage, image.name);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((eror) => {
            console.log(eror);
          });
        setImage(null);
      })
      .catch((eror) => {
        console.log(eror);
      });
  };

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const submit = async (e) => {
    let newErrors = {};
    if (!validator.isEmail(user.email)) {
      newErrors.email = "Invalid email";
    }
    if (!validator.isMobilePhone(user.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (user.name === "") {
      newErrors.name = "Name is required";
    }
    if (user.slogan === "") {
      newErrors.name = "Name is required";
    }
    e.preventDefault();
    if (Object.keys(newErrors).length === 0) {
      const result = fetch(
        "https://react-crud-1bcbc-default-rtdb.firebaseio.com/react-crud.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            slogan: user.slogan,
            email: user.email,
            phone: user.phone,
            youtube: user.youtube,
            facebook: user.facebook,
            twitter: user.twitter,
            instagram: user.instagram,
            website: user.website,
            whatsapp: user.whatsapp,
            imageURL: url,
          }),
        }
      );
      if (result) {
        setUser({
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
        setSubmited(true);
        if (submit) {
          setShow(true);
        }
      }
    } else {
      setErrors(newErrors);

      setFailAlert(true);

      console.log(errors);
    }
  };
  return (
    <>
      {failalert && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Error!</strong>
          <span>Please Fill the Form Correctly</span>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      {submited && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Success</strong> Your Data is Stored
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      <div className="row no-gutters Business-card-container">
        <div className="col Business-card-form">
          <h1>Create-Business Card</h1>
          <form className="row g-3" method="POST">
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                Title of Business
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="slogan"
                defaultValue={user.slogan}
                placeholder="Title"
                className="form-control"
                id="title"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="name"
                defaultValue={user.name}
                placeholder="Required"
                className="form-control"
                id="slogan"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                onChange={getUserData}
                type="email"
                name="email"
                defaultValue={user.email}
                className="form-control"
                id="inputEmail4"
                placeholder="email@example.com"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                onChange={getUserData}
                type="tel"
                name="phone"
                defaultValue={user.phone}
                placeholder="Phone-Number"
                className="form-control"
                id="phone"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="youtube" className="form-label">
                Youtube
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="youtube"
                defaultValue={user.youtube}
                placeholder="Youtube Channel Url"
                className="form-control"
                id="youtube"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="insta" className="form-label">
                Instagram
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="instagram"
                defaultValue={user.instagram}
                placeholder="Optional"
                className="form-control"
                id="insta"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="twitter" className="form-label">
                Twitter
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="twitter"
                defaultValue={user.twitter}
                placeholder="Optional"
                className="form-control"
                id="twitter"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="websiteLink" className="form-label">
                Website Link
              </label>
              <input
                onChange={getUserData}
                type="text"
                name="website"
                defaultValue={user.website}
                className="form-control"
                id="websiteLink"
                placeholder="https://www.example.com"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="facebook" className="form-label">
                Facebook Link
              </label>
              <input
                onChange={getUserData}
                type="text"
                className="form-control"
                defaultValue={user.facebook}
                name="facebook"
                id="facebook"
                placeholder="https://www.facebook.com//"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="whatsapp" className="form-label">
                WhatsApp
              </label>
              <input
                onChange={getUserData}
                type="tel"
                className="form-control"
                name="whatsapp"
                defaultValue={user.whatsapp}
                id="whatsapp"
                placeholder="Phone-number"
              />
            </div>
          </form>
          <div className="" id="carder">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Choose a Logo File
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
                className="btn btn-primary my-4 float-end"
                onClick={handleSubmit}
              >
                Upload
              </button>
              {url && (
                <img
                  id="show"
                  src={url}
                  className="img-thumbnail"
                  alt="Logo Will be Here"
                ></img>
              )}
            </div>
          </div>
        </div>

        {/* Card Preview */}

        <div className="col Business-card-preview">
          <div className="Card-preview">
            <h1>Card Preview</h1>
            <div className="Business-card-preview-container">
              <img
                className="main-card"
                src="./assets/cards/Sample-card-1.png"
                alt="card preview"
              />
              <div className="Card-preview-info">
                <h4 className="User-info username">{user.name}
                </h4>
                <h4 className="User-info business-title">
                  {user.slogan}
                 
                </h4>
                <h4 className="User-info user-email">
                  {user.email? (
                    <>
                      <i class="fa-sharp fa-solid fa-envelope">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.email}
                    </>
                  ) : (
                    ""
                  )} 
                </h4>
                <h4 className="User-info user-phone">
                  {user.phone? (
                    <>
                     <i class="fa-solid fa-phone-volume">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.phone}
                    </>
                  ) : (
                    ""
                  )} 
                </h4>
                <h4 className="User-info user-youtube">
                  {user.youtube? (
                    <>
                      <i class="fa-brands fa-youtube">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.youtube}
                    </>
                  ) : (
                    ""
                  )} 
                </h4>
                <h4 className="User-info user-facebook">
                  {user.facebook? (
                    <>
                      <i class="fa-brands fa-facebook">
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
                      <i class="fa-brands fa-twitter">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.twitter}
                    </>
                  ) : (
                    ""
                  )} 
                </h4>
                <h4 className="User-info user-instagram">
                  {user.instagram? (
                    <>
                     <i class="fa-brands fa-instagram">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.instagram}
                    </>
                  ) : (
                    ""
                  )} 
                </h4>
                <h4 className="User-info user-website">
                  {user.website? (
                    <>
                      <i class="fa-solid fa-globe">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.website}
                    </>
                  ) : (
                    ""
                  )} 
                </h4>
                <h4 className="User-info user-whatsapp">
                  {user.whatsapp? (
                    <>
                      <i class="fa-brands fa-whatsapp">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </i>
                      {user.whatsapp}
                    </>
                  ) : (
                    ""
                  )} 
                </h4>
                <img
                  className="User-profile-pic"
                  src={picPreview}
                  alt="user profile"
                />
              </div>
            </div>

            {/* Cards Selection */}
            <div className="BC-templates">
              <div className="carousel">
                <img
                  src="./assets/cards/Sample-card-1.png"
                  alt="card preview"
                />
                <img
                  src="./assets/cards/Sample-card-2.png"
                  alt="card preview"
                />
                <img
                  src="./assets/cards/Sample-card-2.png"
                  alt="card preview"
                />
                <img
                  src="./assets/cards/Sample-card-2.png"
                  alt="card preview"
                />
                <img
                  src="./assets/cards/Sample-card-2.png"
                  alt="card preview"
                />
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
