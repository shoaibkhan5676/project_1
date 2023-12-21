import React, { useState } from "react";


const Contact = () => {
    const [info,setinfo]=useState({
        fname:"",
        phone:"",
        message:"",
        email:"",

    })

    const handleChange=(event)=>{
        let value=event.target.value;
        let name=event.target.name;

        setinfo((prevInfo)=>({
            ...prevInfo,
            [name]:value

        }))

    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert(`My Name is ${info.fname}.My email is ${info.email}and my Phone Number is ${info.phone}and I want to Say That ${info.message}`)

      };



    return (
        <>
            <div className="my-5">
                <div className="text-center">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="container contact_div mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={handleSubmit} >

                        

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">FullName: </label>
                            <input type="text" value={info.fname} name="fname" class="form-control" onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter Your Name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone: </label>
                            <input type="number" value={info.phone} name="phone" class="form-control" onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter Mobile Number" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                            <input type="email" value={info.email} name="email" class="form-control" onChange={handleChange} id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>


                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Enter Message: </label>
                            <textarea name="message" value={info.message} class="form-control" onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                        </form>

                    </div>
                </div>
            </div>


        </>
    )
}
export default Contact
