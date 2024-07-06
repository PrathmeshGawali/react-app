import React from "react";
import ReactDOM  from "react-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import Nav from "./Navbar.js"
import bg from "./video/drone.mp4"

export default function SignUp(){
    return (
    <div className="container">
        <Nav />
        <img className="video_sign" src="./images/login.jpg"></img>
        <div className="wrapper_div">
    <div className = "wrapper">
        <a className="close_icon" href = "Service">
            <IoMdClose /> 
        </a>
        <div className = "login">
            <h2>Register</h2>
            <form action="#">
                <div className = "inputbox">
                    <span className = "icon">
                        <CgProfile />
                    </span>
                    <input type="text" required />
                    <label>Username </label>
                </div>
                <div className = "inputbox">
                    <span className = "icon">
                        <IoIosMail />
                    </span>
                    <input type="email" required />
                    <label>Email </label>
                </div>
                <div className = "inputbox">
                    <span className = "icon">
                        <FaLock />
                    </span>
                    <input id = "password" type="password" required />
                    <label for ="password">Password </label>
                </div>
                <div className="remember_forgot">
                    <label><input type = "checkbox" />I agree to the terms and conditions* </label>
                    
                </div>
                <button type="submit" class = "btn" href= "Service">Register</button>
                <div className="login_register">
                    <p>Already Have an account?<a className = "login_link " href="SignIn"> Login</a></p>
                </div>
                <button type="submit" className = "google" ><img className = "sml_img" src="./images/google.png " />Google</button>
            </form>
        </div>
    </div>
    </div>
    <div class = "footer_sign">
        <img src="./images/footer.png"/>
    </div>
    </div>
    )
}