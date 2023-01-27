import React from 'react'
import { useState } from 'react';
import validator from 'validator';
import FirebaseService from "../services/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { Link } from "react-router-dom";
function Form() {
  const [isChecked, setIsChecked] = useState(false);
  const [failalert, setFailAlert] = useState(false)
  const [submited, setSubmited] = useState(false)
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState("")
  const [show,setShow]=useState(false)
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
    whatsapp: ""
  })
  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
  const handleSubmit = () => {
    const imageRef = ref(FirebaseService.storage, image.name)
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setUrl(url)

      }).catch((eror) => {
        console.log(eror)
      })
      setImage(null)
    }).catch((eror) => {
      console.log(eror)
    })

  }
  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  let name, value
  const getUserData = (event) => {
    name = event.target.name
    value = event.target.value
    setUser({ ...user, [name]: value })
  }
  const submit = async (e) => {
   
    let newErrors = {};
    if (!validator.isEmail(user.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!validator.isMobilePhone(user.phone,)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (user.name === "") {
      newErrors.name = 'Name is required';
    }
    if (user.slogan === "") {
      newErrors.name = 'Name is required';
    }
    e.preventDefault()
    if (Object.keys(newErrors).length === 0) {
      const result = fetch('https://react-crud-1bcbc-default-rtdb.firebaseio.com/react-crud.json', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
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
          imageURL: url
        })
      })
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
          whatsapp: ""
        })
        setSubmited(true)
        if(submit){
         setShow(true)
        }
      }
    }
    else {
      setErrors(newErrors);

      setFailAlert(true)

      console.log(errors)
    }
  }
  return (<>
    {failalert && <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Error!</strong><span>Please Fill the Form Correctly</span>
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    {
      submited && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success</strong> Your Data is Stored
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    }

    <div className="container">
      <h1>Create-Business Card</h1>
      <form className="row g-3" method='POST'>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Title of Business</label>
          <input onChange={getUserData} type="text" name="name" defaultValue={user.name} placeholder="Title" className="form-control" id="title" />
        </div>
        <div className="col-md-6">
          <label htmlFor="slogan" className="form-label">Name</label>
          <input onChange={getUserData} type="text" name="slogan" defaultValue={user.slogan} placeholder="Required" className="form-control" id="slogan" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input onChange={getUserData} type="email" name='email' defaultValue={user.email} className="form-control" id="inputEmail4" placeholder="email@example.com" />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input onChange={getUserData} type="number" name='phone' defaultValue={user.phone} placeholder="Number" className="form-control" id="phone" />
        </div>
        <div className="col-md-6">
          <label htmlFor="youtube" className="form-label">Youtube</label>
          <input onChange={getUserData} type="text" name='youtube' defaultValue={user.youtube} placeholder='Youtube Channel Url' className="form-control" id="youtube" />
        </div>
        <div className="col-md-6">
          <label htmlFor="insta" className="form-label">Instagram</label>
          <input onChange={getUserData} type="text" name='instagram' defaultValue={user.instagram} placeholder='Optional' className="form-control" id="insta" />
        </div>
        <div className="col-md-6">
          <label htmlFor="twitter" className="form-label">Twitter</label>
          <input onChange={getUserData} type="text" name='twitter' defaultValue={user.twitter} placeholder='Optional' className="form-control" id="twitter" />
        </div>
        <div className="col-md-6">
          <label htmlFor="websiteLink" className="form-label">Website Link</label>
          <input onChange={getUserData} type="text" name='website' defaultValue={user.website} className="form-control" id="websiteLink" placeholder="https://www.example.com" />
        </div>
        <div className="col-md-6">
          <label htmlFor="facebook" className="form-label">Facebook Link</label>
          <input onChange={getUserData} type="text" className="form-control" defaultValue={user.facebook}
            name="facebook"
            id="facebook" placeholder="https://www.facebook.com//" />
        </div>
        <div className="col-md-6">
          <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
          <input onChange={getUserData} type="number" className="form-control" name='whatsapp' defaultValue={user.whatsapp} id="whatsapp" placeholder="Optional" />
        </div>
      </form>
      <div className="card" id='carder'>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Choose a Logo File</label>
          <input accept='images/*' onChange={handleImage} multiple={false} className="form-control" type="file" id="formFile" />
          <button id='upload' className='btn btn-primary my-4 float-end' onClick={handleSubmit} >Upload</button>
          {url && <img id='show' src={url} className="img-thumbnail" alt="Logo Will be Here"></img>}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="alert alert-warning" role="alert">
        <strong>Please Make Sure</strong>
        <ol>
          <li>Enter your email correctly.</li>
          <li>Enter the name of your company.</li>
          <li>Please enter the link of your website to generate a QR code (QR code will be generated based on the information provided in the <b>Website Link</b> field).</li>
          <li>The more information you provide in the form, the more features you will have access to.</li>
        </ol>
      </div>
      <div className="form-group">
        <label className="col-xs-3 control-label"><h2>Terms and Conditions</h2></label>
        <div className="col-xs-9">
          <div className="boxOF">
            <ol>
              <li>Introduction
                <ul>
                  <li>The digital business card is owned by the company or individual who created it.</li>

                </ul>
              </li>
              <li>Ownership
                <ul>
                  <li>The card can only be used for legitimate business purposes and cannot be used for spamming or other unauthorized activities.</li>
                </ul>
              </li>
              <li>Use of the Digital Business Card
                <ul>
                  <li>The card can only be used for legitimate business purposes and cannot be used for spamming or other unauthorized activities.
                  </li>
                </ul>
              </li>
              <li>Sharing of the Digital Business Card
                <ul>
                  <li>The card can be shared with others for legitimate business purposes, but cannot be sold or distributed for commercial gain without the owner's permission.
                  </li>
                </ul>
              </li>
              <li>Liability
                <ul>
                  <li>The owner of the card is not liable for any damages resulting from the use of the card or the information contained on it.</li>
                </ul>
              </li>
              <li>Modification of the Digital Business Card
                <ul>
                  <li>The card cannot be modified or altered without the owner's permission.</li>
                </ul>
              </li>
              <li>Privacy
                <ul>
                  <li>The owner of the card is responsible for maintaining the privacy of any personal or sensitive information contained on the card.</li>
                </ul>
              </li>
              <li>Termination
                <ul>
                  <li>The owner of the card has the right to terminate or revoke access to the card at any time.</li>
                </ul>
              </li>
              <li>Governing Law
                <ul>
                  <li>The terms and conditions shall be governed by and construed in accordance with the laws of the state or country where the company or individual is based.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
     {show && <div className="container ">
<div className="card bg-dark" id='carders'>
  <h4 className="card-header text-center">
  Your card has been successfully created!
  </h4>
  <div className="card-body text-center ">
 
    <p className="card-text " >Please click this button to visit your card</p>

   <Link to="/Read"><button  className="btn btn-primary">Visit</button></Link> 
  </div>
</div>

    </div>}
    {!show &&  <div className="form-group">
        <div className="col-xs-6 col-xs-offset-3">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Agree with the terms and conditions
            </label>            
            <button disabled={!isChecked} id="send" type="button" className="btn btn-success" onClick={submit}>Create</button>
          </div>
        </div>
      </div>}
    </div>
  </>
  )
}

export default Form
