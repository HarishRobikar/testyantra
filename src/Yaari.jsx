import React from 'react'
import "./Global.css"
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './Articles/About'
import Home from './Home/Home';
import Services from './Services/Services';
import Career from './Partners/Career';
import Contact from './get in touch/Contact';
import SoftwareTesting from './Services Links/SoftwareTesting'
import SoftwareDevelopment from './Services/Sevice Link1/SoftwareDevelopment'
import SoftwareEnhancement from './Services/Services Link2/SoftwareEnhancement'
import ItConsults from './Services/Service Link3/ItConsults'
import Crowd from './Services/Service Link4/Crowd'
import Firelink from './Partners/Fire/Firelink'




const Yaari = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        {/* <Route path='/partners' element={<Career/>}/> */}
        <Route path='/articls' element={<About/>}/>
        <Route path='/get in touch' element={<Contact/>}/>
    </Routes>
    <Routes>
      <Route path='/sfttesting' element={<SoftwareTesting />}/>
      <Route path='/sftdevelopment' element={<SoftwareDevelopment />}/>
      <Route path='/sftenhancement' element={<SoftwareEnhancement />}/>
      <Route path='/itconsult' element={<ItConsults />}/>
      <Route path='/crowd' element={<Crowd />}/>
    </Routes>
    <Routes>
      <Route path='/fire' element={<Firelink/>}/>
    </Routes>
    <Routes>
      <Route path='/get in touch' element={<Contact/>}/>
    </Routes>
   
   </Router>
  )
}

export default Yaari
