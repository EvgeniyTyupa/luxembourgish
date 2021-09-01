import React from 'react'
import classes from './Comment.module.css'

const Comment = (props) => {
    const { item } = props

    return(
        <div className={classes.main}>
            <img src={item.photo} alt="user_photo"/>
            <p className={classes.name}>{item.name}</p>
            <span>{item.role}</span>
            <p className={classes.text}>{item.text}</p>
        </div>
    )
}

export default Comment