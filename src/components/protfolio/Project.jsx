import React, { useState } from 'react';
import './protfolio.css'; // Ensure the path is correct
import Menu from './Menu'; // Ensure the path is correct

const Project = () => {
  const [items, setItems] = useState(Menu);

  const filterItems = (category) => {
    if (category === 'Everything') {
      setItems(Menu);
    } else {
      const filteredItems = Menu.filter(item => item.category === category);
      setItems(filteredItems);
    }
  };

  return (
    <section className="work container section" id="project">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        {['Everything', 'Frontend', 'MERN stack'].map(category => (
          <span
            key={category}
            className="work__item"
            onClick={() => filterItems(category)}
          >
            {category}
          </span>
        ))}
      </div>
      <div className="work__container grid">
        {items.map(({ id, image, title, category, link }) => (
          <div className="work__card" key={id}>
            <div className="work__thumbnail">
              <img src={image} alt={title} className="work__img" />
              <div className="work__mask"></div>
            </div>
            <span className="work__category">{category}</span>
            <h3 className="work__title">{title}</h3>
            <a href={link} className="work__button" target="_blank" rel="noopener noreferrer">
              <i className="icon-link work__button-icon"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
