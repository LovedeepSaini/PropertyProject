import {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Buyer from "./Buyer";
function DeleteBuyer(){
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

let [delBuyer, setldelBuyer]=useState([]);
const[showData, setShowData]=useState(false)
const {id}=useParams();
useEffect(() => {
  sendbuyRequest()
 },[id]) 
 

let  deleteBuyer = (sel) => {setldelBuyer(sel)};

let formatdelBuyer= response => response.json().then(deleteBuyer);
 
let sendbuyRequest = () => fetch(`http://localhost:3001/buyer/${id}`,{
           method:"Delete",
     }).then(formatdelBuyer);

function re(){
  deleteBuyer();
 window.location='/'
}
 
      

return(
    <> 
    <br></br>
    <br/>
   <h3 className="align">Are you Sure you want to delete Buyer with id: {id}? </h3>
   
<br>
</br>
<br>
</br>
  <Link to ={`/buyer/${id}`}>
    
 <div className= "button-container">

  <Button variant="danger" onClick={handleShow2}>
       Delete Buyer
     </Button>

     </div>

     <Modal show={show2} onHide={handleClose2}>
       <Modal.Header closeButton>
         <Modal.Title>Delete Buyer</Modal.Title>
       </Modal.Header>
       <Modal.Body>Warning:Buyer with id {id} will be deleted permanently</Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose2}>
           Cancel
         </Button>
         <Button id ="SaveChanges" variant="primary" onClick={re} >
           Delete
         </Button>
       </Modal.Footer>
     </Modal>
     </Link>
     

    </>
    )
    }
export default DeleteBuyer;