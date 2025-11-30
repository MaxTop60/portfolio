import pizzashop from "../img/projects/pizzashop.png";
import book_store from "../img/projects/book_store.png";
import mesto from "../img/projects/mesto.png";
import russian_travel from "../img/projects/russian_travel.png";
import blog_page from "../img/projects/blog_page.png";

export type TProject = {
  id: number;
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  websiteLink: string;
};

export const projectList: TProject[] = [
  {
    id: 5,
    title: "Blog Page",
    description:
      "Страница с возможностью менять ее стили через пользовательский интерфейс. Релизовано на React+TypeScript.",
    image: blog_page,
    githubLink: "https://github.com/MaxTop60/blog-page",
    websiteLink: "https://maxtop60.github.io/blog-page/",
  },
  {
    id: 2,
    title: "Book Store",
    description: "Интернет-магазин книг с использованием React JS.",
    image: book_store,
    githubLink: "https://github.com/MaxTop60/book_store",
    websiteLink: "https://maxtop60.github.io/book_store/",
  },
  {
    id: 1,
    title: "Pizzashop",
    description: "Лендинговая страница ресторана с использованием React JS.",
    image: pizzashop,
    githubLink: "https://github.com/MaxTop60/pizzashop",
    websiteLink: "https://maxtop60.github.io/pizzashop/",
  },

  {
    id: 3,
    title: "Mesto",
    description:
      "Страница с карточками, с возможностью редактировать и удалять карточки, а также редактировать данные профиля пользователя через запросы на сервер.",
    image: mesto,
    githubLink: "https://github.com/MaxTop60/mesto-project",
    websiteLink: "https://maxtop60.github.io/mesto-project/",
  },

  {
    id: 4,
    title: "Russian Travel",
    description: 'Лендинг "Путешествие по России".',
    image: russian_travel,
    githubLink: "https://github.com/MaxTop60/russian-travel",
    websiteLink: "https://maxtop60.github.io/russian-travel/",
  },
];
