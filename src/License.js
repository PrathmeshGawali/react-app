import React from "react";
import ReactDOM  from "react-dom";
import Nav from "./Navbar.js"
import bgvideo from "./video/bg_video.mp4"
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
export default function Licence(){
    return(
        <div className="container">
            <Nav />
            <video className="video_session" autoPlay muted loop >
                <source src={bgvideo} type='video/mp4' />
            </video>
            <div className = "notebook">
                <h2>Fill the Form</h2>
                <div className="card">
                <div className="title">
                        <label>The Union of India</label>
                        <input placeholder= "Your State"type="text" required />
                    </div>
                    <a className="close_icon_l" href = "Service">
                            <IoMdClose />
                        </a>
                    <div className="content">
                    <div className="DOI">
                        <label>DOI :</label>
                            <input placeholder= "DOI"type="date" required />
                    </div>
                    <div className="COV">
                        <label>COV :</label>
                            <input placeholder= "Type"type="text" required />
                            <div className="icon3">
                            <FaChevronDown/>
                            </div>
                    </div>
                    <div className="DOB">
                        <label>DOB :</label>
                        <input  className="dateofbirth" placeholder= "DOB"type="date" required />
                        <label>BG :</label>
                        <input className= "bloodgroup" placeholder= "Blood Group"type="text" required />
                    </div>
                    <div className="Name">
                        <label>Name :</label>
                        <input placeholder= "Full Name "type="text" required />
                    </div>
                    <div className="sdw">
                        <label>S/D/W of :</label>
                        <input placeholder= "Name of Parent "type="text" required />
                    </div>
                    <div className="add">
                        <label>Address :</label>
                        <input placeholder= "Address "type="text" required />
                    </div>
                    <div className="city">
                        <label>City :</label>
                        <input placeholder= "City "type="text" required />
                        <label>PIN :</label>
                        <input placeholder= "PIN no. "type="text" required />
                    </div>
                    <div className="image">
                        <label className="img">Your Photo</label>
                        <input className="img_box" placeholder= "Your Photo"type="image" required />
                        <img className = "icon4"src="./images/Profile.png" alt="" />
                    </div>
                    </div>
                </div>
                <ul className="ulelements">
                    <li>
                        <label>DOI : Date of Issue </label>
                    </li>
                    <li>
                        <label>COV : Class of Vehicle </label>
                    </li>
                    <li>
                        <label>DOB : Date of Birth </label>
                    </li>
                    <li>
                        <label>BG: Blood Group </label>
                    </li>
                    <li>
                        <label>S/D/W of: Son/ Daughter/ Widow of  </label>
                    </li>
                </ul>
            </div>
            <a href = "Service"><button type="submit" className = "btn_l"  >Proceed to Payment</button></a>
            <div className = "footer_sign">
                <img src="./images/footer.png"/>
            </div>
        </div>

    )
}