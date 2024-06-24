import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
          <i className="about__icon icon-fire"></i>


        <div>
          <h3 className="about__title">4</h3>
          <span className="about__subtitle">Project Completion</span>
       </div>
       
    </div>


    <div className="about__box">
          <i className="about__icon icon-cup"></i>


        <div>
          <h3 className="about__title">5</h3>
          <span className="about__subtitle">Cup of Coffee</span>
       </div>
       
    </div>



    <div className="about__box">
          <i className="about__icon graduation-cap"></i>


        <div>
          <h3 className="about__title">A+</h3>
          <span className="about__subtitle">Academics</span>
       </div>
       
    </div>

  


    </div>
  )
}

export default AboutBox