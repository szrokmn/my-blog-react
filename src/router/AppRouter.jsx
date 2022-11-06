import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Videos from "../pages/Videos/Videos";
import Projects from "../pages/Projects/Projects";
import Medium from "../pages/Medium/Medium";
import Contact from "../pages/Contact/Contact";
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const AppRouter = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/medium" element={<Medium/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRouter;
