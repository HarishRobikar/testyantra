import React from 'react'
import Style from "./Home.module.css"
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa";
import firstimg from "./asset 1.png"
import secondimg from "./asset 2.png"
import thirdimg from "./asset 3.png"
import fourthimg from "./asset 4.png"
import fifthimg from "./asset 5.png"
import bigimg from "./asset 21.png"
import location from "./asset 6.png"
import CountUp from 'react-countup';
import earth from "./asset 7.png"
import peoples from "./asset 8.png"
import people from "./asset 9.png"
import Slidercard from './Slidercard';
import Article from '../../Article/Article';


const Home = () => {
  return (
    <section>
      <div className={Style.Home}>
        <div className={Style.card1}>
          <div className={Style.black}>
            <h1>With Test Yantra Global</h1>
            <div className={Style.words}>
              <TypeAnimation
                sequence={[
                  'Unify Web,Mobile,API,and DB Testing',
                  1000,
                  'Access 1,000`s of  Test Engineers...',
                  1000,
                  'Accelerate Business Efficiency...',
                  1000,
                  'Chive Digital Transformation...',
                  1000,
                  'Drive AI Automation Testing...',
                  1000,
                  'Build Custom Applications...',
                  1000,
                  'Realize Cost-effective Testing',
                  1000,
                  'Unity Web,mobile,API, and DB Testing'
                ]}
                wrapper="span"
                speed={50}
                style={{ fontsize: "28px" }}
                repeat={Infinity} />
            </div>
          </div>
          <div className={Style.paragraph1}>
            <p>Test Yantra Global's 5,000+ employees provide a range of innovative technology solutions to digitally transform your organization</p>
          </div>
          <div className={Style.paragraph2}>
            <p>From IT consulting, application design and development, to automated AI enabled test management platform that unifies web, android, iOS, API, and DB testing, we have the expertise, technology, experience, and tools to help transform your business.</p>

          </div>
          <div className={Style.Btn}>
            <button>Get Started Free <FaArrowRight /></button>
          </div>

        </div>
        <div className={Style.card2}>
          <div className={Style.img}>
            <Slidercard /> 
          </div>
        </div>

      </div>
      <div className={Style.header}>
        <div className={Style.headword}>
          <h1>Leverage Test Yantra Global's range
            of Professional Services</h1>
        </div>
      </div>
      <div className={Style.subcard}>
        <div className={Style.subcard1}>
          <div className={Style.logo1}><img src={firstimg} alt="" /></div>
          <div className={Style.heading}><h3>Software Testing Services (TaaS)</h3></div>
          <div className={Style.para}><p>We offer cost-effective, reliable and scalable software testing services.</p></div>
        </div>
        <div className={Style.subcard1}>
          <div className={Style.logo1} > <img src={secondimg} alt="" /></div>
          <div className={Style.heading} > <h3 >IT Software Skills Enhancement</h3></div>
          <div className={Style.para}> <p>Our customized and curated training models help organizations elevate their IT quotient.</p></div>
        </div>
        <div className={Style.subcard1}>
          <div className={Style.logo1}> <img src={thirdimg} alt="" /></div>
          <div className={Style.heading}><h3>Deployment &amp; Support Services</h3> </div>
          <div className={Style.para}> <p>Our team of experts help you craft a winning IT strategy for your organization.</p></div>

        </div>
        <div className={Style.subcard1}>
          <div className={Style.logo1} ><img src={fourthimg} alt="" /> </div>
          <div className={Style.heading}><h3>Software Design &amp; Development</h3> </div>
          <div className={Style.para}> <p>We deliver IT solutions in a wide variety of verticals and elevate businesses to the next level.</p></div>
        </div>
        <div className={Style.subcard1}>
          <div className={Style.logo1}><img src={fifthimg} alt="" /> </div>
          <div className={Style.heading}><h3>Crowd Testing</h3> </div>
          <div className={Style.para}><p>We offer comprehensive crowd-testing services, leveraging a global network of skilled testers.</p>
          </div></div>
      </div>
      <div className={Style.bigimg}>
        <div className={Style.bigimg1}>
          <img src={bigimg} alt="" className={Style.bigimg1} />
          <svg className={Style.playbutton} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PlayCircleOutlineIcon"><path d="m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path></svg>
        </div>

      </div>
      <div className={Style.heading2}><h1>The numbers speak for themselves</h1>
      </div>
      <div className={Style.subcard2}>
        <div className={Style.subcards2}>
          <div className={Style.location1}><img src={location} alt="" /></div>
          <div className={Style.number}>
            <CountUp start={0} end={6} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
          <div className={Style.headercard}>
            <h1>Countries & Growing</h1>
          </div>
        </div>
        <div className={Style.subcards2}>
          <div className={Style.location1}><img src={earth} alt="" /></div>
          <div className={Style.number} >
            <CountUp start={0} end={3000} suffix='+' delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp></div>
          <div className={Style.headercard}>
            <h1>Clients Across Globe</h1>
          </div>
        </div>
        <div className={Style.subcards2}>
          <div className={Style.location1}><img src={peoples} alt="" /></div>
          <div className={Style.number} >
            <CountUp start={0} end={5000} suffix='+' delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp></div>
          <div className={Style.headercard}>
            <h1>Total Team Members</h1>
          </div>
        </div>
        <div className={Style.subcards2}>
          <div className={Style.location1}><img src={people} alt="" /></div>
          <div className={Style.number} >
            <CountUp start={0} end={12000} suffix='+' delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp></div>
          <div className={Style.headercard}>
            <h1>On Demand Test Engineers</h1>
          </div>
        </div>

      </div>
      <Article/>


    </section>

  )
}

export default Home
