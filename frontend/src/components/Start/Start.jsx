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
        <div className="image-abstract"><br /><br /><br /><br />
          <img src="./home_abstract.webp" alt="" />
        </div>
        <div className="text-about-course">
          <section>
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
              <h2 className="card-title">Заголовок карточки 4</h2>
              <p className="card-description">Описание карточки 4</p>
            </div>
            <div className="card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Заголовок карточки 4</h2>
              <p className="card-description">Описание карточки 4</p>
            </div>
            <div className="card">
              <div className="card-icon"><img src="./icons/frontend.svg" alt="" /></div>
              <h2 className="card-title">Заголовок карточки 4</h2>
              <p className="card-description">Описание карточки 4</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Start