import React from "react";
import Nav from "./Navbar";


function Register(){
   return(
    <div>
        <nav>
            <Nav />
        </nav>
       <div className="container">
            <div className="row">
                <div className = "col-sm-6">
                <img src={process.env.PUBLIC_URL + "/hero-b.png"} />
                </div>

                <div className = "col-sm-6">
                    <div className="mt-3">
                        <h3>Get Started for Free</h3>
                        <div className="mt-3">
                            <label>Email</label>
                            <input type="text" className="form-control w-75"/>
                        </div>
                        <div className="mt-3">
                            <label>Username</label>
                            <input type="text" className="form-control w-75"/>
                        </div>
                        <div className="mt-3">
                            <label>Mobile Number</label>
                            <input type="text" className="form-control w-75"/>
                        </div>
                        <div className="mt-3">
                            <label>Password</label>
                            <input type="password" class="form-control w-75" />
                        </div>
                        <div className="mt-3">
                            <label>Confirm Password</label>
                            <input type="password" class="form-control w-75" />
                        </div>
                        <div className="mt-3">
                                <input class="btn text-light" value="Sign Up" style={{"backgroundColor" : "#3f72af"}}/>
                        </div>

                    </div>        
                </div>    
            </div>    
       </div>       
    </div>
   )    

}

export default Register;