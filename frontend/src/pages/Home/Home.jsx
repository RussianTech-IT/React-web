import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import CardLanguage from '../components/CardLanguage/CardLanguage'

function Home() {
  return (
    <div className="home">
      <Navbar />
      {/* <div className="list-language">
        <section>
          <CardLanguage
            imageSrc="./icons/languages/introduction_card.svg"
            title="Введение"
            description="Введение в основные понятия и терминологии"
            hoverText="Ознакомьтесь с сленгом в мире IT" />
          <CardLanguage
            imageSrc="./icons/languages/python.svg"
            title="Python"
            description="Крутой"
            hoverText="Обучение Python  с нуля" />
          <CardLanguage
            imageSrc="./icons/languages/cplusplus.svg"
            title="C++"
            description="description"
            hoverText="Обучение C++ с нуля" />
          <CardLanguage
            imageSrc="./icons/languages/javascript.svg"
            title="JS"
            description="Крутой"
            hoverText="Обучение Python  с нуля" />
          <CardLanguage
            imageSrc="./icons/languages/swift.svg"
            title="Swift"
            description="Крутой"
            hoverText="Обучение Python  с нуля" />
          <CardLanguage
            imageSrc="./icons/languages/csharp.svg"
            title="C#"
            description="Крутой"
            hoverText="Обучение Python  с нуля" />
          <CardLanguage
            imageSrc="./icons/languages/html_css.svg"
            title="HTML & CSS"
            description="Крутой"
            hoverText="Обучение Python  с нуля" />
          <CardLanguage
            imageSrc="./icons/languages/python.svg"
            title="Python"
            description="Крутой"
            hoverText="Обучение Python  с нуля" />
          <CardLanguage
            imageSrc="./icons/languages/java.svg"
            title="Java"
            description="Крутой"
            hoverText="Обучение Python  с нуля" />
          <CardLanguage
            imageSrc="./icons/languages/kotlin.svg"
            title="Kotlin"
            description="Крутой"
            hoverText="Обучение Python  с нуля" />
          <CardLanguage
            imageSrc="./icons/languages/rust.svg"
            title="Rust"
            description="Крутой"
            hoverText="Обучение Python  с нуля" />
        </section>
      </div> */}
    </div>

  )
}

export default Home