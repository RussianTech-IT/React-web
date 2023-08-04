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
              <h1>Card about</h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Start