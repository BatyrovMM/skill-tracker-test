import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <section className="menu">
      <div className="menu__table">
        <p className="menu__select-tab">Профиль</p>
        <p className="menu__select-tab">Мои Программы</p>
        <p className="menu__select-tab">Родители и учителя</p>
        <p className="menu__select-tab menu__select-tab_active">Настройки профиля</p>
      </div>
    </section>
  );
}

export default Menu;