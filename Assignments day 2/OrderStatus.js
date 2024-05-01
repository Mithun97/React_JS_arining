import { useState } from "react";
 
function OrderDetails() {
    let [order, setOrder] = useState({
        id: 'ORD123',
        status: 'Processing',
        customer: 'John Doe',
        items: 3
    });
 
    function updateDetailse(){
        var mylist = document.getElementById("myList");
        let favourite= mylist.options[mylist.selectedIndex].text;
        console.log(favourite);
        setOrder({...order,status:favourite})
    }

    return (
        <div>
            <h1>{order.id}</h1>
            <h1>{order.status}</h1>
            <h1>{order.customer}</h1>
            <h1>{order.items}</h1>
            {/* <button onClick={updateDetailse}>Update Deatils</button><br></br><br></br> */}
            <b> Select the status from the dropwonlist </b>  
     <select id = "myList" onChange = {updateDetailse} >  
     <option> ---Choose Status--- </option>  
     <option> Processing </option>  
     <option> Shipped </option>  
     <option> Delivered </option>  
     </select>
        </div>
    ); 
}

<h1 className= "Header-Change">Welcome to Order Page</h1>
export default OrderDetails;