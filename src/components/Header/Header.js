import React from "react";
import logoPath from '../../images/logo.svg'

function Header(props) {
  return (
    <header className="header">
        <img className="header__logo" src={logoPath} alt="Логотип Место" />
      <div className="header__info-container">
        {props.loggedIn && <p className="header__mail">email@mail.com</p>}
        <button className="header__button">{props.buttonName}</button>
      </div>
    </header>
  )
}

export default Header