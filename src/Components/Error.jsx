import React from "react";
import { useNavigate } from "react-router-dom";


const Error=()=>{
    const navi=useNavigate()
    const handleclick=()=>{
        navi("/")
    }
    return(<>

    <h1>Error: 404</h1><h3>Page Not Found</h3>
    <button className="btn btn-primary" onClick={handleclick}>Go to Homepage</button>
    
    
    
    
    
    </>)
}

export default Error