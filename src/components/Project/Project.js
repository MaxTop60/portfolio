import './style.css';

import FadeInWhenVisible from '../../helpers/FadeInWhenVisible';

import github from '../../img/icons/github.svg';
import website from '../../img/icons/website.png';

const Project = (props) => {
    return ( 
        <FadeInWhenVisible>
            <li className={`projects__item ${props.isDarkTheme ? 'projects__item_dark' : ''}`} >

                <img src={props.image} alt={props.title} className="projects__item__img" />
                <div className="projects__item__info">
                    <h2 className="projects__item__title">{props.title}</h2>

                    <p className="projects__item__text">{props.description}</p>

                    <div className="projects__item__links">
                        <a href={props.githubLink} className="projects__item__link"><img src={github} alt="" className="projects__item__link-img" /> Ссылка на код</a>
                        <a href={props.websiteLink} className="projects__item__link"><img src={website} alt="" className="projects__item__link-img" /> Ссылка на сайт</a>
                    </div>
                </div>
            </li> 
        </FadeInWhenVisible>
        
     );
}
 
export default Project;