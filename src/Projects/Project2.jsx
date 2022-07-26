import React from 'react'
import Slide from '../component/Slide'
import {project2 } from "../data";
import styles from "../Pages/Styles/project.module.css"
import {VscArrowSmallRight} from "react-icons/vsc"
import {AiFillEye} from "react-icons/ai"
import {FaGithubSquare} from 'react-icons/fa'

const Project2 = () => {
  return (
    <div>
               
      <div className={styles.project1} >
        <div style={{width:"45%"}}>
            <Slide data={project2}/>
        </div>
        <div style={{paddingRight:"30px"}}>
            <h1 style={{marginLeft:"30%"}}>JCrew Clone</h1>
            <p style={{display:"flex"}}><span><VscArrowSmallRight style={{fontSize:"30px"}}/></span>
            <span>J.Crew Group, Inc., is an American multi-brand, multi-channel, specialty retailer. Hence, is an E-Commerce Website</span></p>
            <p style={{display:"flex"}}>
            <span>
            <VscArrowSmallRight style={{fontSize:"30px"}}/>
            </span>
            <span>
            This is my Unit 3 Collaborative  Project. In this Users can Register, Login, 
            Search for Product and Sort the items, Add to cart, 
            Remove from cart, Save for later, Checkout for buying 
            </span>
            </p>
            <p style={{display:"flex"}}>
            <span>
            <VscArrowSmallRight style={{fontSize:"30px"}}/>
            </span>
            <span>
            In this project I made Product ( Man, Woman, child Cloths ) page and gave functionality in it. 
            We used HTML, CSS, JavaScript to build this project.
            </span>
            </p>
            <p style={{display:"flex"}}>
            </p>
            <div style={{display:"flex",gap:"30px",marginLeft:"40px"}}>
            <span> <a className={styles.link} rel="noreferrer" href="https://github.com/Prakarshprasar/Project-3" target={"_blank"}><FaGithubSquare /></a></span>
            <span> <a className={styles.link} rel="noreferrer" href="https://prakarshprasar.github.io/Project-3/"  target="_blank"><AiFillEye /></a> </span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Project2
