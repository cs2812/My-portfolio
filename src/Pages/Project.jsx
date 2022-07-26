import React from 'react'
import styles from "./Styles/project.module.css"
import Project1 from '../Projects/Project1';
import Project2 from '../Projects/Project2';
import Project3 from '../Projects/Project3';

const Project = () => {
  return (
    <div className={styles.container}>
      <div style={{padding:"2rem"}}></div>

      <div>
        <h1>My <span style={{color:"#f73f57"}}>Projects</span> Section</h1>
      </div>

      <Project1 />
      <Project2/>
      <Project3/>
     
      
    </div>
  )
}

export default Project
