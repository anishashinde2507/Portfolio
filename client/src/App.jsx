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


const App = () => {
  return (
   <>
      <Sidebar/>
      <main className='main'>

          <Home/>
          <About/>
          <Services/>
          <Resume/>
          <Project/>
    
          <Contact/>
          
      </main>
   </>
  )
}

export default App