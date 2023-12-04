import Form from 'react-bootstrap/Form';


function Property(){
    

    return(
        <>
        <br></br>
        <h3>Property Search and Bookings</h3>
        <br></br>
        <div class= "align1">
          
            Type
         <Form.Select className="searchBar"aria-label="">
      <option>Any</option>
      <option value="1">Detached</option>
      <option value="2">Semi</option>
      <option value="3">Apartment</option>
    </Form.Select>
        Price
    <Form.Select  className="searchBar" aria-label="">
      <option>Any</option>
      <option value="1">50000</option>
      <option value="2">100000</option>
      <option value="3">200000</option>
      <option value="3">300000</option>
      <option value="3">400000</option>
    </Form.Select>
    Bedrooms
    <Form.Select className="searchBar" aria-label="">
      <option>Any</option>
      <option value="1">Mininmum One</option>
      <option value="2"> Minimum Two</option>
      <option value="3">Minimum Three</option>
      <option value="3">Minimum Four</option>
      <option value="3">Minimum Five</option>
    </Form.Select>
    Bathrooms
    <Form.Select className="searchBar" aria-label="">
      <option>Any</option>
      <option value="1">Mininmum One</option>
      <option value="2"> Minimum Two</option>
      <option value="3">Minimum Three</option>
    </Form.Select>
    Garden
    <Form.Select className="searchBar" aria-label="">
      <option>Any</option>
      <option value="1">Yes</option>
      <option value="2">No</option>
      
    </Form.Select>
    </div>
        </>

    )
}
export default Property;