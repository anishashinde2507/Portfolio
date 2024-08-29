import React from 'react'
import "./index.css"
import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/about';
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
// import Video from './components/videos/Video'
import Contact from './components/contact/Contact';
import Project from './components/protfolio/Project';
import ParticlesBackground from './components/Background';

const App = () => {
  return (
   <>
     <div style={{ position: 'relative', minHeight: '100vh' }}>
      <ParticlesBackground/>
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Sidebar/>
      <main className='main'>

          <Home/>
          <About/>
          <Services/>
          <Resume/>
          <Project/>
    
          <Contact/>
          
      </main>
      </div>
      </div>
   </>
  )
}

export default App