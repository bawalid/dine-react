import React from "react";
import "./styles/Reservation.scss";
import Btn from "./Button";

function Reservation_Module() {
  return (
    <div className='reservation'>
      <h2>Ready to make a reservation?</h2>
      <Btn type='light' name='book a table' />
    </div>
  );
}

export default Reservation_Module;
