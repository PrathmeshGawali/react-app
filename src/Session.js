import React from "react";
import ReactDOM  from "react-dom";
import Nav from "./Navbar.js"
import bgvideo from "./video/bg_video.mp4"
import { IoIosMail } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
export default function Session(){
    return(
        <div className="container">
            <Nav />
            <video className="video_session" autoPlay muted loop >
                <source src={bgvideo} type='video/mp4' />
            </video>
            <div className="wrapper_session_div">
            <div className="wrapper_session">
                <a className="close_icon" href = "Service">
                    <IoMdClose />
                </a>
                <div className = "login">
                <h2>Book a Session</h2>
                <form action = "#">
                    <div className = "inputbox">
                        <span className = "icon">
                            <FaLocationDot />
                        </span>
                        <input type="text" required />
                        <label>Location</label>
                    </div>
                    <div className = "inputbox">
                        <span className = "icon">
                            <MdCall />
                        </span>
                        <input type="text" required />
                        <label>Contact No.</label>
                    </div>
                    <div className = "inputbox">
                        <span className = "icon">
                            <FaCar />
                        </span>
                        <span className = "icon2">
                            <FaChevronDown/>
                        </span>
                        <input type="text" required />
                        <label>Type of Vehicle</label>
                    </div>
                    <div className = "inputbox">
                        <span className = "icon">
                            <MdNumbers />
                        </span>
                        <input type="text" required />
                        <label>Session No.</label>
                    </div>
                    <div className = "inputbox">
                        <span className = "icon">
                            <FaIndianRupeeSign />
                        </span>
                        <span className = "icon2">
                            <FaChevronDown/>
                        </span>
                        <input type="text" required />
                        <label>Price</label>
                    </div>
                    <div className = "inputbox">
                        <input type="date" required />
                        <label>Date</label>
                    </div>
                    <button type="submit" class = "btn" href = "Service">Proceed to Payment</button>
                </form>
                </div>
            </div>
            </div>
            <div className = "footer_sign">
                <img src="./images/footer.png"/>
            </div>
        </div>

    )
}