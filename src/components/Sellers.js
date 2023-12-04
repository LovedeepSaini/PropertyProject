function Sellers(){
    let saveData=()=>{
    let seller={

        "firstName":document.getElementById("fname").value,

        "surname":document.getElementById("sname").value

    }


    let ref=fetch("http://localhost:3001/seller",{

        method:"POST",

        headers: {"Content-Type": "application/json"},

        body: JSON.stringify(seller)

    }
)
    }

return(
    <>

    First Name:<input type="text" id="fname"/>
    <br />
    surname Name:<input type="text" id="sname"/>
    <br />
    <input 

	type="button"
    className ="btn btn-primary"

	id="btn1"

	value="Save"

	onClick={saveData}/>
    </>
    )
    }
export default Sellers;