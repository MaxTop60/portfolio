import pizza_1 from '../img/Pizza/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1-1.png';
import pizza_2 from '../img/Pizza/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1-2.png';
import pizza_3 from '../img/Pizza/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1-3.png';
import pizza_4 from '../img/Pizza/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1-4.png';
import pizza_5 from '../img/Pizza/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1-5.png';
import pizza_6 from '../img/Pizza/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1-6.png';
import pizza_7 from '../img/Pizza/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1-7.png';
import pizza_8 from '../img/Pizza/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1-1.png';

const PizzaList = [
    {
        title: 'Italian',
        img: pizza_1,
        size: 28,
        price: 8.35,
        category: ['meat'],
        most_popular: false,
    },
    {
        title: 'Venecia',
        img: pizza_2,
        size: 28,
        price: 7.35,
        category: ['sea-products', 'mushroom'],
        most_popular: false,
    },
    {
        title: 'Meat',
        img: pizza_3,
        size: 28,
        price: 9.35,
        category: ['meat'],
        most_popular: false,
    },
    {
        title: 'Cheese',
        img: pizza_4,
        size: 28,
        price: 8.35,
        category: ['vegetarian'],
        most_popular: false,
    },
    {
        title: 'Argentina',
        img: pizza_5,
        size: 28,
        price: 7.35,
        category: ['vegetarian', 'mushroom'],
        most_popular: true,
    },
    {
        title: 'Gribnaya',
        img: pizza_6,
        size: 28,
        price: 6.35,
        category: ['vegetarian'],
        most_popular: true,
    },
    {
        title: 'Tomato',
        img: pizza_7,
        size: 28,
        price: 7.35,
        category: ['vegetarian'],
        most_popular: true,
    },
    {
        title: 'Italian x2',
        img: pizza_8,
        size: 28,
        price: 8.35,
        category: ['meat'],
        most_popular: true,
    },
]

PizzaList.forEach((item, index) => {
    item.id = index + 1;
    item.description = 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...'
})

export {PizzaList};