import './style.css';

interface IStackItemProps {
    title: string;
    img: string;
}

const StackItem = ({title, img}: IStackItemProps) => {
    return ( 
        <li className="stack__list__item">
            <img src={img} alt={title} className="stack__list__item__img" />
            <p className="stack__list__item__title">{title}</p>
        </li>
     );
}
 
export default StackItem;