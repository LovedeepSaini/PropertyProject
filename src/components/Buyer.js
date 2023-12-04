import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Link, useNavigate, useParams } from 'react-router-dom'
import DeleteBuyer from "./DeleteBuyer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus , faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {Card , Row , Col} from 'react-bootstrap';
function Buyer(){

//states defined for bootstrap modals
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

   
// useParams defined to delete by id
const {id}=useParams();
//states used for create and delete requests
let [seller, setSellers]=useState([]);
//  let [delseller, setdelSellers]=useState([]);
const [editId, setEditId] = useState(0);


//Get Sellers
let  getSellers = (sel) => setSellers(sel);

let formatSellers = response => response.json().then(getSellers);
 
let sendRequest = () => fetch("http://localhost:3001/buyer",{
           method:"GET",
     }).then(formatSellers);



//delete Seller
// let  deleteSellers = (sel) => setdelSellers(sel);

// let formatdelSellers = response => response.json().then(deleteSellers);
 
// let senddelRequest = () => fetch(`http://localhost:3001/seller/${id}`,{
//            method:"DELETE",
//      }).then(formatdelSellers);  

//Add Sellers

let saveData=()=>{
    let seller={

        "firstName":document.getElementById("fname").value,

        "surname":document.getElementById("sname").value

    }


    let ref=fetch("http://localhost:3001/buyer",{

        method:"POST",

        headers: {"Content-Type": "application/json"},

        body: JSON.stringify(seller)

    }
)
    }
     function createSel(){
        saveData();
        window.location.reload();
     }
     //edit data
     

return(
    <>
    <br />
    <br/>
  <div className="button-container">  
<button 
className="btn-primary btnSize"
onClick={sendRequest}><FontAwesomeIcon icon={faList} size="2x"/></button>



<Link to={"/buyer"}>
    {/* Bootstrap modal to add new Seller */}
<button  className="btn-primary btnSize" onClick={handleShow}>
       <FontAwesomeIcon icon={faUserPlus} size="2x"/>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Buyer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <br />
        First Name:<input type="text"  id="fname"/>
    <br />
    Last Name:<input type="text" id="sname"/>
    <br />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={createSel}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>



</Link>
</div>
<br />


<Row> 
{seller.map((sell) =>(
        <Col key={sell.id} sm={3}>   
 
       
<Card  className ="card1" style={{ width: '16rem' }}>
      <Card.Body className="div1">
        <Card.Title className="title"> <FontAwesomeIcon icon={faUserCircle} /> {sell.firstName} {sell.surname}</Card.Title>
        <Card.Text className="body1">
        <>
             <b> id :</b> {sell.id} 
              <br></br>
             <b>FirstName : </b> {sell.firstName}
              <br></br> 
               <b>LastName : </b> {sell.surname}
               <br></br> 
               <b>Address : </b> {sell.address}
               <br></br> 
               <b>Post Code : </b> {sell.postcode}
               <br></br> 
               <b>Phone : </b> {sell.phone}

               
      </>

        </Card.Text>
        <Link to ={`/buyer/${sell.id}`}><Button variant="danger" onClick={handleShow2}>
                <FontAwesomeIcon icon={faTrash} /></Button></Link>
      </Card.Body>
    </Card>
    </Col>

  

    )
            )}
             
             </Row> 
            

    </>
    )
    }
export default Buyer;