import React, { useState, useEffect } from 'react';
import Qr from './Qr'
function App() {
  const [data, setData] = useState(null);
  const [show,setShow]=useState(false)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://react-crud-1bcbc-default-rtdb.firebaseio.com/react-crud.json'
        );
        const json = await response.json();
        const array = Object.keys(json).map(key => ({ id: key, ...json[key] }));
        setData(array);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  if (!data) {
    return <div>Sorry No Data added yet</div>;
  }
  console.log(data)
  // Delete
  async function deleteData(id) {
    try {
      let del=await fetch(`https://react-crud-1bcbc-default-rtdb.firebaseio.com/react-crud/${id}.json`, {
        method: 'DELETE'
      });
      if(del){
        setShow(true)
      }
    } catch (error) {
      console.error(error);
    }
  }
  // actions
  const handleCall = (number) => {
    const phoneNumber = `tel:${number}`;
    window.open(phoneNumber);
  }
  const handleWhatsApp = (number) => {
    const whatsappUrl = `https://wa.me/${number}`;
    window.open(whatsappUrl);
  }
  const handleMessenger = (pageLink) => {
    const messengerUrl = `https://www.messenger.com/t/${pageLink}`;
    window.open(messengerUrl);
  }
  const handleMail = (email) => {
    const mailtoUrl = `mailto:${email}`;
    window.open(mailtoUrl);
  }
  const handleLink = (link) => {
    window.open(link, '_blank');
  }
  return (
    <div className='head'>
          {show && <div className="container ">
<div className="card bg-dark" id='carders'>
  <h4 className="card-header text-center">
  Your card has been deleted successfully!
  </h4>
</div>

    </div>}
      {data.reverse().map((element) => {
        return <div key={element.id} id="main">
          <div className="container centers">
            <div className="main">
              <div className="lefty">
                <div className="code" id="logo">
                  <img src={element.imageURL?element.imageURL:"dum.jpg"} alt="" />
                 {element.name && <h2>{element.name}</h2>}
                 {element.slogan && <p>{element.slogan}</p>}
                </div>  
              </div>
              <div className="cardi">
                <div className="btns">
                  <div className="buttonSection">
                    <button disabled={element.youtube===""} className="btn bg-white youtube call" onClick={() => handleCall(element.phone)}><img src="call.jpg" alt="" /></button>
                    <button disabled={element.website===""} onClick={() => handleLink(element.website)} className="btn btn-primary website"><img src="website.png" alt="webLink" /></button>
                  </div>
                  <div className="buttonSection">
                    <button disabled={element.facebook===""} className="btn btn-primary" id="messanger"><img src="./messanger.svg" onClick={() => handleMessenger(element.facebook)} alt="Facebook" /></button>
                    <button disabled={element.instagram===""} onClick={() => handleLink(element.instagram)} className="btn btn-secondary  insta"><img src="insta.png" alt="" /></button>
                  </div>
                  <div className="buttonSection">
                    <button disabled={element.youtube===""} className="btn btn-secondary insta youtube bg-white"
                      onClick={() => handleLink(element.youtube)} ><img src="youtube.jpg"
                        alt="" /></button>
                    <button className="btn btn-success whatsapp" onClick={() => handleWhatsApp(element.whatsapp)}><img src="whatsapp.png" alt="whatsApp" /></button>
                  </div>
                  <div className="buttonSection">
             <button className="btn insta mail" onClick={()=>handleMail(element.email)}><img src="mail.png" alt="Email" /></button>
             <button className="btn btn-secondry bg-white " onClick={() => handleLink(element.twitter)} ><img src="twitter.png" alt="twitter" /></button>
                  </div>
                </div>
              </div>
              <div className="carding">
              {element.phone &&   <Qr link={element.phone?element.phone:"No Link is Added"}></Qr>}
              
                <p>ID: {element.id}</p>
          <button onClick={() => deleteData(element.id)} className='btn btn-danger' >Delete</button>
              </div>
            </div>
          </div>
        </div>
      })}
    </div>
  );
}

export default App;