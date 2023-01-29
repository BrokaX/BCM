import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// Services
import databaseService from "../services/firebase-config";

function Upload(props) {

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(databaseService.storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((err) => {
            console.log(err);
          });
        setImage(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Render
  return (
    <div className="card" id="carder">
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
  );
}

export default Upload;
