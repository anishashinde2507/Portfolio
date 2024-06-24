import React from 'react'
import "./about.css"
import About from "../../assets/avtar1.png";
import AboutBox from './AboutBox'

const about = () => {
  return (
   <section className="about container section " id='about'>
    <h2 className="section__title">About Me</h2>
    <div className="about__container grid">
      <img src={About} alt="" className="about__img" />
      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">I am third year Btech Computer Science student. I am passionate about developing Website and also exporing AI fields.</p>
          <a href="" className="btn">Download CV</a>
        </div>
        <div className="about__skills grid">
          <div className="skills__data">
            <div className="skils__title">
              <h3 className="skills__name">React</h3>
              <span className='skills__number '>90%</span>
            </div>

            <div className="skills__bar">
                  <span className='skills__percentages development'>

                  </span>
              </div>         

              <div className="skils__title">
              <h3 className="skills__name">Node.js</h3>
              <span className='skills__number '>90%</span>
            </div>

            <div className="skills__bar">
                  <span className='skills__percentages node'>

                  </span>
              </div>          

              <div className="skils__title">
              <h3 className="skills__name">Java</h3>
              <span className='skills__number'>90%</span>
            </div>

            <div className="skills__bar">
                  <span className='skills__percentages java'>

                  </span>
              </div>          


              <div className="skils__title">
              <h3 className="skills__name">C/C++</h3>
              <span className='skills__number'>90%</span>
            </div>

            <div className="skills__bar">
                  <span className='skills__percentages c'>

                  </span>
              </div>          

          </div>


        </div>
      </div>

    </div>
    <AboutBox/>
   </section>
  )
}

export default about