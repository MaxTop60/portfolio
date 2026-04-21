// App.tsx (исправленная версия)
import React, { useState, useRef, useEffect } from "react";
import "./style.css";

import preview from "./img/preview.png";
import github from "./img/icons/github.svg";
import telegram from "./img/icons/telegram.svg";

import FadeInWhenVisible from "./helpers/FadeInWhenVisible";
import Project from "./components/Project/Project";
import StackItem from "./components/StackItem/StackItem";
import Particles from "./components/Particles/Particles";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Preloader from "./components/Preloader/Preloader";
import Experience from "./components/Expirience/Expirience";

import { TProject, projectList } from "./helpers/ProjectList";
import { StackList, TStack } from "./helpers/StackList";


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    root.current = document.querySelector("#root");
  }, []);

  useEffect(() => {
    const MIN_DISPLAY_TIME = 3000; 
    const startTime = Date.now();

    // Функция, которая завершит загрузку
    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);
      
      // Ждём оставшееся время, даже если контент уже загружен
      setTimeout(() => {
        setIsLoading(false);
      }, remaining);
    };

    // Проверяем загрузку всех изображений
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        finishLoading();
      });
    };

    // Даже если изображений нет, завершим через MIN_DISPLAY_TIME
    const timeout = setTimeout(() => {
      finishLoading();
    }, MIN_DISPLAY_TIME);

    checkImagesLoaded();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const toggleTheme = () => {
    if (root.current) {
      root.current.style.backgroundColor = isDarkTheme
        ? "white"
        : "rgb(28, 28, 34)";
      root.current.style.color = isDarkTheme ? "black" : "white";
      setIsDarkTheme(!isDarkTheme);
    }
  };

  return (
    <>
      <Preloader isLoading={isLoading} />
      
      {/* Контент скрыт, пока isLoading === true */}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <CustomCursor />
        <Particles />
        <div className="container">
          <header className={`header ${isDarkTheme && "header_dark"}`}>
            <div
              className={`header__theme ${isDarkTheme ? "header__theme_dark" : ""}`}
              onClick={toggleTheme}
            >
              <div
                className={`header__theme__switch ${
                  isDarkTheme ? "header__theme__switch_dark" : ""
                }`}
              ></div>
            </div>
          </header>

          <main className="main">
            <FadeInWhenVisible>
              <section className="preview">
                <div className="preview__info">
                  <h1 className="preview__title">Привет, я Максим!</h1>
                  <p className="preview__text">
                    Разрабатываю веб-приложения с полным циклом реализации:
                    проектирую интерфейсы, пишу логику на стороне
                    бэкенда и выполняю деплой на сервер. Мне важно видеть проект
                    целиком — от первой строчки стилей до работающей серверной
                    части. Постоянно обучаюсь, чтобы эффективно связывать фронтенд и
                    бэкенд в единой экосистеме приложения.
                  </p>
                </div>

                <img src={preview} alt="" className="preview__img" width="700" />
              </section>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <section className="expirience">
                <h1 className="experience-section__title">Опыт работы</h1>

                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-number">3+</div>
                    <div className="stat-label">Коммерческих проекта</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">JWT + Refresh</div>
                    <div className="stat-label">Безопасная авторизация</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">Fullstack</div>
                    <div className="stat-label">React ↔ Django</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">SMTP</div>
                    <div className="stat-label">Email-напоминания</div>
                  </div>
                </div>
                
                <ul className="experience__list">
                  <Experience
                    company="ООО «ЦИТРИКС»"
                    position="Frontend Developer"
                    period="Февраль 2026 – настоящее время"
                    stack={["React", "TypeScript", "Vite", "Zustand", "TanStack Query", "Ant Design", "Tailwind", "Supabase", "Nest.js", "PostgreSQL", "ClickHouse"]}
                    achievements={[
                      "Провёл рефакторинг архитектуры фронтенда под Feature-Sliced Design (FSD) — разделил монолит на слои, что сократило время ввода новых разработчиков и упростило масштабирование",
                      "Разработал лендинг для мониторинговой системы с интерактивным калькулятором стоимости — реализовал динамический расчёт тарифа в реальном времени",
                      "Оптимизировал управление состоянием: мигрировал с Redux Toolkit на Zustand, внедрил TanStack Query для кэширования и инвалидации запросов",
                      "Инициировал внедрение ClickHouse для аналитики: спроектировал схему хранения агрегированных данных, что ускорило выполнение отчётов с 5 секунд до 0.3 секунды",
                      "Реализовал интерактивную карту с трекингом транспорта (OpenStreetMap + Supabase Realtime) — отображение до 50 машин с обновлением каждые 3 секунды"
                    ]}
                    isDarkTheme={isDarkTheme}
                  />

                   <Experience
                    company="Мед-календарь"
                    position="Fullstack Developer (коммерческий проект)"
                    period="2026"
                    stack={["React", "TypeScript", "Redux Toolkit", "Tailwind", "Django", "PostgreSQL", "SMTP"]}
                    achievements={[
                      "Разработал веб-приложение для медицинских заметок с нуля (фуллстак: React + Django)",
                      "Реализовал CRUD заметок с разными типами: поход к врачу, анализы, приём лекарств",
                      "Добавил прикрепление файлов (PDF, изображения) к заметкам",
                      "Настроил email-уведомления через SMTP (напоминания о визитах и анализах)",
                      "Спроектировал схему PostgreSQL с внешними ключами и каскадным удалением",
                      "Реализовал REST API на Django DRF с JWT-аутентификацией"
                    ]}
                    isDarkTheme={isDarkTheme}
                  />
                  
                  <Experience
                    company="Блог-сайт для участницы БРИКС"
                    position="Fullstack Developer (коммерческий проект)"
                    period="2025"
                    stack={["React", "Python", "Django", "PostgreSQL"]}
                    achievements={[
                      "Разработал полноценный сайт-блог с портфолио с нуля под ключ (ведущий разработчик в команде из 2 человек)",
                      "Спроектировал и реализовал кастомную админ-панель на Django — заказчица самостоятельно добавляет посты и кейсы",
                      "Настроил Django + PostgreSQL на сервере, интегрировал с фронтендом на React, обеспечил защиту от SQL-инъекций и XSS",
                      "Реализовал ленту постов с системой поиска, адаптивную вёрстку (кроссбраузерно)"
                    ]}
                    isDarkTheme={isDarkTheme}
                  />
                  
                 
                </ul>
              </section>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <section className="stack">
                <h1 className="stack__title">Мой стек</h1>

                <ul className="stack__list">
                  {StackList.map((stackItem: TStack, idx: number) => {
                    return (
                      <StackItem key={idx} title={stackItem.title} img={stackItem.img} />
                    );
                  })}
                </ul>
              </section>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <section className="projects">
                <h1 className="projects__title">Мои работы</h1>

                <ul className="projects__list">
                  {projectList.map((project: TProject, index: number) => {
                    const direction = index % 2 === 0 ? "left" : "right";
                    const delay = index * 100;
                    
                    return (
                      <FadeInWhenVisible key={project.id} direction={direction} delay={delay}>
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
                      </FadeInWhenVisible>
                    );
                  })}
                </ul>
              </section>
            </FadeInWhenVisible>
          </main>

          <footer className="footer">
            <a
              href="https://github.com/MaxTop60"
              className={`footer__link ${isDarkTheme ? "" : "footer__link_light"}`}
            >
              <img src={github} alt="github" className="footer__link__img" />{" "}
              <span className="footer__link__text">GitHub</span>{" "}
              <div className="footer__link__background"></div>
            </a>
            <a
              href="https://t.me/mnagimg"
              className={`footer__link ${isDarkTheme ? "" : "footer__link_light"}`}
            >
              <img src={telegram} alt="telegram" className="footer__link__img" />{" "}
              <span className="footer__link__text">Telegram</span>{" "}
              <div className="footer__link__background"></div>
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;