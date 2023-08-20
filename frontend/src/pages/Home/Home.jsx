import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import CardLanguage from '../../components/CardLanguage/CardLanguage'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'

function Home() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const languageList = [
    {
      imageSrc: "./icons/languages/introduction_card.svg",
      title: "Введение",
      description: "Введение в основные понятия и терминологии",
      hoverText: "Познакомьтесь с миром IT",
      to: '/language/introduction'
    },
    {
      imageSrc: "./icons/git.svg",
      title: "Git",
      description: "Система контроля версий",
      hoverText: "Освойте систему контроля версий Git",
      to: '/git-course'
    },
    {
      imageSrc: "./icons/languages/python.svg",
      title: "Python",
      description: "Введение в язык и принципы работы с ним",
      hoverText: "Обучение Python с нуля",
      to: '/language/python',
    },
    {
      imageSrc: "./icons/languages/cplusplus.svg",
      title: "C++",
      description: "Основы языка C++ и его применение",
      hoverText: "Изучите C++ с нуля",
      to: '/language/cpp',
    },
    {
      imageSrc: "./icons/languages/javascript.svg",
      title: "JavaScript",
      description: "Основы языка JavaScript и его применение",
      hoverText: "Изучите JavaScript с нуля",
      to: '/language/javascript',
    },
    {
      imageSrc: "./icons/languages/swift.svg",
      title: "Swift",
      description: "Введение в язык Swift и его возможности",
      hoverText: "Изучите Swift с нуля",
      to: '/language/swift',
    },
    {
      imageSrc: "./icons/languages/csharp.svg",
      title: "C#",
      description: "Основы языка C# и его применение",
      hoverText: "Изучите C# с нуля",
      to: '/language/csharp',
    },
    {
      imageSrc: "./icons/languages/html_css.svg",
      title: "HTML & CSS",
      description: "Основы HTML и CSS для создания веб-страниц",
      hoverText: "Изучите HTML & CSS с нуля",
      to: '/language/htmlcss',
    },
    {
      imageSrc: "./icons/languages/php.svg",
      title: "PHP",
      description: "Введение в язык PHP и создание динамических веб-сайтов",
      hoverText: "Изучите PHP с нуля",
      to: '/language/php',
    },
    {
      imageSrc: "./icons/languages/java.svg",
      title: "Java",
      description: "Основы языка Java и его применение",
      hoverText: "Изучите Java с нуля",
      to: '/language/java',
    },
    {
      imageSrc: "./icons/languages/kotlin.svg",
      title: "Kotlin",
      description: "Введение в язык Kotlin и его особенности",
      hoverText: "Изучите Kotlin с нуля",
      to: '/language/kotlin',
    },
    {
      imageSrc: "./icons/languages/rust.svg",
      title: "Rust",
      description: "Основы языка Rust и его применение",
      hoverText: "Изучите Rust с нуля",
      to: '/language/rust',
    }
  ];

  return (

    <div
      className="home">
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants} className="list-language">
        <section>
          {languageList.map((data, index) => (
            <CardLanguage
              key={index}
              imageSrc={data.imageSrc}
              title={data.title}
              description={data.description}
              hoverText={data.hoverText}
              to={data.to}
            />
          ))}
        </section>
      </motion.div>
      <Footer />
    </div>
  )
}

export default Home