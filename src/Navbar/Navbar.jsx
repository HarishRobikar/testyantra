import React from 'react'
import Style from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import images from "../Images/logo.svg"
import { FaChevronDown } from "react-icons/fa";



const Navbar = () => {
  return (
   <nav className={Style.navbar}>
    <div className={Style.navcontainer}>
        <div className={Style.head}>
            <h1>
                <Link>
                <img src={images} alt="" />
                </Link>
            </h1>
        </div>
        <div className={Style.navitems}>
            <ul >
                <li>
                    <Link to='/'>Home</Link>
                </li>                
                <li>
                    <Link to='/services' className={Style.Services}>Service <FaChevronDown className={Style.icon}/></Link>
                    <div className={Style.serviceLink}>
                        <ul>
                            <li><Link to='/sfttesting'>Software Testing (TAAS)</Link></li>
                            <li><Link to='/sftdevelopment'>Software Development</Link></li>
                            <li><Link to='/sftenhancement'>Software Enhancement</Link></li>
                            <li><Link to='/itconsult'>IT Consulting</Link></li>
                            <li><Link to='/crowd'>Crowd Testing</Link></li>
                        </ul>
                    </div>
                </li>
                <li className={Style.part}>
                    {/* <Link to='/partners' className={Style.Services}> */}
                    Partners <FaChevronDown className={Style.icon}/>
                    {/* </Link> */}
                    <div className={Style.partnerlink}>
                        <ul>
                            <li><Link to='/fire'>Fire Flink</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/articls'>Articles</Link>
                </li> 
                      <div className={Style.get}>
                        <button>Get in Touch</button>
                          <li>
                            {/* <button>Get in touch</button> */}
                              <Link to='/get in touch'>
                                  {/* <button >Get in Touch</button> */}
                              </Link>
                          </li>

                      </div>
                      {/* className={Style.btn1} */}
               
            </ul>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
