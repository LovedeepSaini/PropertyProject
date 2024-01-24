import {useState, useEffect} from "react"
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faPerson, faCircleMinus, faPeopleGroup, faUser, faPen} from '@fortawesome/free-solid-svg-icons'

function Bookings(){


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

    return(
        <>
        <div className="container-fluid">
        <br></br>
         <h3 className="heading">Bookings</h3>
        <br></br>
            
                <div class="table-responsive">
                    <table class="table table-hover text-muted">
                        <thead> 
                            <tr>
                                <th  scope="col" class="col-1">Buyer</th>
                                <th  scope="col" class="col-1">Property</th>
                                <th  scope="col" class="col-1">Time</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking)=>(
                            <>
                            <tr>
                                    <td>{booking.id}</td>
                                    <td>{booking.propertyId}</td>
                                    <td>{booking.time}</td>
                            </tr>
                            </>
                            )
                            )}
                        </tbody>
                    </table>
                    </div>
                 </div>   
    
                
           
   
        </>
    )
}

export default Bookings;