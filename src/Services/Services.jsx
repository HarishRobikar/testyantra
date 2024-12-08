import React from 'react'
import sttest from "./Services.module.css"
import headimg from './asset 12.jpeg'
import img1 from './asset 1.png'
import img2 from './asset 2.png'
import img3 from './asset 3.png'
import thumbnail from './asset 13.png'
import video from './asset 15.svg'
import Article from '../Article/Article'
import Footer from "../Footer/Footer"



const SoftwareTest = () => {
  return (
    <main>  
        <section className={sttest.head}>
        <img src={headimg} alt="" />
    <div className={sttest.mainContent}>
    <p>Software Testing Services (TaaS)</p>
    <p>Trusted by 3000+ clients across the globe to provide a range of Software testing solutions, expertise, and AI based software testing platform.</p>
    </div>
  </section>

  <section className={sttest.firelink}>
        <h1>Leverage two decades of Testing Expertise</h1>
        <p>Our testing center of excellence (CoE) provides a unified solutions for web, android, ios, API, and databases.</p>
        
        <div className={sttest.fireCont}>
        <div className={sttest.cardContainer}>
          <div className={sttest.card}>
            <div className={sttest.photo}>
            <img src={img1} alt="" />
            </div>
           
            <h3>Managed QA</h3>
            <p>Our team of IT consultants and managed services experts provide timely consulting, software configuration, deployment, and support for an array of cloud and premise based applications.</p>
          </div>

          <div className={sttest.card}>
            <img src={img2} alt="" />
            <h3>Crowd Testing</h3>
            <p>Crowdsourced Testing is a necessity and important solution for companies that are launching time-sensitive products, such as mobile applications and web-based platforms with UI, UX issues and software bugs.</p>
          </div>




          <div className={sttest.card}>
            <img src={img3} alt="" />
            <h3>Testing Solutions</h3>
            <p>Test Yantra Global offers a suite of software testing tools, methodology, and resources aimed at enhancing the quality assurance of your applications including testing services like automation, performance, application and security testing.</p>
          </div>
          </div>
          </div>
        <div className={sttest.videoCont}>
        <div className={sttest.video}>
                <img src={thumbnail} alt="" />
               <img src={video} alt="" />
        </div>
      </div>
          </section>
          <Article/>
          <Footer/>
     
  </main>
  )
}

export default SoftwareTest