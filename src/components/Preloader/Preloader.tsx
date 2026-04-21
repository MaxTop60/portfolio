import React, { useEffect, useState } from "react";
import "./Preloader.css";

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const [drawM, setDrawM] = useState(false);
  const [drawT, setDrawT] = useState(false);

  useEffect(() => {
    const timerM = setTimeout(() => setDrawM(true), 200);
    const timerT = setTimeout(() => setDrawT(true), 800);
    
    return () => {
      clearTimeout(timerM);
      clearTimeout(timerT);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShouldShow(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldShow) return null;

  return (
    <div className={`preloader ${!isLoading ? "preloader--hide" : ""}`}>
      <div className="preloader__content">
        <div className="preloader__logo">
          <svg className="preloader__logo__svg" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6a1aff" />
                <stop offset="100%" stopColor="#ff4d4d" />
              </linearGradient>
            </defs>
            
            <path 
              className={`preloader__letter-m ${drawM ? "drawn" : ""}`}
              d="M 40 140 L 40 60 L 80 100 L 120 60 L 120 140" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            
            <path 
              className={`preloader__letter-t ${drawT ? "drawn" : ""}`}
              d="M 145 60 L 175 60 M 160 60 L 160 140" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="12" 
              strokeLinecap="round"
            />
          </svg>
          
          <div className="preloader__logo__text">
            <span className="preloader__logo__name">Максим</span>
            <span className="preloader__logo__surname">Торубаров</span>
          </div>
        </div>
        
        <div className="preloader__progress">
          <div 
            className="preloader__progress__fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="preloader__percentage">{Math.floor(progress)}%</div>
        
        <div className="preloader__status">
          <span className="preloader__status__text">
            {progress < 30 && "Рисуем буквы..."}
            {progress >= 30 && progress < 60 && "Оживляем логотип..."}
            {progress >= 60 && progress < 90 && "Настройка анимаций..."}
            {progress >= 90 && "Почти готово!"}
          </span>
          <span className="preloader__status__cursor">_</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;