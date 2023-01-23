import React, { useState } from 'react'
import { storage } from '../firebase-config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
function Upload(props) {
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState("")
    const handleImage = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const handleSubmit = () => {
        const imageRef = ref(storage, "image")
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
    return (

        <div className="card" id='carder'>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Choose a Logo File</label>
                <input accept='images/*' onChange={handleImage} multiple={false} className="form-control" type="file" id="formFile" />
                <button id='upload' className='btn btn-primary my-4 float-end' onClick={handleSubmit} >Upload</button>
                {url && <img id='show' src={url} className="img-thumbnail" alt="Logo Will be Here"></img>}
            </div>
        </div>
    )
}
export default Upload
