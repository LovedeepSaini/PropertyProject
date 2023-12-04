import {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GetSellers from "./GetSellers";
function DeleteSellers(){
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1= () => setShow1(true);

let [delseller, setdelSellers]=useState([]);
const[showData, setShowData]=useState(false)
const {id}=useParams();
useEffect(() => {
  senddelRequest()
 },[id]) 
 

let  deleteSellers = (sel) => {setdelSellers(sel)};

let formatdelSellers = response => response.json().then(deleteSellers);
 
let senddelRequest = () => fetch(`http://localhost:3001/seller/${id}`,{
           method:"Delete",
     }).then(formatdelSellers);

function re(){
  deleteSellers();
 window.location='/'
}
 
      

return(
    <> 
    <br></br>
    <br/>
   <h3 className="align">Are you Sure you want to delete Seller with id: {id}? </h3>
   
<br>
</br>
<br>
</br>
  <Link to ={`/seller/${id}`}>
    
 <div className= "button-container">

  <Button variant="danger" onClick={handleShow1}>
       Delete Seller
     </Button>

     </div>

     <Modal show={show1} onHide={handleClose1}>
       <Modal.Header closeButton>
         <Modal.Title>Delete Sellers</Modal.Title>
       </Modal.Header>
       <Modal.Body>Warning:Seller with id {id} will be deleted permanently</Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose1}>
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
export default DeleteSellers;