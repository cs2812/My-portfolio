import React from 'react'
import styles from "./Styles/contect.module.css"
import contact from "../image/contacts/contact2.png"
import {MdEmail,MdPhoneIphone} from "react-icons/md";
import {FaGithubSquare,FaLinkedin } from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";


const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgdiv}>
        <img src={contact} alt="" />
      </div>
      <div className={styles.div2}>
      <h1>Contact with me on :</h1>
        <h4 className={styles.h3}>I'M VERY RESPONSIVE TO MESSAGES</h4>
      <div className={styles.content}>
        <div><a href="mailto:connect.chetansharma3035@gmail.com" target={"_blank"} rel="noreferrer" > <h1><MdEmail/></h1><h1>CHETANSHARMA3035@GMAIL.COM</h1> </a></div>
        <div><a href="tel:+7062831262" target={"_blank"} rel="noreferrer" > <h1><MdPhoneIphone/></h1> <h1>7062831262</h1> </a></div>
        <div><a href="https://www.linkedin.com/in/chetan-sharma2812/" target={"_blank"} rel="noreferrer" > <h1><FaLinkedin/></h1> <h1>Linkedin</h1> </a></div>
        <div><a href="https://github.com/cs2812" target={"_blank"} rel="noreferrer" > <h1><FaGithubSquare/></h1> <h1>GitHub</h1> </a></div>
        <div><a href="https://twitter.com/Chetan281219" target={"_blank"} rel="noreferrer" > <h1><BsTwitter/></h1> <h1>Twitter</h1> </a></div>
        
      </div>
      </div>
    </div>
  )
}

export default Contact
