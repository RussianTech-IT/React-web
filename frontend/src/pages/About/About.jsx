import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CardAbout from '../../components/CardAbout/CardAbout'
import './About.css'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer/Footer'

function About() {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <div className="about-page">
            <Navbar />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                className="container-card-about">
                <div className="about-left-position-cards">
                    <CardAbout title="Education" description="Мы помогаем людям осваивать современные языки программирования" />
                    <CardAbout title="Quality" description="Вы сможете ориентироваться в основах программирования, высоконагруженные приложения" />
                    <CardAbout title="Frontend" description="" />
                    <CardAbout title="Frontend" description="" />
                    <CardAbout title="Frontend" description="" />
                    <CardAbout title="Frontend" description="" />
                </div>
                <div className="about-right-position">
                    <img src="./abstract_image2.png" alt="" />
                </div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                className='about-text-block'>
                <div className="about-text-container">
                    <div className="bg-card-about-text">
                        <p>
                            На нашей платформе можно заниматься в любой момент без привязки к расписанию
                            Научитесь создавать полноценные веб-приложения на всех уровнях: от простых программ до высоконагруженных сервисов и систем.
                            У нас есть чаты по разным направлениям, где вам с радостью помогут с вашими проблемами.
                            А также узнаете, как создавать качественное программное обеспечение и интегрировать его в инфраструктуру.
                        </p>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    )
}

export default About