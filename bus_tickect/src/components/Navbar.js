import React from "react";
import { useNavigate } from "react-router";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const loggedin = window.localStorage.getItem("user");
  let navigate = useNavigate();
  console.log(loggedin);
  const clickHomepage = (e) => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2
        className="logo"
        onClick={(e) => {
          clickHomepage(e);
        }}
      >
        <span>Bus</span>Wala
      </h2>

      {loggedin === null ? (
        <NavLink className="btn" style={{ color: "black" }} to="/login">
          Login!
        </NavLink>
      ) : (
        <NavLink className="btn" to="/logout">
          {loggedin}
        </NavLink>
      )}

      {loggedin === null ? (
        <NavLink className="btn" to="/signup">
          SignUp!
        </NavLink>
      ) : (
        <NavLink className="btn" to="/findbuses">
          Book tickets!
        </NavLink>
      )}

      <NavLink className="btn" to="/cancelt">
        Cancel Tickets!
      </NavLink>

      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="drop">
          <img className="iconn" src="icon.jfif" alt="user"></img>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item to="/getuserdetails">Profile!</Dropdown.Item>
          <Dropdown.Item to="/mybookings">My Bookings!</Dropdown.Item>
          {loggedin === true ? (
            <Dropdown.Item to="/logout">Logout!</Dropdown.Item>
          ) : (
            <Dropdown.Item to="/login">Login!</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
