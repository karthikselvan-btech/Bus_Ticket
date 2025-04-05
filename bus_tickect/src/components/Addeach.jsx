import { useState } from "react";

const Addeach = ({ pushpassenger }) => {
  const [aadhar, setaadhar] = useState("");
  const [dob, setdob] = useState("");
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");

  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <h5 id="exampleModalLabel" style={{ color: "white" }}>
                Passenger Details!
              </h5>
            </div>

            <div>
              <div className="mb-3">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter your aadhar number"
                  name="aadhar"
                  value={aadhar}
                  onChange={(e) => setaadhar(e.target.value)}
                ></input>
              </div>

              {/* <div className="mb-3">

                                    <label htmlFor="Booking_Date" className="form-label">Booking Date</label>

                                    <input type="date" required className="form-control" placeholder="Select Date" name="bookingDate" value={bookingDate} onChange={(e) => onInputChange(e.target.value)}></input>

                                </div> */}

              <div className="mb-3">
                <input
                  type="date"
                  required
                  className="form-control"
                  placeholder="Select Date"
                  name="dob"
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                ></input>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Name of passenger"
                  name="name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                ></input>
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  required
                  className="form-control"
                  placeholder="Enter contact number"
                  name="contact"
                  value={contact}
                  onChange={(e) => setcontact(e.target.value)}
                ></input>
              </div>

              <input
                type="submit"
                className="btn btn-secondary"
                onClick={() => {
                  pushpassenger([aadhar, dob, contact, name]);
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addeach;
