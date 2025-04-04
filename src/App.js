import React from "react";
import './normalize.css';
import './style.css';

import logo from './img/logo.png';
import basket from './img/basket.svg';
import menu from './img/menu.svg';
import close from './img/close_icon.svg';
import light from './img/lightning.svg';

function App() {
  const openMenu = () => {
    document.querySelector('.header__nav_mobile').style.transform = 'translateX(0)';
  }

  const closeMenu = () => {
    document.querySelector('.header__nav_mobile').style.transform = 'translateX(290px)';
  }

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="" className="header__logo" />

        <nav className="header__nav">
          <a href="#" className="header__link">Menu</a>
          <a href="#" className="header__link">Events</a>
          <a href="#" className="header__link">About us</a>
        </nav>

        <nav className="header__nav_basket-and-login">
          <a href="#" className="header__login">Login</a>

          <a href="#" className="header__basket"><img src={basket} alt="" className="header__basket-img" /></a>
          <img src={menu} alt="" className="header__menu-btn" onClick={openMenu}/>
        </nav>

        <nav className="header__nav_mobile">
          <img src={close} alt="" className="header__nav_mobile__close" onClick={closeMenu}/>
          <a href="#" className="header__link header__link_mobile">Menu</a>
          <a href="#" className="header__link header__link_mobile">Events</a>
          <a href="#" className="header__link header__link_mobile">About us</a>
          <a href="#" className="header__login header__login_mobile">Login</a>
        </nav>
      </header>

      <main className="main">
        <section className="preview">
          <div className="preview__info">
            <h1 className="preview__title">
              The Fastest Pizza <img src={light} alt="" className="preview__title-img" /> Delivery
            </h1>

            <p className="preview__text">
              We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span className="preview__text-light">pizza is free!</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
