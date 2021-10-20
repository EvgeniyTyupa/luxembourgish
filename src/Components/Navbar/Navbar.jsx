import React, { useEffect } from 'react'
import classes from './Navbar.module.css'
import logo_img from '../../Assets/logo.svg'
import calendar_icon from '../../Assets/calendar.svg'
import Button from '../UI/Container/Button/Button'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = (props) => {
    const { handleModal } = props

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return(
        <div className={classes.main} data-aos="fade-down">
            <div className={classes.side}>
                <img src={logo_img} className={classes.logo} alt="logo"/>
                <span className={classes.learn}>Learn easy <br/>Luxembourgish</span>
                <div className={classes.dateContainer}>
                    <img src={calendar_icon} alt="calendar"/>
                    <div className={classes.date}>
                        <span>13.11.2021</span>
                        <span>09:30:00</span>
                    </div>
                </div>
            </div>
            <Button text={"Записаться"} className={classes.orderBut} action={handleModal}/>
        </div>
    )
}

export default Navbar