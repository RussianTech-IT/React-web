import React from 'react'
import './Footer.css'

function Footer() {
    return (
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

    )
}

export default Footer