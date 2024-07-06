import React, {useEffect, useRef} from "react";
import { useState } from "react";
import ReactDOM  from "react-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import Nav from "./Navbar.js"
import bg from "./video/drone.mp4"
import App from "./App.js";
import { firestore } from "./firebase.js"
import { signInWithPopup } from "firebase/auth";
import './firebaseConfig'; // Add this line prevent firebase not loading error
import { getFirestore, addDoc, collection } from "firebase/firestore"; 
import { getDocs } from "firebase/firestore";
function SignIn() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
  
    const db = getFirestore();
  
    const saveDataToFirestore = async () => {
        const docRef = await addDoc(collection(db, "myCollection"), {
          field1: inputValue1,
          field2: inputValue2,
        });
        alert("Document written to Database");
    };

    return(
        <div className="container">
            <Nav />
            <img className="video_sign" src="./images/login.jpg"></img>
        <div className="wrapper_div">
        <div className = "wrapper">
            <a className="close_icon" href = "Service">
                <IoMdClose />
            </a>
            <div className = "login">
                <h2>Login</h2>
                <form >
                    <div className = "inputbox">
                        <span className = "icon">
                            <IoIosMail />
                        </span>
                        <input type="email" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} required />
                        <label>Email </label>
                    </div>
                    <div className = "inputbox">
                        <span class = "icon">
                            <FaLock />
                        </span>
                        <input id = "password" type="password" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} required  />
                        <label for ="password">Password </label>
                    </div>
                    <div className="remember_forgot">
                        <label><input type = "checkbox" />Remember me </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" class = "btn" href = "Service" onClick={saveDataToFirestore}>Login</button>
                    <div className="login_register">
                        <p>Dont Have an account?<a class = "login_link " href="SignUp"> Register</a></p>
                    </div>
    
                    <button type="submit" class = "google" ><img class = "sml_img" src="./images/google.png " />Google</button>
    
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
    
 export default SignIn ;


