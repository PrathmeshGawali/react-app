import React from "react";
import Nav from "./Navbar.js"
import './dashboard.css'
import { CgProfile } from "react-icons/cg";
import { FaChartPie } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

export default function DashBoard () {
    return(
        <>
            <Nav />
            <div className="dashboard_wrapper">
                <div className="dashboard">
                    <div className="navigation">
                    <div className="AHEN">
                    <span>A</span>
                    <span>H</span>
                    <span>E</span>
                    <span>N</span>
                    </div>
                    <div className="functions">
                        <a className="each">
                            <FaChartPie />
                            <p>Summary</p>
                        </a>
                        <a className="each">
                            <GrTransaction />
                            <p>Transaction</p>
                        </a>
                        <a className="each">
                            <IoStatsChartSharp />
                            <p>Statistics</p>
                        </a>
                        <a className="each">
                            <MdPeople />
                            <p>Customers</p>
                        </a>
                        <a className="each">
                            <IoCarSport />
                            <p>Cars</p>
                        </a>
                    </div>
                    <div className="profile">
                        <CgProfile className="CgProfile"/>
                        <h3>Company Name</h3>
                        <p>Upgrade</p>
                    </div>
                    </div>
                    <div className="business">
                      <div className="Title">
                        <h2>Business Dashboard</h2> 
                        <div>
                        <button>
                            <IoMdSearch />
                        </button>
                        <button>
                            <LuListTodo />
                        </button>
                        </div>
                        </div>
                        <div className="panels">
                            <div className="eachpanel">
                                <div>
                                <h3>Customers</h3>
                                <h5>1000</h5>
                                </div>
                                <IoIosPeople/>
                            </div>
                            <div className="eachpanel">
                                <div>
                                <h3>Income</h3>
                                <h5>1,00,000 /-</h5>
                                </div>
                                <FaMoneyCheckAlt/>
                            </div>
                            <div className="eachpanel">
                                <div>
                                <h3>Rides</h3>
                                <h5>3200</h5>
                                </div>
                                <IoCarSport />
                            </div>
                        </div>
                        <h5 className = "marketplace">Marketplace</h5>
                        <div className="analyse">
                            <div className="analytics">
                                <div >
                                    <div className="analytics1">
                                        <div>
                                        <h3>Data Analytics Overview</h3>
                                        <h5>See how your account grow and how can you boost it</h5>
                                        </div>
                                        <button>START
                                        </button>
                                    </div>
                                    <div className="analytics1">
                                        <div>
                                        <h3>Explore Financial Flow</h3>
                                        <h5>October 2023</h5>
                                        </div>
                                        <button>EXPLORE</button>
                                    </div>
                                </div>
                                <div className="analytics2">
                                    <h5>UPGRADE TO PRO</h5>
                                    <MdWorkspacePremium />
                                    <h2> 2,999 /-</h2>
                                    <p>Unlock our premium features </p>
                                </div>
                            </div>
                        </div>
                        <div className="recent">
                            <h3>Recent Orders</h3>
                            <h5>See All</h5>
                        </div>
                        <div className="recentlogs">
                            <h5>#76542</h5>
                            <h5>Ramesh Yadav</h5>
                            <h5>05/01/23</h5>
                            <h5>2500 /-</h5>
                            <h5>Complete</h5>
                        </div>
                        <div className="recentlogs">
                            <h5>#76437</h5>
                            <h5>Suresh Patel</h5>
                            <h5>21/07/23</h5>
                            <h5>3000 /-</h5>
                            <h5>Incomplete</h5>
                        </div>
                    </div>
                    <div className="summary">
                        <h1>Summary</h1>
                        <div className="balance">
                            <p>YOUR TOTAL EARNING</p>
                            <h2>$ 90 000 /-</h2>
                            <button>+</button>
                        </div>
                        <div className="activity">
                            <div className="activity_s">
                                <h2>Activity</h2>
                                <h4>See All</h4>
                            </div>
                            <div className="eachactivity">
                                <button>
                                    <FaWallet />
                                </button>
                                <div className="eachtext">
                                <h3>Withdraw Earning</h3>
                                <p>12:30</p>
                                </div>
                                <h2>1000 /-</h2>
                            </div>
                            <div className="eachactivity">
                                <button>
                                    <FaHistory />
                                </button>
                                <div className="eachtext">
                                <h3>Update Log History</h3>
                                <p>11:30</p>
                                </div>
                                <h2>100 /-</h2>
                            </div>
                            <div className="eachactivity">
                                <button>
                                    <MdPayment />
                                </button>
                                <div className="eachtext">
                                <h3>Paying Website Tax</h3>
                                <p>11:20</p>
                                </div>
                                <h2>-1000 /-</h2>
                            </div>
                        </div>
                        <div className="functionalities">
                            <button className="f_button">
                                <IoIosPeople/>
                                <h3>Todays customers</h3>
                                <h4>200</h4>
                            </button>
                            <button className="f_button">
                                <IoCarSport />
                                <h3>Accessible Cars</h3>
                                <h4>21</h4>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <img className="footer" src="./images/footer.png"/>

        </>
    )
}