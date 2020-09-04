import React from 'react';
import './Info.css';
import Logo from '../../images/skillTracker-icon.svg';
import SearchIcon from '../../images/search-icon.svg';

function Info() {
  return (
    <section className="info">
      <img className="info__logo" src={Logo} alt="логотип"/>
      <div className="info__user">
        <h1 className="info__user-name">Иванов Константин</h1>
        <p className="info__user-about">12 лет  |  6 класс  |  школа 453</p>
      </div>
      <button className="info__button">
          <img className="info__button-icon" src={SearchIcon} alt="#"/>Найти программу
      </button>
    </section>
  );
}

export default Info;