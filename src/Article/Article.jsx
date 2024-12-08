import React from 'react'       
import Style from"./Article.module.css"
import card1 from "./asset 10.jpeg"
import { FaArrowRight } from "react-icons/fa";
import card2 from "./asset 11.jpeg"
import card3 from "./asset 12.jpeg"
const Article = () => {
  return (
   <section>
    <div className={Style.headercard2}><h1>Our Recent Articles
      </h1></div>
      <div className={Style.subcard3}>
        <div className={Style.subcards3}>
          <div className={Style.kard1}><img src={card1} alt="" /></div>
          <div className={Style.subpara}><p>Blog  |  Software Testing</p> </div>
          <div className={Style.header}><h3>Comprehensive Guide to Developing Test Scripts for Software Testing</h3></div>
          <div className={Style.paara}><p>Effective software testing is essential for the delivery of high-quality software products. The development of test scripts is a critical...</p></div>
          <div className={Style.btn}>
            <button>Read More <FaArrowRight /></button>
          </div>
        </div>
        <div className={Style.subcards3}>
        <div className={Style.kard1}><img src={card2} alt="" /></div>
        <div className={Style.subpara}><p>Blog  |  Categories of Tests</p> </div>
        <div className={Style.header1}><h3>Guidelines for Writing Effective Unit Tests</h3></div>
        <div className={Style.paara1}><p>Learn effective unit testing techniques to enhance code quality and development speed. Discover essential tools...</p></div>  
        <div className={Style.btn1}>
            <button>Read More <FaArrowRight /></button>
          </div>
        </div>
        <div className={Style.subcards3}>
        <div className={Style.kard1}><img src={card3} alt="" /></div>
        <div className={Style.subpara}><p>Blog  |  Test Data</p> </div>
        <div className={Style.header3}><h3>Automation Testing Tools: Selenium, Cypress, Playwright, Robot Framework vs. FireFlink</h3></div>
        <div className={Style.paara3}><p>Dive into the specifics of renowned automation tools like Selenium, Cypress, Playwright, and Robot Framework...</p></div>
        <div className={Style.btn}>
            <button>Read More <FaArrowRight /></button>
          </div>
        </div>
        
      </div>
   </section>
  )
}

export default Article
