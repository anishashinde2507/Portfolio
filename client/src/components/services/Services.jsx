import React from 'react'
import "./services.css"
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg";



const data = [
  {
    id: 1,
    image: Image1,
    title: "Frontend",
    description:
      "I can organize content and design the structure of your application using React.js.",
  },
  {
    id: 2,
    image: Image2,
    title: "Backend",
    description:
      "I create full stack web application with beautiful design - Spring Boot, Node.js",
  },
  
];


const Services = () => {
  return (
   <section className="services container section" id='services'>
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({id,image,title,description})=>{
        return(
          <div className="services__card" key={id}>
          <img src={image} alt="" className='services__img'/>

          <h3 className='services__title'>{title}</h3>
          <p className='services__description'>{description}</p>
          </div>
        )


      })}
    </div>

   </section>
  );
};

export default Services