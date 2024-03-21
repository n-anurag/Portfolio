import { useState,useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import ProgressBar from './Components/Skills/ProgressBar/ProgressBar'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills/Skills'
function App() {
  
  return (
    <>
    <Home/>
    <About/>
    <Skills/>
    {/* <Contact/> */}
    <Footer/>
   
    
    </>
  )
}

export default App
