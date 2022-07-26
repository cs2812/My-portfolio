import React from 'react'
import Slide from '../component/Slide'
import {project1 } from "../data";
import styles from "../Pages/Styles/project.module.css"
import {VscArrowSmallRight} from "react-icons/vsc"
import {AiFillEye} from "react-icons/ai"
import {FaGithubSquare} from 'react-icons/fa'

const Project1 = ( ) => {
  return (
    <div>
       
      <div className={styles.project1}>
        <div style={{width:"45%"}}>
            <Slide data={project1}/>
        </div>
        <div style={{paddingRight:"30px"}}>
        <h1 style={{marginLeft:"30%"}}>Apple TV+ Clone</h1>
        <p style={{display:"flex"}}><span><VscArrowSmallRight style={{fontSize:"30px"}}/></span>
        <span>Apple TV OTT platform has built-in AirPlay compatibility that 
          allows you to send content from an iPad or iPhone to a connected television screen.</span></p>
        <p style={{display:"flex"}}>
         <span>
         <VscArrowSmallRight style={{fontSize:"30px"}}/>
         </span>
         <span>
         Apple TV is a digital media player and microconsole that is developed and marketed by Apple Inc. 
          It is a small network appliance hardware that plays received media data such as video and audio 
          to a television set or external display.
         </span>
          </p>
          <p style={{display:"flex"}}>
         <span>
         <VscArrowSmallRight style={{fontSize:"30px"}}/>
         </span>
         <span>
          This is my Individual Project. I used React, Chakra Ui, CSS, JavaScript, React Slick to make this project.
         </span>
          </p>
          <p style={{display:"flex"}}>
         <span>
         <VscArrowSmallRight style={{fontSize:"30px"}}/>
         </span>
         <span>
         I made a same catagory and all movies {"&"} Series related information wrap in a Carousel. I tryed to get same UI.
         </span>
          </p>
        <div style={{display:"flex",gap:"30px",marginLeft:"40px"}}>
          <span> <a className={styles.link} rel="noreferrer" href="https://github.com/cs2812/AppleTV-Colne"><FaGithubSquare  target={"_blank"}/></a></span>
          <span> <a className={styles.link} rel="noreferrer" href="https://apple-tv-clone-by-chetan.netlify.app/"  target={"_blank"}><AiFillEye /></a> </span>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Project1
