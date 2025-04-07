import React, {useState} from "react";

import './style.css'

const PizzaCard = (props) => {
    const [quantity, setQuantity] = useState(1);

    return ( 
        <li className="menu__list__item">
            <img src={props.img} alt="" className="menu__list__item__img"/>
            <h2 className="menu__list__item__title">{props.title}</h2>
            <p className="menu__list__item__description">{props.description}</p>

            <div className="menu__list__item__price-container">
                <h2 className="menu__list__item__price">{props.price} $</h2>

                <div className="menu__list__item__quantity-container">
                    <button className="menu__list__item__quantity-btn menu__list__item__quantity-btn_minus menu__list__item__quantity-btn_disable" onClick={() => {
                            if(quantity > 1) {
                                setQuantity(quantity - 1);
                            }
                        }}>-</button>

                    <div className="menu__list__item__quantity">{quantity}</div>    
                    <button className="menu__list__item__quantity-btn menu__list__item__quantity-btn_plus" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
            </div>

            <a href="#" className="menu__list__item__link">Order Now</a>
        </li>
     );
}
 
export default PizzaCard;