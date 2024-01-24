import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faPerson, faCircleMinus, faPeopleGroup, faUser, faPen } from "@fortawesome/free-solid-svg-icons";

function Bookings() {
  let [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/booking", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        setBookings(data);
      });
    });
  }, []);

  const formattedDate = (bookingTime) => {
    const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" };
    const formatted = new Date(bookingTime).toLocaleDateString("en-UK", options);
    return formatted;
  };

  return (
    <>
      <div className="container-fluid">
        <br></br>
        <h3 className="heading">Bookings</h3>
        <br></br>

        <div class="table-responsive">
          <table class="table table-hover text-muted">
            <thead>
              <tr>
                <th scope="col" class="col-1">
                  Buyer
                </th>
                <th scope="col" class="col-1">
                  Property
                </th>
                <th scope="col" class="col-1">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <>
                  <tr>
                    <td>{booking.id}</td>
                    <td>{booking.propertyId}</td>
                    <td>{formattedDate(booking.time)}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Bookings;
