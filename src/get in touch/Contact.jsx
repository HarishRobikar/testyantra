import React from 'react'
import headimg from './asset 11.png'
import gt from "./Contact.module.css"
const Contact = () => {
  return (
    <main>  
    <section className={gt.head}>
      <img src={headimg} alt="" />
<div className={gt.mainContent}>
<p>Contact</p>
<p>Please complete the form below and we will get back to you soon.</p>
</div>
</section>
</main >
  )
}

export  default Contact 
