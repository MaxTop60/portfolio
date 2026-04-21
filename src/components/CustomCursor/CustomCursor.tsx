import React, { useEffect, useState, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    const updatePosition = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      setPosition({ x: cursorX, y: cursorY });
    };

    const animate = () => {
      followerX += (cursorX - followerX) * 0.15;
      followerY += (cursorY - followerY) * 0.15;
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
      }
      
      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest('a, button, .projects__item, .stack__list__item, .footer__link');
      setIsHovering(!!hoverable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    animate();

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        ref={followerRef}
        className={`custom-cursor-follower ${isHovering ? 'hover' : ''}`}
      />
    </>
  );
};

export default CustomCursor;