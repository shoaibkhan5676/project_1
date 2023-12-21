import React from "react";
import {Routes,Route} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App=()=>{
  return(
    <>
    <Navbar/>


    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/about" Component={About} />
      <Route exact path="/services" Component={Services} />
      <Route exact path="/contact" Component={Contact} />
      <Route path="/*" Component={Error}/>
    </Routes>
    <Footer/>
    
    
    </>
  )
}

export default App