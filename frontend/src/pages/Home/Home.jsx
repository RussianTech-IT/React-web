import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import CardLanguage from '../../components/CardLanguage/CardLanguage'
import Footer from '../../components/Footer/Footer'

function Home() {
  const languageList = [
    {
      imageSrc: "./icons/languages/introduction_card.svg",
      title: "Введение",
      description: "Введение в основные понятия и терминологии",
      hoverText: "Познакомьтесь с миром IT",
    },
    {
      imageSrc: "./icons/languages/python.svg",
      title: "Python",
      description: "Введение в язык и принципы работы с ним",
      hoverText: "Обучение Python с нуля",
    },
    {
      imageSrc: "./icons/languages/cplusplus.svg",
      title: "C++",
      description: "description",
      hoverText: "Обучение C++ с нуля",
    },
    {
      imageSrc: "./icons/languages/javascript.svg",
      title: "JS",
      description: "Крутой",
      hoverText: "Обучение Python  с нуля",
    },
    {
      imageSrc: "./icons/languages/swift.svg",
      title: "Swift",
      description: "Крутой",
      hoverText: "Обучение Python  с нуля",
    },
    {
      imageSrc: "./icons/languages/csharp.svg",
      title: "C#",
      description: "Крутой",
      hoverText: "Обучение Python  с нуля",
    },
    {
      imageSrc: "./icons/languages/html_css.svg",
      title: "HTML & CSS",
      description: "Крутой",
      hoverText: "Обучение Python  с нуля",
    },
    {
      imageSrc: "./icons/languages/php.svg",
      title: "PHP",
      description: "Крутой",
      hoverText: "Обучение PHP с нуля",
    },
    {
      imageSrc: "./icons/languages/java.svg",
      title: "Java",
      description: "Крутой",
      hoverText: "Обучение Python  с нуля",
    },
    {
      imageSrc: "./icons/languages/kotlin.svg",
      title: "Kotlin",
      description: "Крутой",
      hoverText: "Обучение Python  с нуля",
    },
    {
      imageSrc: "./icons/languages/rust.svg",
      title: "Rust",
      description: "Крутой",
      hoverText: "Обучение Python  с нуля",
    }
  ];

  return (
    <div className="home">
      <Navbar />
      <div className="list-language">
        <section>
          {languageList.map((data, index) => (
            <CardLanguage
              key={index}
              imageSrc={data.imageSrc}
              title={data.title}
              description={data.description}
              hoverText={data.hoverText}
            />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home