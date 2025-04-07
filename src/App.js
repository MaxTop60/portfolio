import React, {useEffect, useState} from "react";
import './style.css';

import logo from './img/logo.png';
import basket from './img/basket.svg';
import menu from './img/menu.svg';
import close from './img/close_icon.svg';
import light from './img/lightning.svg';
import preview_photo from './img/preview_photo.png';
import preview_pizza from './img/preview_pizza.png';
import preview_fries from './img/preview_fries.png';

import popular_background from './img/backgrounds/popular_background.jpg';
import blog_background from './img/backgrounds/blog_background.jpg';
import cofee_background from './img/backgrounds/cofee_background.jpg';
import inst_background from './img/backgrounds/inst_background.jpg';
import tour_background from './img/backgrounds/tour_background.jpg';
import two_for_one_background from './img/backgrounds/two_for_one_background.jpg';
import where_background from './img/backgrounds/where_background.jpg';

import about_text from './img/about_text.png';
import about_photo from './img/about_photo.png';


import PizzaCard from "./components/PizzaCard/PizzaCard";

import { PizzaList } from "./helpers/PizzaList";

import FadeInWhenVisible from "./helpers/FadeInWhenVisible";

function App() {
  const [category, setCategory] = useState('all');

  const openMenu = () => {
    document.querySelector('.header__nav_mobile').style.transform = 'translateX(0)';
  }

  const closeMenu = () => {
    document.querySelector('.header__nav_mobile').style.transform = 'translateX(290px)';
  }

  const changeCategory = (event, name) => {
    document.querySelector('.menu__nav__btn_active').classList.remove('menu__nav__btn_active');
    event.target.classList.add('menu__nav__btn_active');
    setCategory(name);
  }

  return (
    <>
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
            <h1 className="preview__title title">
              The Fastest Pizza &nbsp;&nbsp;&nbsp; <img src={light} alt="" className="preview__title-img" /> Delivery
            </h1>

            <p className="preview__text">
              We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span className="preview__text-light">pizza is free!</span>
            </p>
          </div>

          <div className="preview__photo">
            <img src={preview_photo} alt="" className="preview__photo__img" />
            <img src={preview_pizza} alt="" className="preview__photo__pizza" />
            <img src={preview_fries} alt="" className="preview__photo__fries" />
          </div>
        </section>

        <section className="menu">
          <FadeInWhenVisible>
            <h1 className="menu__title title">Menu</h1>

            <nav className="menu__nav">
              <button className="menu__nav__btn menu__nav__btn_active" onClick={event => {
                changeCategory(event, 'all');
              }}>Show All</button>
              <button className="menu__nav__btn" onClick={event => {
                changeCategory(event, 'meat');
              }}>Meat</button>
              <button className="menu__nav__btn" onClick={event => {
                changeCategory(event, 'vegetarian');
              }}>Vegetarian</button>
              <button className="menu__nav__btn" onClick={event => {
                changeCategory(event, 'sea-products');
              }}>Sea products</button>
              <button className="menu__nav__btn" onClick={event => {
                changeCategory(event, 'mushroom');
              }}>Mushroom</button>
            </nav>
          </FadeInWhenVisible>
            <ul className="menu__list">
              { category === 'all'
                  ? PizzaList.map((pizza, index) => {
                    return (
                      <FadeInWhenVisible>
                        <PizzaCard title={pizza.title} img={pizza.img} description={pizza.description} price={pizza.price} key={pizza.id} />
                      </FadeInWhenVisible>
                    )
                  })
                  : PizzaList.map((pizza, index) => {
                    if (pizza.category.find(el => el === category)) {
                      return (
                        <FadeInWhenVisible>
                          <PizzaCard title={pizza.title} img={pizza.img} description={pizza.description} price={pizza.price} key={pizza.id} />
                        </FadeInWhenVisible>
                      )
                    }
                  })
              }
            </ul>
          
        </section>

        <section className="most-popular">
          <FadeInWhenVisible>
            <div className="most-popular__title card">
              <img src={popular_background} alt="" className="most-popular__title__img card__img events__card__img" />
              <h1 className="most-popular__title__text">MOST POPULAR PIZZA</h1>
            </div>
          </FadeInWhenVisible>
         

          <ul className="menu__list">
            { 
                PizzaList.map((pizza, index) => {
                  if (pizza.most_popular) {
                    return (
                      <FadeInWhenVisible>
                        <PizzaCard title={pizza.title} img={pizza.img} description={pizza.description} price={pizza.price} key={pizza.id} />
                      </FadeInWhenVisible>
                  )
                }
                })

            }
          </ul>
        </section>
          
        <FadeInWhenVisible>
          <section className="events">
            <div className="events__info">
              <h1 className="events__info__title title">Events</h1>
              <p className="events__info__text preview__text">There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!</p>
            </div>

            <div className="events__card card">
              <img src={popular_background} alt="" className="card__img events__card__img" />
              <div className="events__card__info">
                <h2 className="events__card__title title">HOW WE COOKING</h2>
                <a href="#" className="events__card__link">More</a>
              </div>
              
            </div>

            <div className="events__card card">
              <img src={blog_background} alt="" className="card__img events__card__img" />
              <div className="events__card__info">
                <h2 className="events__card__title title">OUR BLOG</h2>
                <a href="#" className="events__card__link">More</a>
              </div>
              
            </div>

            <div className="events__card card events__card_big">
              <img src={two_for_one_background} alt="" className="card__img events__card__img" />
              <div className="events__card__info">
                <h2 className="events__card__title title">TWO PIZZA FOR 1 PRICE</h2>
                <a href="#" className="events__card__link">More</a>
              </div>
              
            </div>

            <div className="events__card card events__card_big">
              <img src={tour_background} alt="" className="card__img events__card__img" />
              <div className="events__card__info">
                <h2 className="events__card__title title">KITCHEN TOUR</h2>
                <a href="#" className="events__card__link">More</a>
              </div>
              
            </div>

            <div className="events__card card">
              <img src={cofee_background} alt="" className="card__img events__card__img" />
              <div className="events__card__info">
                <h2 className="events__card__title title">FREE COFFEE FOR 3 PIZZA</h2>
                <a href="#" className="events__card__link">More</a>
              </div>
              
            </div>

            <div className="events__card card">
              <img src={inst_background} alt="" className="card__img events__card__img" />
              <div className="events__card__info">
                <h2 className="events__card__title title">OUR INSTAGRAM</h2>
                <a href="#" className="events__card__link">More</a>
              </div>
              
            </div>

            <div className="events__card card">
              <img src={where_background} alt="" className="card__img events__card__img" />
              <div className="events__card__info">
                <h2 className="events__card__title title">WHERE ARE YOU CHOSE US?</h2>
                <a href="#" className="events__card__link">More</a>
              </div>
              
            </div>
          </section>
        </FadeInWhenVisible>  
        
        <FadeInWhenVisible>
          <section className="preview about">
            <div className="preview__info about__info">
              <h1 className="preview__title title">
                About us
              </h1>

              <p className="preview__text">
                In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia. <br />
                <img src={about_text} alt="" className="preview__text-img about__text-img" />
                The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / form / deliver customer orders on time.
              </p>
            </div>

            <div className="preview__photo about__photo">
              <img src={about_photo} alt="" className="preview__photo__img about__photo__img" />
              <img src={preview_pizza} alt="" className="preview__photo__pizza about__photo__pizza" />
              <img src={preview_fries} alt="" className="preview__photo__fries about__photo__fries" />
            </div>
          </section>
        </FadeInWhenVisible>
        
      </main>
    </div>
    <footer className="footer">
        <img src={logo} alt="" className="footer__logo" />
    </footer>
    </>
  );
}

export default App;
