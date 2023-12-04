import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Sellers from './components/Sellers';
import GetSellers from './components/GetSellers';
import Navbar from './components/Navbar';
import DeleteSellers from './components/DeleteSellers';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Buyer from "./components/Buyer";
import DeleteBuyer from "./components/DeleteBuyer";
import Property from "./components/Property";

function App() {
  return (
   <>
   <div className="sd"> 
  
      <Router>
        <Navbar />
        
        
        <div className="pages">
          <Routes>
            <Route path="/" element={<GetSellers />} />
            <Route path="/seller" element={<GetSellers />} />
            <Route path="/seller/:id" element={<DeleteSellers />} />
            <Route path="/buyer" element={<Buyer />} />
            <Route path="/buyer/:id" element={<DeleteBuyer />} />
            <Route path="/property" element={<Property />} />
          
            
           </Routes>
         </div>
      </Router>  
       </div>
   </>
  );
}

export default App;
