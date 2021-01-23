import React from 'react'
import 'bootstrap'
import {Link} from 'react-router-dom'
import NavBar from '../Navbar'

export const Problem = () => {
    return (
        <div className = "my-3">
            <div className="card shadow-lg">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to = "/problem"> <button className = "btn btn-primary my-3">Solve Challenge</button></Link>
                </div>
            </div>
        </div>
    )
}

const ProblemList = () => {
    return (
                <div className = "container-fluid p-0">
                <NavBar />
                <div className = "row my-3 justify-content-center">
                    <h3>Problems</h3>
                </div>
                <div className = "row">
                    <div className = "col-2"></div>
                    <div className = "col-8">
                        <Problem />
                    </div>
                    <div className = "col-2"></div>
                </div>
                
                </div>
            )
}

export default ProblemList
