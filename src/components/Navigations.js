import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
function NavigationButtons() {
    return (
    
            <div className="card text-center bg-dark">
                <NavBar/>
                <div className="card-header">
                    &copy; Myla Paduit
                </div>
                <div className="card-body">
                    <Link to="/">
                        <button className="btn btn-primary mx-1">Create</button>
                    </Link>
                    <Link to="/Read">
                        <button className="btn btn-danger mx-1">Read Or Delete</button>
                    </Link>
                    <Link to="/Update">
                        <button className="btn btn-primary mx-1">Update</button>
                    </Link>

                </div>
            
            </div>
          


   
    );
}

export default NavigationButtons