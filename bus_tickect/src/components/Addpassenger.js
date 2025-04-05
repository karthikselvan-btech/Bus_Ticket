import React, { useState } from "react";

import { Navigate, useLocation, useNavigate } from "react-router";
import Addeach from "./Addeach";
import { getpassengers, setpassengers } from "./store";

function Addpassenger({ loggedinuser }) {
  let navigate = useNavigate();
  const [x, setx] = useState();
  const [rx, setrx] = useState([]);
  let location = useLocation();
  console.log(location.state);
  let today = new Date().toISOString().slice(0, 10);

  const [passengers, setPassenger] = useState([]);

  const [passengerdata, setPassengerdata] = useState([]);

  const [count, setcount] = useState(0);

  const {
    aadhar,
    bookingDate,
    cancelStat,
    dob,
    name,
    username,
    contact,
    journeyStat,
  } = passengers;

  const onInputChange = (e) => {
    setPassenger({ ...passengers, [e.target.name]: e.target.value });
  };

  const pushpassenger = (e) => {
    setPassenger([...passengers, e]);
  };
  console.log(passengers);

  const paymentclickhandler = (e) => {
    var r = String(Math.floor(Math.random() * 100));
    var k = "Snr" + r;
    const x = {};
    var n = [
      ...passengers,
      window.localStorage.getItem("email"),
      location.state.busid,
    ];
    x[k] = n;
    setpassengers(x);
    console.log(getpassengers());
    navigate("/makepayment", {
      state: {
        bus_id: location.state.busid,
        number: passengers.length,
        price: location.state.price,
        passengerdata: passengers,
        snrno: k,
      },
    });
  };
  const setval = (r) => {
    setx(r);
    const n = [];
    for (var i = 1; i <= r; i++) {
      n.push(i);
    }
    setrx(n);
  };

  return (
    <div className="cont2">
      <p style={{ color: "white" }}>
        <br />
        Busname - {location.state.bus_name}
        <br />
        Booking_Date - {location.state.departure_date}
        <br />
        location_from - {location.state.location_from}
        <br />
        location_to - {location.state.location_to}
        <br />
        departure_time -{location.state.departure_time}
        <br />
      </p>
      <br></br>

      <br></br>
      <input
        type="text"
        value={x}
        className="form-control"
        placeholder="enter the count"
        style={{ width: "50%", marginLeft: "25%" }}
        onChange={(e) => setval(e.target.value)}
      />
      <button
        type="button"
        className="btn2 btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Passenger
      </button>

      <br />

      <br />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={(e) => paymentclickhandler(e)}
      >
        Make Payment
      </button>

      {rx.map((m) => {
        return <Addeach key={m} pushpassenger={pushpassenger} />;
      })}
    </div>
  );
}

export default Addpassenger;
