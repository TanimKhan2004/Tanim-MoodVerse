import React from 'react';
import './Location.css'; // Import your CSS file

function Location() {
  return (
    <div className="LocationContainer">
      <div className="LocationTitle">Enter your Location</div>
      <div className="InputGroup">
        <input className="InputBox" type="text" placeholder="House Number" />
      </div>
      <div className="InputGroup">
        <input className="InputBox" type="text" placeholder="Street" />
      </div>
      <div className="InputGroup">
        <input className="InputBox" type="text" placeholder="Town/City" />
      </div>
      <div className="InputGroup">
        <input className="InputBox" type="text" placeholder="Postal Code" />
      </div>
      <div className="InputGroup">
        <input className="InputBox" type="text" placeholder="Country" />
      </div>
      <button className="SubmitButton">Submit</button>
    </div>
  );
}

export default Location;
