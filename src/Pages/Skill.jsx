import React from 'react'
import styles from "./Styles/skill.module.css"
import js from "../image/Skill/Javascript.png"
import html from "../image/Skill/Html.png"
import css from "../image/Skill/CSS.png"
import npm from "../image/Skill/npm.png"
import Postman from "../image/Skill/Postman.png"
import react from "../image/Skill/React.png"
import redux from "../image/Skill/Redux.png"
import git from "../image/Skill/git.webp"

const Skill = () => {
  let Data=[
    {
      image:html,
      name:"HTML",
    },{
      image:css,
      name:"CSS",
    },{
      image:js,
      name:"JavaScript",
    },{
      image:react,
      name:"REACT",
    },{
      image:redux,
      name:"REDUX",
    },{
      image:Postman,
      name:"Postman",
    },{
      image:npm,
      name:"NPM",
    },{
      image:git,
      name:"GitHub",
    },
  ]
  return (
    <div className={styles.container}>
      <div style={{height:"70px"}}></div>
      <h1 className={styles.h1}>My <span style={{color:"#f73f57"}}>Technical</span> Skill</h1>
      <div className={styles.skillDetails}>
      {Data.map((e)=>{
        return(
      <div className={styles.InSkill}>
        <div className={styles.Image}><img style={{width:"100%",height:"100%"}} src={e.image} alt="Skill" /></div>
        <h3 className={styles.h3}>{e.name}</h3>
      </div>
        )
      })}
      <div style={{height:"43px"}}></div>

      </div>
      
      
    </div>
  )
}

export default Skill
