import React from 'react';
import './Header.css';
import InfoIcon from '../../images/info-icon.svg';
import SearchIcon from '../../images/search-icon.svg';
import KidAvatar from '../../images/kid-avatar.png';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function menu() {
    setIsOpen(!isOpen)
  }
  return (
  <div className="header">
    <nav className="header__navigation">
      <div className="header__links"> 
      {/* Учили, что используют ul>li, но не хочется загромождать код */}
        <a className="header__link" href="иконка">
          <img className="header__link-icon" src={InfoIcon} alt="#"/>О сервисе
        </a>
        <a className="header__link" href="иконка">
          <img className="header__link-icon" src={SearchIcon} alt="#"/>Подбор программы
        </a>
      </div>
      <div className="header__links">
        <a className="header__user-link" href="#">Мои программы
        </a>
        <a className="header__user-link" href="#">Навыки
        </a>
        <a className="header__user-link" href="#">Тестирование
        </a>
      </div>
      <div className="header__mobile-menu" onClick={menu}>
      </div>
      <div className="header__icons">
        <button className="header__icon header__icon_star">
        </button>
        <button className="header__icon header__icon_chat">
          <div className="header__icon-notification">
            <p className="header__icon-notification-count">1</p>
          </div>
        </button>
        <button className="header__icon header__icon_bell">
          <div className="header__icon-notification">
          <p className="header__icon-notification-count">10</p>
          </div>
        </button>
      </div>
      <div className="header__user">
        <img className="header__user-avatar" src={KidAvatar} alt="ваш аватар"/>
        <button className="header__user-logout">Выход</button>
      </div>
      {/* mobile-menu */}
      <div className={`header__links-mobile ${isOpen ? 'header__links-mobile_active' : ''}`}> 
        <a className="header__link-mobile" href="иконка">О сервисе
        </a>
        <a className="header__link-mobile" href="иконка">Подбор программы
        </a>
        <a className="header__link-mobile" href="#">Мои программы
        </a>
        <a className="header__link-mobile" href="#">Навыки
        </a>
        <a className="header__link-mobile" href="#">Тестирование
        </a>
      </div>
    </nav>
  </div>
  );
}

export default Header;