import React from 'react'
import { Routes, Route } from "react-router-dom"

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/medium" element={<Medium/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Router
