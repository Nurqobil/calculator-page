"use strict";


const incBtn = document.querySelector(".increment");
const decBtn = document.querySelector(".decerement");


const display = document.querySelector(".value");

incBtn.addEventListener("click",(e) => {
    display.textContent = +display.textContent + 1;
});

decBtn.addEventListener("click",(e) => {
  display.textContent = +display.textContent - 1;
});