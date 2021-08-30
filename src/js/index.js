import '../sass/main.scss';

import { refs } from "../js/refs.js";
// const { menuEl } = refs;

const menuEl = document.querySelector(".js-menu");
const inputEl = document.querySelector("#theme-switch-toggle");
const body = document.querySelector("body")

// console.log(refs.menuEl);
// console.log(refs.inputEl);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const {LIGHT, DARK} = Theme

import menu from "../menu.json";
console.log(menu);

import markup from "../templates/markup.hbs";

  const menuMarkup = markup(menu);
  console.log(menuMarkup);
  menuEl.insertAdjacentHTML("afterbegin", menuMarkup)


inputEl.addEventListener("change", changeTheme);
// inputEl.addEventListener("change", setToLS);

function changeTheme() {
  if (inputEl.checked) {
    body.classList.add(DARK)
    body.classList.remove(LIGHT);
    localStorage.setItem("class", DARK);
  } else {
     body.classList.add(LIGHT)
    body.classList.remove(DARK);
     localStorage.setItem("class", LIGHT);
  }
}

// function setToLS(theme, dark) {
//   if (inputEl.checked) {
//     console.log(inputEl.checked);
//     localStorage.setItem("class", "dark");
//   } else {
//     localStorage.setItem("class", "light");
//   }
// }

  const currentTheme = localStorage.getItem("class");
  console.log(currentTheme);
  if (currentTheme === DARK) {
    body.classList.add(DARK)
    body.classList.remove(LIGHT)
    inputEl.checked = true;
  }







