import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from "./components/Projects";
import Contact from './components/Contact'
// import Footer from './components/Footer'
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
     <Projects />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default App
