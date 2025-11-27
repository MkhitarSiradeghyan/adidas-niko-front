import React from 'react'
import s from './Heading.module.sass';


const Heading = ({title}) => {
    return(
        <h1 className={s.heading}>{title}</h1>
    )
}


export default Heading;