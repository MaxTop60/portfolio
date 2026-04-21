import React from "react";
import "./Experience.css";

interface ExperienceProps {
  company: string;
  position: string;
  period: string;
  stack: string[];
  achievements: string[];
  isDarkTheme: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ 
  company, 
  position, 
  period, 
  stack, 
  achievements,
  isDarkTheme 
}) => {
  return (
    <li className={`experience__item ${isDarkTheme ? "experience__item_dark" : "experience__item_light"}`}>
      <div className="experience__header">
        <h3 className="experience__company">{company}</h3>
        <span className="experience__period">{period}</span>
      </div>
      
      <div className={`experience__position ${isDarkTheme ? "" : "experience__position_light"}`}>
        {position}
      </div>
      
      <div className="experience__stack">
        {stack.map((tech, idx) => (
          <span 
            key={idx} 
            className={`experience__tech ${isDarkTheme ? "" : "experience__tech_light"}`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <ul className="experience__achievements">
        {achievements.map((item, idx) => (
          <li key={idx} className="experience__achievement">
            <span className="experience__achievement-icon">▹</span>
            <span className={`experience__achievement-text ${isDarkTheme ? "" : "experience__achievement-text_light"}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Experience;