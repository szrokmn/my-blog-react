import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Videos from "../pages/Videos"
import Projects from "../pages/Projects"
import Medium from "../pages/Medium"
import Contact from "../pages/Contact"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/medium" element={<Medium/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default AppRouter
