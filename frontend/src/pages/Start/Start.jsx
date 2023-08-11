import React from 'react'
import './Start.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'

function Start() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div
      className='start-page'>
      {/* header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={variants} className='start-header'>
        <h1>Russian Tech</h1>
        <Link to='/home'>
          <div className='btn-main'>
            <div className='btn-text'>
              Начать
            </div>
          </div>
        </Link>
      </motion.header>

      {/* hero */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants} className="start-hero">
        <div className="left-position">
          <h1>Раскройте свой потенциал в IT</h1>
          <h3>Создавайте, пишите код, тестируйте, автоматизируйте</h3>
        </div>
        <div className="right-position">
          <img src="./start_img.svg" className='start-image' alt="" />
        </div>
      </motion.div>

      {/* overview */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants} className="start-overview">
        <div className="image-abstract">
          <img src="./home_abstract.webp" alt="" />
        </div>
        <div className="text-about-course">
          <section>
            <div className="start-card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Introudction</h2>
              <p className="card-description">Ознакомьтесь с основными терминами <br />и другими вещами </p>
            </div>
            <div className="start-card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Frontend</h2>
              <p className="card-description">Создание красивого и интерактивного <br /> пользовательского интерфейса</p>
            </div>
            <div className="start-card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Backend</h2>
              <p className="card-description">Разработка мощных и безопасных <br /> серверных приложений</p>
            </div>
            <div className="start-card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Mobile</h2>
              <p className="card-description">Создание мобильных приложений для <br /> iOS и Android платформ</p>
            </div>
            <div className="start-card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Languages</h2>
              <p className="card-description">Выберите свой рабочий язык под <br />свои цели и задачи</p>
            </div>
            <div className="start-card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">More</h2>
              <p className="card-description">Дальше - больше! Изучите дорожные <br />карты по изучению</p>
            </div>
          </section>
        </div>
      </motion.div>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Start