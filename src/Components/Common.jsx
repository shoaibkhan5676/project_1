import React from "react";
import { NavLink } from "react-router-dom";


const Common=(props)=>{
    console.log(props.image)
    return (
        <>
        <section id="header"className="d-flex align-items-center" >

            <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">

                            
                            <div className="col-6 col-md-6 pt-5 mt-5  pt-lg-0 order-2 order-lg-1 ">
                                <h1>{props.message} <strong className="brand-name">Code Fly</strong></h1>
                                <h2>We are the team of Talented developers making Websites</h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started">{props.button}</NavLink>
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-6 order-1 order-lg-2 header-img">
                                <img src={props.image} className="img-fluid animated" alt="img" />

                            </div>
                            </div>

                        </div>

                    </div>
            </div>
        </section>
        
        
        </>
    )
}
export default Common
