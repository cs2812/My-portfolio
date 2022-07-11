import React from 'react'
import styles from "./Styles/about.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <div style={{height:"40px"}}></div>
      <div>
        <h1 className={styles.h1}>All <span style={{color:"#f73f57"}}>About</span> Me And My <span style={{color:"#f73f57"}}>Education</span>
        </h1>
      </div>
      <div>
        <h1 style={{color:"#252c3a",textAlign:"left"}}>About</h1>
      </div>
      <ul className={styles.about} style={{}}>
        <li>Hello my name is <span style={{color:"#f73f57"}}>Chetan Sharma</span>. I come from printing the word Welcome, to becoming a passionate 
        Full Stack Web Developer. I always push myself to learn new things and work on them with interest. I am 
        skilled, collaborative, and attentive.</li>
        <li>
        My interest in web development started last year when I was trying to make my resume on the web by 
        using HTML and CSS with the help of YouTube videos, which taught me a lot.
        </li>
        <li>
        During this time, I came across Masai School and decided to join. After spending half a month at the 
        institute, I became certain that I will pursue web development as my career.
        </li>
        <li>
        I built a number of web applications and 2 major projects. Learned a great deal about teamwork, 
        leadership, and communication. Here I am looking for an opportunity as a full-stack web developer.
        </li>
      </ul>
<div>
  <h1 style={{color:"#252c3a",textAlign:"left"}}>Education</h1>
</div>




<div className={styles.education}>

  <div style={{display:"flex",gap:"10px"}}>
      <div style={{borderLeft:"solid",height:"80px",marginTop:"13px",color:"#2d3340"}}></div>
      <div style={{textAlign:"left",lineHeight:"10px"}}>
        <h3>Full-Stack Web Development</h3>
        <p> Masai School, Bangalore</p>
        <p>January 2022 - Present</p>
      </div>
  </div>
  <div style={{display:"flex",gap:"10px",}}>
      <div style={{borderLeft:"solid",height:"80px",marginTop:"13px",color:"#2d3340"}}></div>
      <div style={{textAlign:"left",lineHeight:"10px"}}>
        <h3>Bachelor of Science - B.Sc</h3>
        <p> S S Jain Subodh P G College, Jaipur</p>
        <p>Aug 2017 - Jan 2021</p>
      </div>
  </div>
  <div style={{display:"flex",gap:"10px",}}>
      <div style={{borderLeft:"solid",height:"80px",marginTop:"13px",color:"#2d3340"}}></div>
      <div style={{textAlign:"left",lineHeight:"10px"}}>
        <h3>Board of Secondary Education Rajasthan</h3>
        <p> Gayatri Public Sr. Sec. School</p>
        <p>Aug 2010 - Jun 2017</p>
      </div>
      
  </div>
  



</div> 
    </div>
  )
}

export default About
