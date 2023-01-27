import React, { useState} from 'react';
function App() {
    const[identifier,setId]=useState('')
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
      let name,value
      const getUserData = (event) => {
        name = event.target.name
        value = event.target.value
        setUser({ ...user, [name]: value })
      }
 
      async function deleteData(id) {
          try {
            await fetch(`https://react-crud-1bcbc-default-rtdb.firebaseio.com/react-crud/${id}.json`, {
              method: 'DELETE'
            })
          } catch (error) {
            console.error(error);
          }
        }
  // Update
  async function updateData(id, updatedData) {
    deleteData(id)
    try {
      await fetch(`https://react-crud-1bcbc-default-rtdb.firebaseio.com/react-crud/${id}.json`, {
        method: 'PUT',
        body: JSON.stringify(updatedData),
      });
      setShow(true)
      // or you can use setData() method to update the state
    } catch (error) {
      console.error(error);
    }
  }
const handle=(e)=>{
    setId(e.target.value)
}

  return (<>
    <div className="container">
    <div className="col-md-6">
      <label htmlFor="title" className="form-label">ID of the Business Card</label>
        <input placeholder='Please Enter ID to Update' className="form-control" type="text" onChange={handle} defaultValue={identifier} />
        </div>
          

    </div>
    {show && <div className="container ">
<div className="card bg-dark" id='carders'>
  <h4 className="card-header text-center">
  Your card has been updated successfully!
  </h4>
</div>

    </div>}
        <div className="container">
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
    <button  id="send" type="button" className="btn btn-success" onClick={() => updateData(identifier, user)} disabled={identifier===""}>Update</button>
  </form></div></>
  );
}

export default App;