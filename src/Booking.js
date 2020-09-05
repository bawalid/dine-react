import React, { useState } from "react";
import "./styles/Booking.scss";
import Header from "./Header_Module";
import Footer from "./Footer_Module";
import lines from "./images/patterns/pattern-lines.svg";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Booking() {
  const [error, setError] = useState({
    name: false,
    email: false,
    day: false,
    month: false,
    year: false,
    hour: false,
    minute: false,
    people: false,
  });
  const [people, setpeople] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({
      name: false,
      email: false,
    });
    var name = document.forms["booking-form"]["fname"].value;
    var email = document.forms["booking-form"]["femail"].value;
    if (name === "") {
      setError((prev) => ({ ...prev, name: true }));
    }
    if (email === "") {
      setError((prev) => ({ ...prev, email: true }));
    }
  };
  return (
    <div className='booking-page'>
      <Header
        title='Reservations'
        text='We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.'
      />
      <section className='booking'>
        <img src={lines} alt='' className='booking__lines' />
        <form name='booking-form' className='booking__form'>
          <TextField
            required
            id='standard-basic'
            label='Name'
            name='fname'
            error={error.name}
            helperText={error.name && "This field is required"}
          />
          <TextField
            required
            id='standard-basic'
            label='Email'
            type='email'
            name='femail'
            error={error.email}
            helperText={error.email && "This field is required"}
          />
          <div className='form__time-date'>
            <p className='time-date__label'>Pick a date</p>

            <TextField
              required
              id='standard-basic'
              label='Date'
              type='date'
              defaultValue='2020-01-01'
            />
          </div>
          <div className='form__time-date'>
            <p className='time-date__label'>Pick a time</p>

            <TextField
              required
              id='standard-basic'
              label='Time'
              type='time'
              defaultValue='00:00'
            />
          </div>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item>
              <RemoveIcon
                onClick={() => setpeople(people === 1 ? 1 : people - 1)}
                style={{ cursor: "pointer" }}
              />
            </Grid>
            <Grid item>
              <TextField
                id='input-with-icon-grid'
                label='Number of people'
                value={people === 1 ? `${people} persone` : `${people} people`}
                className='nbr-people'
              />
            </Grid>
            <Grid item>
              <AddIcon
                onClick={() => setpeople(people + 1)}
                style={{ cursor: "pointer" }}
              />
            </Grid>
          </Grid>

          <button type='submit' onClick={handleSubmit}>
            MAKE RESERVATION
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Booking;
