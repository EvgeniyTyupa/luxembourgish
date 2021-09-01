import { Button as ButtonMaterial } from '@material-ui/core'
import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return(
        <ButtonMaterial onClick={props.action} className={classes.main + " " + props.className}>
            {props.text}
        </ButtonMaterial>
    )
}

export default Button