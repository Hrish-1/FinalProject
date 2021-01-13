import React from "react";
import Nav from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
    return( 
           <div>
               <Nav />
               <h1> THIS is HOME Page!!!</h1>
           </div> 
           
    
        
    );

}

export default Home;