import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getusers } from "./store";

export default function LoginPage() {
  let result;
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    isloggedin: false,
  });
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [n, setN] = useState(false);

  const handleClose = () => {
    setShow1(false);
    navigate("/findbuses");
    // window.location.reload();
  };
  const handleClose2 = () => {
    setShow2(false);
    navigate("/login");
  };
  // const handleClose = () => setShow(false);
  // const handleClose2 = () =>{

  //     navigate("/login")
  // window.location.reload();
  // }

  // const handleShowusss=()=>{
  //     // console.log(n);

  // }

  const { username, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setUser({ ...user, isloggedin: true });
  }, []);

  const getprofile = async (e) => {
    e.preventDefault();
    var n = 0;
    var r = getusers();

    for (var k of r) {
      console.log(k);
      if (k.username === user.username && k.password === user.password) {
        window.localStorage.setItem("email", k.email);
        window.localStorage.setItem("user", k.username);
        n = 1;
        break;
      }
    }
    console.log(n);
    if (n === 1) {
      setShow1(true);
    } else {
      setShow2(true);
    }
    console.log(window.localStorage.getItem("user"));
  };

  return (
    <div>
      <div className="contlog">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4 heading">Login!</h2>
            <form onSubmit={(e) => getprofile(e)}>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label ll">
                  Username
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label ll">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </div>
              <Button type="submit" className="btn" variant="primary">
                Login!
              </Button>
              <Modal show={show1}>
                <Modal.Header closeButton>
                  <Modal.Title>Login!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you have successfully Logged in!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Okay!!!!
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal show={show2}>
                <Modal.Header closeButton>
                  <Modal.Title>Login!</Modal.Title>
                </Modal.Header>
                <Modal.Body>OOPS! You have entered wrong password!!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose2}>
                    Okay!!
                  </Button>
                </Modal.Footer>
              </Modal>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
