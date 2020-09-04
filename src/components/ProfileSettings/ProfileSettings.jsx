import React from 'react';
import './ProfileSettings.css';
import KidAvatar from '../../images/kid-avatar.png';
import Pencil from '../../images/pencil-icon.svg';
import Lock from '../../images/lock-icon.svg';

function ProfileSettings() {
  function ProgressBar({name, n}) {
    // Не лучшая практика оставлять компонент в компоненте
    const fill = {
      width: `${n}%`,
      height: '100%',
      backgroundColor: `${n >= 50 ? '#80C02F' : '#FF981F'}`
    }

    const percent = {
      color: `${n >= 50 ? '#80C02F' : '#FF981F'}`
    }

    return (
    <div className="settings__progressbar-line">
      <p className="settings__progress-name">{name}</p>
      <div className="settings__progress-box">
        <div className="settings__progressbar">
          <div style={fill}/>
        </div>
          <p className="settings__progressbar-percent" style={percent}>{n}%</p>
      </div>
    </div>
    )
  }

  function ProgressCircle({n}) {
    const fill = {
      strokeDasharray: "535",
      strokeDashoffset: `${535 - (535 * n) / 100}`,
      stroke: `${n >= 50 ? '#80C02F' : '#FF981F'}`,
      strokeWidth: "5px",
      fill: "#FFFFFF",
      cx: "95",
      cy: "95",
      r: "85",
    }

    const percent = {
      position: "absolute",
      fontWeight: "bold",
      fontSize: "32px",
      lineHeight: "28px",
      color: `${n >= 50 ? '#80C02F' : '#FF981F'}`
    }

    return (
      <div className="settings__circle-progressbar">
      <svg className="settings__progress-circle">
        <circle className="circle" style={fill}/>
      </svg>
      <p style={percent}>{n}%</p>
    </div>
    )
  }

  return (
    <section className="settings">
        <h2 className="settings__title">Настройки профиля</h2>
      <div className="settings__table">
        <div className="settings__change">
          <img className="settings__user-avatar" src={KidAvatar} alt=""/>
          <p className="settings__change-avatar">Сменить фото</p>
        </div>
        <p className="settings__progress-title settings__progress-title_mobile">Заполненность профиля</p>
        <div className="settings__change-info">
          <div className="settings__change-info-table">
          <ul className="settings__user-info-list">
            <li className="settings__user-info">Иванов Константин Николаевич</li>
            <li className="settings__user-info">30.05.2010</li>
            <li className="settings__user-info">Школа 1547</li>
            <li className="settings__user-info">Класс 5В</li>
            <li className="settings__user-info">+7 234 443 27 45</li>
            <li className="settings__user-info">aleksey234@mail.ru</li>
            <li className="settings__user-info">Facebook: alex_ivanov</li>
            <li className="settings__user-info">Vkontkte: alex_ivanov</li>
            <li className="settings__user-info">Instagram: alex_ivanov</li>
          </ul>
          <div className="settings__buttons settings__buttons_mobile">
              <button className="settings__button">
                <img className="settings__button-icon" src={Pencil} alt="#"/>Редактировать
              </button>
            <button className="settings__button">
              <img className="settings__button-icon" src={Lock} alt="#"/>Изменить пароль
            </button>
          </div>
          <div className="settings__disable-mail-table">
            <label className="settings__disable-mail-caption" htmlFor="toggle">Отключить рассылку
            <input className="settings__disable-mail-toggle" type="checkbox" />
            </label>
          </div>
          <a className="settings__user-delete" href="#">Удалить аккаунт</a>
          </div>
          <div className="settings__buttons settings__buttons_pc">
              <button className="settings__button">
                <img className="settings__button-icon" src={Pencil} alt="#"/>Редактировать
              </button>
            <button className="settings__button">
              <img className="settings__button-icon" src={Lock} alt="#"/>Изменить пароль
            </button>
          </div>
        </div>
        <div className="settings__progress">
          <ProgressCircle n={94} />
          <div className="settings__progressbar-table">
            <p className="settings__progress-title settings__progress-title_pc">Заполненность профиля</p>
            <ProgressBar name={'Персональные данные:'} n={50} />
            <ProgressBar name={'Тесты:'} n={45} />
            <ProgressBar name={'Достижения:'} n={89} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSettings;