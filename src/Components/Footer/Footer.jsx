import React, { useEffect } from 'react'
import classes from './Footer.module.css'

import logo_white from '../../Assets/logo_white.svg'
import fb from '../../Assets/facebook.svg'
import inst from '../../Assets/instagram.svg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = (props) => {
    
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return(
        <div className={classes.main} data-aos="fade-down" data-aos-duration="2000">
            <div className={classes.container}>
                <div className={classes.logoBlock}>
                    <img src={logo_white} alt="logo"/>
                </div>
                <div className={classes.section}>
                    <span>Learn easy<br/>luxembourgish</span>
                    <a href="tel:+352655000835">+352 655 000 835</a>
                </div>
            </div>
            <div className={classes.social}>
                <a href="google.com" target="_blank" rel="noreferrer">
                    <img src={fb} alt="facebook"/>
                </a>
                <a href="google.com" target="_blank" rel="noreferrer">
                    <img src={inst} alt="instagram"/>
                </a>
            </div>
        </div>
    )
}

export default Footer