import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from "./slider.module.css"
const Slide = ({data}) => {
        const settings = {
          dots: true,
          fade: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
                <div className={styles.Box}>
                <Slider {...settings} >
                    {data.map((e,i)=>{
                        return(
                            <div className={styles.sliderdiv} key={i} >
                            <img  src={e.img} />
                        </div>
                        )
                    })}
                </Slider>
                </div> 
        );
}
export default Slide
