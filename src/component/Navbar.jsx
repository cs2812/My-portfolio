import React from 'react'
import {NavLink} from "react-router-dom"
import styles from "./navbar.module.css"

const Navbar = () => {
  let Link=[{
    to:"/",
    title:"Home",
  },{
    to:"/about",
    title:"About",
  },{
    to:"/skill",
    title:"Skill",
  },{
    to:"/project",
    title:"Project",
  },{
    to:"/contect",
    title:"Contect",
  },]

 let active = {
  color: "white",
  textDecoration: "none",
  backgroundColor:"#f73f57"

};
let bace = {
  color: "black",
  textDecoration: "none",
};

  return (
    <div className={styles.NavContainer}>
      <h1>CHETAN</h1>
      <div className={styles.linkdiv}>
        {Link.map((e)=> {
          // console.log(e)
        return <NavLink to={e.to}
        style={({ isActive }) => (isActive ? active : bace)}
         className={styles.links}>{e.title}</NavLink>
})}
        <a style={bace} className={styles.links} href={"https://drive.google.com/file/d/1w-yBSKLc71i_Jvn4GIHFxl_xiNuTV9zF/view?usp=sharing"} target={'_blank'}>Resume</a>

        </div>
    </div>
  )
}

export default Navbar
