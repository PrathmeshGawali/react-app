import React,{useState} from "react";
import ReactDOM  from "react-dom";
import SchoolData from './Data.json'
import SearchBar from "./Components/SearchBar";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";
const Nav = () => {
   

    return(
        <nav className="header">
            <a className="AHEN" href="App">
                <span>A</span>
                <span>H</span>
                <span>E</span>
                <span>N</span>
            </a>
            
                <div className="headercontent">
                
                <a>Contact Us</a>
                <a href = "DashBoard">User</a>
                <a href = "SignIn">Sign In</a>
                <a href = "SignUp">Sign Up</a>
                <button  className="menu_png"   >
                    <img className="menu" src="./images/menu.png" />
                </button>
            </div> 

 
        </nav>
    )
}
export default Nav