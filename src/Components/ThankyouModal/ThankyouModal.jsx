import React, { useEffect } from 'react';
import { IconButton } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import classes from './Thankyou.module.css'

import Aos from 'aos';
import 'aos/dist/aos.css';

const ThankyouModal = (props) => {
    const { handleThankyou } = props

    useEffect(() => {
        Aos.init({ duration: 1000 });
    })

    return(
        <div className={classes.main}  data-aos="fade" data-aos-duration="300">
            <div className={classes.window} data-aos="zoom-in" data-aos-duration="200">
                <div className={classes.header}>
                    <IconButton onClick={handleThankyou}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <p>Спасибо за заявку! <br/>
                    Письмо с подтверждением отправлено вам на почту.
                </p>
            </div>
        </div>  
    )
}

export default ThankyouModal