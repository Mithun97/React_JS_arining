import { useState,useEffect } from "react";
import React from "react";

function UseStateDemo(){
let [name,setName] = useState(['Mithun']) ;
let [count,setCount] = useState([0]) ;

useEffect(() =>{
    console.log('UseEffect with an empty dependency array')
},[]
);
useEffect(() =>{
    console.log('UseEffect with no dependency array')
}
);
useEffect(() =>{
    console.log('UseEffect with `name` as the dependency')
},[name]
);
useEffect(() =>{
    console.log('UseEffect with `count` as the dependency')
},[count]
);
useEffect(() =>{
    console.log('UseEffect with both `name` and `counter` as dependencies')
},[name,count]
);


function incrementCounter(){
    setName(name+'a')
    setCount(count+1);
    console.log(name);
}

return (
    
    <div>
        <h1>useState Hook Demo</h1>        
       <div> <button onClick={incrementCounter}>Update Name</button></div>        
    </div>
    
);
}

export default UseStateDemo;