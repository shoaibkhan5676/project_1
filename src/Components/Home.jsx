
import React from "react"
import Common from "./Common"
import web from "../Images/Homepage.svg"


const Home=()=>{
    return(
        <>
        <Common
        message="Grow your Business with"
        image={web}
        visit="/services"
        button="Get Started"
        />
        
        
        </>
    )
}
export default Home