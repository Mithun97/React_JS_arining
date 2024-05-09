// define post list functional component to fetch the data fro JSON place holder API

import { useState,useEffect } from "react";
import React from "react";

function FetchPOST(){
    let [postList,setPostList] = useState([]);
    let [loading,setLoading] = useState(true);
    let [error,setError] = useState("");

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")

             .then((response) =>
                {
                    if(response.ok){
                        return response.json();
                    }
                    throw new Error("Error in the response");
                }
        )
        .then((data) =>{
            setPostList(data)
            setLoading(false);
            console.log(error);
        }
    )
    .catch((error)=>{
        console.log(error);
        setLoading(false);
    }
    )
    },[]
) ;

return(
    <div>
        {error ? <p>{error}</p>: <p>Loading albums...</p> }
            <h1>Posts API</h1>
            <ul>
                {postList.map((postList) => (
                    <li key={postList.id}>{postList.title}</li>
                ))}
            </ul>
        </div>
);
}

export default FetchPOST;