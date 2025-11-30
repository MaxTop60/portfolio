import React, { ReactNode, useEffect, useRef, useState } from "react";
import "./FadeIn.css";

interface IFadeInWhenVisibleProps {
  children: ReactNode;
}

function FadeInWhenVisible({ children }: IFadeInWhenVisibleProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
}

export default FadeInWhenVisible;
