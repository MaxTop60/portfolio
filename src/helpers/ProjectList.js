import pizzashop from '../img/projects/pizzashop.png';
import book_store from '../img/projects/book_store.png';
import mesto from '../img/projects/mesto.png';
import russian_travel from '../img/projects/russian_travel.png';

const projectList = [
    {
        title: 'Pizzashop',
        description: 'Лендинговая страница ресторана с использованием React JS.',
        image: pizzashop,
        githubLink: 'https://github.com/MaxTop60/pizzashop',
        websiteLink: 'https://maxtop60.github.io/pizzashop/',
    },

    {
        title: 'Book Store',
        description: 'Интернет-магазин книг с использованием React JS.',
        image: book_store,
        githubLink: 'https://github.com/MaxTop60/book_store',
        websiteLink: 'https://maxtop60.github.io/book_store/',
    },

    {
        title: 'Mesto',
        description: 'Страница с карточками, с возможностью редактировать и удалять карточки, а также редактировать данные профиля пользователя через запросы на сервер.',
        image: mesto,
        githubLink: 'https://github.com/MaxTop60/mesto-project',
        websiteLink: 'https://maxtop60.github.io/mesto-project/',
    },

    {
        title: 'Russian Travel',
        description: 'Лендинг "Путешествие по России".',
        image: russian_travel,
        githubLink: 'https://github.com/MaxTop60/russian-travel',
        websiteLink: 'https://maxtop60.github.io/russian-travel/',
    }
];

let id = 1;
projectList.forEach(project => {
    project.id = id;
    id++;
})

export default projectList;
