import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {Sdata.map((element,index)=>{
                                return(
                                    <Card key={index} image={element.image} title={element.title} disc="Let's Build the Modern and Lastest Awesome Websites" button="Start" />
                                )

                            })}


                          

                            {/* <Card image={web} title="Web Development" disc="Let's Build the Modern and Lastest Awesome Websites" button="Start" />
                            <Card image={web} title="Web Development" disc="Let's Build the Modern and Lastest Awesome Websites" button="Start" />
                            <Card image={web} title="Web Development" disc="Let's Build the Modern and Lastest Awesome Websites" button="Start" />
                            <Card image={web} title="Web Development" disc="Let's Build the Modern and Lastest Awesome Websites" button="Start" />
                            <Card image={web} title="Web Development" disc="Let's Build the Modern and Lastest Awesome Websites" button="Start" />
                            <Card image={web} title="Web Development" disc="Let's Build the Modern and Lastest Awesome Websites" button="Start" /> */}





                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
export default Services
