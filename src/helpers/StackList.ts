import html from "../img/icons/html.svg";
import css from "../img/icons/css.svg";
import js from "../img/icons/js.svg";
import react from "../img/icons/react.svg";
import git from "../img/icons/git.svg";
import react_router from "../img/icons/react_router.svg";
import ts from "../img/icons/typescript.svg";
import redux from "../img/icons/redux.png";
import vite from "../img/icons/vite.png";

export type TStack = {
  title: string;
  img: string;
};

export const StackList = [
  {
    title: "HTML 5",
    img: html,
  },
  {
    title: "CSS 3",
    img: css,
  },
  {
    title: "JavaScript",
    img: js,
  },
  {
    title: "TypeScript",
    img: ts,
  },
  {
    title: "React",
    img: react,
  },
  {
    title: "React Router",
    img: react_router,
  },
  {
    title: "Redux",
    img: redux,
  },
  {
    title: "Vite",
    img: vite,
  },
  {
    title: "Git",
    img: git,
  },
];
