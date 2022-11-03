import React from 'react';
import Header from './Header';

function Main() {
  return(
    <>
    <Header />
    <section className="main">
      <div className="main__container">
        <div className="main__text">
          <h2 className="main__title">Путешествие</h2>
          <p className="main__about">на красную планету</p>
          <button className="main__button">Начать путешествие</button>
        </div>
        <div className="main__info">
          <div className="main__element">
            <div className="element__text">мы</div>
            <div className="element__number">1</div>
            <div className="element__text">на рынке</div>
          </div>
          <div className="main__element">
            <div className="element__text">гарантируем</div>
            <div className="element__number">50%</div>
            <div className="element__text">безопасности</div>
          </div>
          <div className="main__element">
            <div className="element__text">календарик за</div>
            <div className="element__number">2001</div>
            <div className="element__text">в подарок</div>
          </div>
          <div className="main__element">
            <div className="element__text">путешествие</div>
            <div className="element__number">597</div>
            <div className="element__text">дней</div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Main;