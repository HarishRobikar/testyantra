import React from 'react'
import Style from"./Footer.module.css"
import logo from "./partnerlogo2.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiUpArrowAlt } from "react-icons/bi";
const Footer = () => {
  return (
   <section>
    <div className={Style.maincontainer}>
        <div className={Style.header5}><h1>Subscribe to our Newsletter!</h1></div>
        <div className={Style.Searchbar}>
          <input type="text" placeholder='Enter Your Bisiness Email' />
          <button>Subscribe</button>
        </div>
        <div className={Style.cardssss}>
          <div className={Style.cardssss1}>
            <div className={Style.images}><img src={logo} alt="" /></div>
            <div className={Style.header6}><h2>Test Yantra Global is an Exclusive Platinum Partner of FireFlink.
            </h2></div>
            <div className={Style.header7}><h3>Let's get socially connected...</h3></div>
            <div className={Style.logoss}>
            <FaLinkedin  className={Style.logoss12}/>
            <FaYoutube className={Style.logoss12}/>
            <FaTwitter className={Style.logoss12}/>
            <FaFacebookSquare className={Style.logoss12}/>
            <FaInstagram className={Style.logoss12}/>
            </div>
           
          </div>
         
          <div className={Style.cardssss1}>
            <div className={Style.footerheading}>
              <h1>Services</h1>
            </div>
            <div className={Style.footerlists}>
              <ul>
                <li>
                  <Link>Software Testing (TaaS)</Link>
                </li>
                <li>
                  <Link>Software Development</Link>
                </li>
                <li>
                  <Link>Skills Enhancement</Link>
                </li>
                <li>
                  <Link>IT Consulting</Link>
                </li>
                <li>
                  <Link>Crowd Testing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={Style.cardssss1}>
          <div className={Style.footerheading}>
              <h1>Quick Links</h1>
            </div>
            <div className={Style.footerlists}>
              <ul>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Fireflink</Link>
                </li>
                <li>
                  <Link>Article</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={Style.cardssss1}>
          <div className={Style.footerheading2}>
              <h1>Contacts</h1>
            </div>
            <div className={Style.footerlists2}>
              <ul>
                <li>
                  <Link>Address:120 Adelaide Street West,</Link>
                </li>
                <li>
                  <Link>Suite 2500, Toronto, ON, M5H 1T1, Canada.</Link>
                </li>
                <li>
                  <Link>Email:hello@testyantraglobal.com</Link>
                </li>
                <li>
                  <Link>Phone:1800 572 7905</Link>
                </li>
                
              </ul>
            </div>
          </div>

        </div>
        <div className={Style.footerend}>
          <div className={Style.footerlast}>
            <div className={Style.footerpara}>
            <p>Copyright ©2024 Test Yantra Global. All rights reserved</p>
            </div>
      <div className={Style.footericon}>      
      <button><BiUpArrowAlt /></button>
      </div>
      </div>
    </div>
    </div>
   </section>
  )
}

export default Footer
