import '../sass/main.scss';

// import refs from "./refs";
// const { menuEl } = refs;

const menuEl = document.querySelector(".js-menu");
console.log(menuEl);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

import menu from "../menu.json";
console.log(menu);

import markup from "../templates/markup.hbs";
console.log(markup);

const menuMarkup = markup(menu);
console.log(menuMarkup);

menuEl.insertAdjacentHTML("afterbegin", menuMarkup)



