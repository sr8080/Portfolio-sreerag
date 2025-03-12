// App.js
import React from 'react';
import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom";
import User1Chat from './components/Chat';
import User2Chat from './components/User';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Project from './components/Project';
import Contact from './components/Contact';
import { Athul } from './components/Athul';
import Test from './components/Test'

function App() {
    return (
     <>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300
      selection:text-cyan-900'>

        <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen
       bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">


      </div>
        </div>
     
      <div className='container mx-auto px-8'>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Project />
      <Contact />
      
      </div>
      
      </div>
      
     </>
    )
}

export default App;
