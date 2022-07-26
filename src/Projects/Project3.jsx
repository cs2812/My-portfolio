import React from 'react'
import Slide from '../component/Slide'
import {project3 } from "../data";
import styles from "../Pages/Styles/project.module.css"
import {VscArrowSmallRight} from "react-icons/vsc"
import {AiFillEye} from "react-icons/ai"
import {FaGithubSquare} from 'react-icons/fa'

const Project3 = () => {
  return (
    <div>
    
      <div className={styles.project1}>
        <div style={{width:"45%"}}>
            <Slide data={project3}/>
        </div>
        <div style={{paddingRight:"30px"}}>
        <h1 style={{marginLeft:"30%"}}>Tata Cliq Clone</h1>
        <p style={{display:"flex"}}><span><VscArrowSmallRight style={{fontSize:"30px"}}/></span>
        <span>
        Tata Cliq (stylised as Tata CLiQ) is an Indian e-commerce company based in Mumbai, 
        India. It is owned by Tata Digital Limited, of Tata Group
          </span>
          </p>
        <p style={{display:"flex"}}>
         <span>
         <VscArrowSmallRight style={{fontSize:"30px"}}/>
         </span>
         <span>
         TataCLiQ operates in categories such as Electronics, Fashion, Footwear and Accessories
         </span>
          </p>
          <p style={{display:"flex"}}>
         <span>
         <VscArrowSmallRight style={{fontSize:"30px"}}/>
         </span>
         <span>
            This is my unit 2 Collaborative project. In this Users can Register, Login, 
            Search for Product and Sort the items, Add to cart, 
            Remove from cart, Save for later, Checkout for buying 
         </span>
          </p>
          <p style={{display:"flex"}}>
         <span>
         <VscArrowSmallRight style={{fontSize:"30px"}}/>
         </span>
         <span>
            In this project I made all Product page, product detail page, Payment page {"&"} greeting page and gave functionality in it. 
            We used HTML, CSS, JavaScript to build this project. We used github to merge code together.
         </span>
          </p>
        <div style={{display:"flex",gap:"30px",marginLeft:"40px"}}>
          <span> <a className={styles.link} rel="noreferrer" href="https://github.com/premsg1610/Unit-2-Project---Tata-Cliq" target={"_blank"}><FaGithubSquare/></a></span>
          <span> <a className={styles.link} rel="noreferrer" href="https://tata-cliq-clone.netlify.app/"  target={"_blank"}><AiFillEye /></a> </span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Project3

