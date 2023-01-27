import React from 'react'
import QRCode from "react-qr-code";
function Qr(props) {
  return (
    <div style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}>
    <QRCode
    size={356}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={props.link}
    viewBox={`0 0 356 356`}
    />
</div>
  )
}

export default Qr

