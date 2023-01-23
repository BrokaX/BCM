import React, { useState, useEffect } from 'react';
import Qr from './Qr'
function Result() {
  const [data, setData] = useState(null);
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
    window.location.href = link;
  }

  let arrays=data.length
  return (
    <div className='head'>
         <div key={data[arrays-1].id} id="main">
          <div className="container centers"> 
            <div className="main">
              <div className="lefty">
                <div className="code" id="logo">
                  <img src={data[arrays-1].imageURL?data[arrays-1].imageURL:"dum.jpg"} alt="" />
                 {data[arrays-1].name && <h2>{data[arrays-1].name}</h2>}
                 {data[arrays-1].slogan && <p>{data[arrays-1].slogan}</p>}
                </div>  
              </div>
              <div className="cardi">
                <div className="btns">
                  <div className="buttonSection">
                    <button disabled={data[arrays-1].youtube===""} className="btn bg-white youtube call" onClick={() => handleCall(data[arrays-1].phone)}><img src="call.jpg" alt="" /></button>
                    <button disabled={data[arrays-1].website===""} onClick={() => handleLink(data[arrays-1].website)} className="btn btn-primary website"><img src="website.png" alt="webLink" /></button>
                  </div>
                  <div className="buttonSection">
                    <button disabled={data[arrays-1].facebook===""} className="btn btn-primary" id="messanger"><img src="./messanger.svg" onClick={() => handleMessenger(data[arrays-1].facebook)} alt="Facebook" /></button>
                    <button disabled={data[arrays-1].instagram===""} onClick={() => handleLink(data[arrays-1].instagram)} className="btn btn-secondary  insta"><img src="insta.png" alt="" /></button>
                  </div>
                  <div className="buttonSection">
                    <button disabled={data[arrays-1].youtube===""} className="btn btn-secondary insta youtube bg-white"
                      onClick={() => handleLink(data[arrays-1].youtube)} ><img src="youtube.jpg"
                        alt="" /></button>
                    <button className="btn btn-success whatsapp" onClick={() => handleWhatsApp(data[arrays-1].whatsapp)}><img src="whatsapp.png" alt="whatsApp" /></button>
                  </div>
                  <div className="buttonSection">
             <button className="btn insta mail" onClick={()=>handleMail(data[arrays-1].email)}><img src="mail.png" alt="Email" /></button>
            <button className="btn btn-secondry bg-white " onClick={() => handleLink(data[arrays-1].twitter)} ><img src="twitter.png" alt="twitter" /></button>
                  </div>
                </div>
              </div>
              {data[arrays-1].website && <div className="carding">
                <Qr link={data[arrays-1].website?data[arrays-1].website:"No Link is Added"}></Qr>
              </div>}
            </div>
          </div>
        </div>
    
    </div>
  );
}

export default Result;