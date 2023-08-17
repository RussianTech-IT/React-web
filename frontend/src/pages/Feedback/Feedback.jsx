import React from 'react'
import './Feedback.css'
import Navbar from '../../components/Navbar/Navbar'
import ModalForm from '../../components/ModalForm/ModalForm'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'

function Feedback() {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="feedback-page">
            <Navbar />
            <div className="form-feedback-page">
                <ModalForm />
            </div>
            <Footer />
        </motion.div>
    )
}

export default Feedback