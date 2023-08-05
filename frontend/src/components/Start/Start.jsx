import React from 'react'
import './Start.css'

function Start() {
  return (
    <div className='start-page'>
      {/* header */}
      <header className='start-header'>
        <h1>Russian Tech</h1>
        <div className='btn-main'>
          <div className='btn-text'>
            <a href='/'>Начать</a>
          </div>
        </div>
      </header>

      {/* hero */}
      <div className="start-hero">
        <div className="left-position">
          <h1>Раскройте свой потенциал в IT</h1>
          <h3>Создавайте, пишите код, тестируйте, автоматизируйте</h3>
        </div>
        <div className="right-position">
          <img src="./start_img.svg" className='start-image' alt="" />
        </div>
      </div>

      {/* overview */}
      <div className="start-overview">
        <div className="image-abstract">
          <img src="./home_abstract.webp" alt="" />
        </div>
        <div className="text-about-course">
          <section>
            <div className="card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Introudction</h2>
              <p className="card-description">Ознакомьтесь с основными терминами <br />и другими вещами </p>
            </div>
            <div className="card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Frontend</h2>
              <p className="card-description">Создание красивого и интерактивного <br /> пользовательского интерфейса</p>
            </div>
            <div className="card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Backend</h2>
              <p className="card-description">Разработка мощных и безопасных <br /> серверных приложений</p>
            </div>
            <div className="card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Mobile</h2>
              <p className="card-description">Создание мобильных приложений для <br /> iOS и Android платформ</p>
            </div>
            <div className="card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Languages</h2>
              <p className="card-description">Выберите свой рабочий язык под <br />свои цели и задачи</p>
            </div>
            <div className="card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">More</h2>
              <p className="card-description">Дальше - больше! Изучите дорожные <br />карты по изучению</p>
            </div>
          </section>
        </div>
      </div>

      {/* footer */}
      <footer className="start-footer">
        <div className="start-container-footer">
          <div className="footer-left">
            <h1>Russian Tech - new features!</h1>
            <h4>Платформа для обучения программирования</h4>
          </div>
          <div className="footer-right">
            <p align="center">Social media</p>
            <div className="social-media-icons">
              <a href="/"><img src="./icons/github.svg" alt="" /></a>
              <a href="/"><img src="./icons/vk.svg" alt="" /></a>
              <a href="/"><img src="./icons/telegram.svg" alt="" /></a>
            </div>
            <br /><hr /><br />
            <div className="footer-email">
              <p align="center">email: </p>
              <a href="mailto:russiantechorg@gmail.com?subject=Письмо Russian Tech">russiantechorg@gmail.com</a>
            </div>
            <br /><hr /><br />
            <h3 align="center">Happy coding!</h3> <br />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Start