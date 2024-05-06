import { useState } from "react";
import './tableDesign.css';

function MobileList(){
    let [mobilearray,setMobilearray] =useState([
        {id:1,name:"Apple",description:"The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.", price:130000,rating:5, stockStatus:"In Stock"},
        {id:2,name:"Samsung ",description:"Samsung Galaxy is a line of Android smartphones and smart devices. Learn about the various Galaxy products, their key features and release histories.", price:80000,rating:4, stockStatus:"In Stock"},
        {id:3,name:"Motorola",description:"Motorola, Inc was an American multinational telecommunications company based in Schaumburg, Illinois. It was founded in 1928 as Galvin Manufacturing", price:45000,rating:5, stockStatus:"Out of Stock"},
        {id:4,name:"Redmi",description:"Redmi phones use Xiaomi's MIUI user interface on top of Android. Models are divided into the entry-level Redmi, the mid-range Redmi Note, and the high-end Redmi", price:15000,rating:4, stockStatus:"Out of Stock"}
    ]);

    return (
        <div>
            <h1>List Of Mobiles</h1>
            <table class="center">
                <tr class="trStyle">
                    <th>Name</th>
                    <th className="tableHeader">Description</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Stock</th>
                </tr></table>
            {mobilearray.map( (mobile) => (
                <div key={mobile.id}>
    
    <table class="center">
    <tr class="tr1Style">
                                <td class="tdStyle">{mobile.name}</td>
                                <td class="tdStyle">{mobile.description}</td>
                                <td class="tdStyle">{mobile.price}</td>
                                <td class="tdStyle">{mobile.rating}</td>
                                <td class="tdStyle">{mobile.stockStatus}</td>
                            </tr>
    
                </table>
                </div>
            ))}
            </div>
        
    );
    }
    
    export default MobileList;