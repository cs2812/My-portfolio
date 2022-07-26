import React from 'react'
import styles from "./Styles/home.module.css" 
// import chetan1 from "../image/chetan.JPG"
import chetan2 from "../image/chetan.png"
import {FaGithubSquare,FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div style={{height:"50px"}}></div>

        <div className={styles.container2}>
        <div className={styles.intro}>
            <h2>Hello, my name is</h2>
            <h1>Chetan Sharma</h1>
            <h2> <span>I'm a</span> <span>Full Stack Developer</span> </h2>
            <div 
              className={styles.conection} 
              >
            <button className={styles.Rbtn}>
              <a 
              className={styles.resumebtn} 
              href={"https://drive.google.com/file/d/1w-yBSKLc71i_Jvn4GIHFxl_xiNuTV9zF/view?usp=sharing"} 
              target={'_blank'}
              rel="noreferrer"
              >Resume</a></button>
              <a href="https://github.com/cs2812" 
              className={styles.socialLink} 
              rel="noreferrer"
              target={'_blank'}
              ><FaGithubSquare/></a>
              <a href="https://www.linkedin.com/in/chetan-sharma2812/"
              target={'_blank'}
              rel="noreferrer"
               className={styles.socialLink}
               
               ><FaLinkedin/></a>
            </div>

        </div>
        <div className={styles.introImg}>
            <img src={chetan2} alt="My img" />
        </div>

        </div>
        
      
    </div>
  )
}

export default Home
