import React from 'react';
import './Footer.css';
import FaceLogo from '../../images/facebook-logo.svg';
import VkLogo from '../../images/vk-logo.svg';
import InstLogo from '../../images/inst-logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__table">
        <nav className="footer__links">
          <a href="#" className="footer__link">О сервисе</a>
          <a href="#" className="footer__link">Подбор программы</a>
          <a href="#" className="footer__link">Наши учителя</a>
        </nav>
        <nav className="footer__icons">
          <a href="#" className="footer__link">
            <img className="footer__icon" src={FaceLogo} alt="логотип"/>
          </a>
          <a href="#" className="footer__link">
            <img className="footer__icon" src={VkLogo} alt="логотип"/>
          </a>
          <a href="#" className="footer__link">
            <img className="footer__icon" src={InstLogo} alt="логотип"/>
          </a>
        </nav>
        <div className="footer__contacts">
          <p className="footer__contact">+7 234 443 27 45</p>
          <p className="footer__contact">info@skill-traker.ru</p>
          <p className="footer__copyright">© 2020</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;