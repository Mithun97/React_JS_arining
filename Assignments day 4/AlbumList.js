import { useState,useEffect } from "react";
import axios from "axios";

function AlbumbList(){

    let [albums,setAlbums,] = useState([]);
    let [isloading,setIsLoading] = useState(true);
    let [error,seterror] = useState("");

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> {
            setAlbums(response.data);
            setIsLoading(false);
        })
        .catch((error)=> {
            seterror("Failed to get data");
            setIsLoading(false);
        })
    },[])
    return(
        <div>
            {error ? <p>{error}</p>: isloading ? <p>Loading albums...</p> :null}
                <h1>Posts from axios</h1>
                <ul>
                    {albums.map((albums) => (

                        <li key={albums.id}>{albums.title}</li>
                    ))}
                </ul>
            </div>
    );
}

export default AlbumbList;