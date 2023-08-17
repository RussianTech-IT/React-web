import React from 'react'
import './CardAbout.css'
import { motion } from 'framer-motion'

function CardAbout({ title, description }) {
    return (
        <motion.div animate={"visible"} className='card-about-component' >
            <h2>{title}</h2>
            <p>{description}</p>
        </motion.div>
    )
}

export default CardAbout