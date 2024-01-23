import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
 
import './App.css';
 
import GetSellers from './components/GetSellers';
import Navbar from './components/Navbar';
import SellerDetails from './components/SellerDetails';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Buyer from "./components/Buyer";
import Footer from "./components/Footer";
 
import PropertySearch from "./components/PropertySearch";
import Home from "./components/Home";
 
function App() {
  return (
<>
<div className="sd"> 
<Router>
<Navbar />

<div className="pages">
<Routes>
<Route path= "/home" element={<Home />}/>
<Route path="/" element={<GetSellers />} />
<Route path="/seller" element={<GetSellers />} />
<Route path="/seller/:id" element={<SellerDetails />} />
<Route path="/buyer" element={<Buyer />} />
<Route path="/property" element={<PropertySearch />} />
<Route path="/propertysearch" element={<PropertySearch />} />

</Routes>
</div>
<Footer/>
</Router>  
</div>
</>
  );
}
 
export default App;