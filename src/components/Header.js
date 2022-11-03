import React from 'react';
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {

  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsBurgerPopupOpen(true);
  }
  const closeAllPopups = () => {
    setIsBurgerPopupOpen(false);
  }

  return(
    <section className="header">
      <div className="header__container">
        <div className="header__logo"></div>
        <ul className="header__nav">
            <li className="header__item">                    
            <NavLink className="header__link" to="/">Главная</NavLink>
            </li>
            <li className="header__item">
            <NavLink className="header__link" to="/technology">Технология</NavLink>
            </li>
            <li className="header__item">
            <NavLink className="header__link" to="/table">График полетов</NavLink>
            </li>
            <li className="header__item">                    
            <NavLink className="header__link" to="/guarantees">Гарантии</NavLink>
            </li>
            <li className="header__item">
            <NavLink className="header__link" to="/about">О компании</NavLink>
            </li>
            <li className="header__item">
            <NavLink className="header__link" to="/contacts">Контакты</NavLink>
            </li>
        </ul>
        <button className="header__burger" onClick={handleBurgerClick}></button>
        <div className={isBurgerPopupOpen ? "header__popup display-flex" : "header__popup display-none"}>
            <div className="popup__container popup__container-left"></div>
            <div className="popup__container popup__container-right">
            <div className="popup__close" onClick={closeAllPopups}></div>
            <div className="popup__navigation">
                <NavLink className="header__link popup__link_popup" onClick={closeAllPopups} to="/">Главная</NavLink>
                <NavLink className="header__link popup__link_popup" onClick={closeAllPopups} to="/technology">Технология</NavLink>
                <NavLink className="header__link popup__link_popup" onClick={closeAllPopups} to="/table">График полетов</NavLink>
                <NavLink className="header__link popup__link_popup" onClick={closeAllPopups} to="/guarantees">Гарантии</NavLink>
                <NavLink className="header__link popup__link_popup" onClick={closeAllPopups} to="/about">О компании</NavLink>
                <NavLink className="header__link popup__link_popup" onClick={closeAllPopups} to="/contacts">Контакты</NavLink>
            </div>
            <div className="popup__foter">
                <p className="footer__text">Тестовое задание SAGIROV.com</p>
                <div className="line"></div>
                <div className="footer__row">
                <p className="footer__yers">© 2022</p>
                <div className="footer__links">
                    <a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/bizhello">Github</a>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header;