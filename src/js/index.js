import '../sass/main.scss';
import menu from "../menu.json";
console.log(menu);
import markup from "../templates/markup.hbs";
import { saveToLocalStorage, getFromLocalStorage } from "./helpers.js";

import { refs } from "../js/refs.js";
const { menuEl, inputEl, body } = refs;
console.log(menuEl);
console.log(inputEl);
console.log(body);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const {LIGHT, DARK} = Theme

  const menuMarkup = markup(menu);
  console.log(menuMarkup);
  menuEl.insertAdjacentHTML("afterbegin", menuMarkup)
inputEl.addEventListener("change", changeTheme);

if (!localStorage.getItem("class")) {
  body.classList.add(LIGHT);
  saveToLocalStorage("class", LIGHT);
}

function changeTheme() {
  if (inputEl.checked) {
    body.classList.add(DARK)
    body.classList.remove(LIGHT);
    saveToLocalStorage("class", DARK);

  } else {
     body.classList.add(LIGHT)
    body.classList.remove(DARK);
     saveToLocalStorage("class", LIGHT);
  }
}

  const  currentTheme = getFromLocalStorage("class")
  console.log(currentTheme);
  if (currentTheme === DARK) {
    body.classList.add(DARK)
    body.classList.remove(LIGHT)
    inputEl.checked = true;
  }







