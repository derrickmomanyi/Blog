import React from "react";
import { NavLink } from 'react-router-dom';
import "../css/Navbar.css"

function Navbar(){
    return(
        <>
        <nav >
            <div className="nav-cont">
              <h3 className="title"><span className="my-nav">Series Blog</span></h3>
               
                <NavLink to="/" ><span className="my-nav">Home</span></NavLink>                
                <NavLink to='/addblog' ><span className="my-nav">Add Blog</span></NavLink> 
                
                
            </div>
                
            
        </nav>
        </>
    )
}

export default Navbar;