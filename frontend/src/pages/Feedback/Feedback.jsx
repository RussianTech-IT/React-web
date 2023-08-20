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
        <div
            className="feedback-page">
            <Navbar />
            <motion.div
            initial="hidden"
            animate="visible"
            variants={variants} className="form-feedback-page">
                <ModalForm />
            </motion.div>
            <Footer />
        </div>
    )
}

export default Feedback