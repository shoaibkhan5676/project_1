import React from "react";
import web from "../Images/Aboutpage.svg"
import Common from "./Common";

const About=()=>{
    return (
        <>
           <Common
        message="Welcome to About Page"
        image={web}
        visit="/contact"
        button="Contact Now"
        />
        
        
        </>
    )
}
export default About
