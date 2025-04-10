import React, {useEffect, useState} from "react";
import './style.css';

import preview from './img/preview.png';

import html from './img/icons/html.png';
import css from './img/icons/css.png';
import js from './img/icons/js.svg';
import react from './img/icons/react.svg';
import git from './img/icons/git.svg';
import react_router from './img/icons/react_router.svg';
import vs_code from './img/icons/vs_code.svg';
import webpack from './img/icons/webpack.svg';
import github from './img/icons/github.svg';
import telegram from './img/icons/telegram.svg';

import FadeInWhenVisible from "./helpers/FadeInWhenVisible";

import Project from "./components/Project/Project";
import projectList from "./helpers/ProjectList";


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    document.querySelector('#root').style.backgroundColor = isDarkTheme ? 'white' : 'rgb(28, 28, 34)';
    document.querySelector('#root').style.color = isDarkTheme ? 'black' : 'white';
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div className="container">
      <header className="header">
        <div className={`header__theme ${isDarkTheme ? 'header__theme_dark' : ''}`} onClick={toggleTheme}>
          <div className={`header__theme__switch ${isDarkTheme ?'header__theme__switch_dark' : ''}`}></div>
        </div>
      </header>

      <main className="main">

        <FadeInWhenVisible>
          <section className="preview">

            <div className="preview__info">
              <h1 className="preview__title">Привет, я Максим!</h1>
              <p className="preview__text">Я начинающий фронтенд разработчик с большим интересом к созданию красивых и функциональных веб-приложений. Я стремлюсь к постоянному обучению и развитию своих навыков в HTML, CSS и JavaScript.</p>
            </div>
            
            <img src={preview} alt="" className="preview__img" />
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="stack">
            <h1 className="stack__title">Мой стек</h1>

            <ul className="stack__list">
              <li className="stack__list__item">
                <img src={html} alt="" className="stack__list__item__img" />
                <p className="stack__list__item__title">HTML 5</p>
              </li>

              <li className="stack__list__item">
                <img src={css} alt="" className="stack__list__item__img" />
                <p className="stack__list__item__title">CSS 3</p>
              </li>

              <li className="stack__list__item">
                <img src={js} alt="" className="stack__list__item__img" />
                <p className="stack__list__item__title">JavaScript</p>
              </li>

              <li className="stack__list__item">
                <img src={react} alt="" className="stack__list__item__img" />
                <p className="stack__list__item__title">React</p>
              </li>

              <li className="stack__list__item">
                <img src={react_router} alt="" className="stack__list__item__img" />
                <p className="stack__list__item__title">React Router</p>
              </li>

              <li className="stack__list__item">
                <img src={git} alt="" className="stack__list__item__img" />
                <p className="stack__list__item__title">Git</p>
              </li>

              <li className="stack__list__item">
                <img src={webpack} alt="" className="stack__list__item__img" />
                <p className="stack__list__item__title">Webpack</p>
              </li>

              <li className="stack__list__item">
                <img src={vs_code} alt="" className="stack__list__item__img" />
                <p className="stack__list__item__title">VS Code</p>
              </li>

            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="projects">
            <h1 className="projects__title">Мои работы</h1>

            <ul className="projects__list">
              {
                projectList.map((project) => {
                  return (
                    <Project
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      githubLink={project.githubLink}
                      websiteLink={project.websiteLink}
                      image={project.image}
                      isDarkTheme={isDarkTheme}
                    />
                  ) 
                }) 
                   
              }
            </ul>
          </section>
        </FadeInWhenVisible>
      </main>

      <footer className="footer">
        <a href="https://github.com/MaxTop60" className={`footer__link ${isDarkTheme ? '' : 'footer__link_light'}`}><img src={github} alt="telegram" className="footer__link__img" /> <span className="footer__link__text">GitHub</span> <div className="footer__link__background"></div></a>
        <a href="https://t.me/mnagimg" className={`footer__link ${isDarkTheme ? '' : 'footer__link_light'}`}><img src={telegram} alt="telegram" className="footer__link__img" /> <span className="footer__link__text">Telegram</span> <div className="footer__link__background"></div></a>
      </footer>
    </div>
  );
}

export default App;
