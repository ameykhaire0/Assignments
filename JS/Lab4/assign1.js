"use strict";

let name = document.querySelector("input");
let div = document.querySelector("div");

const list = [];

const addPersonToList = () => {
  if (!name.value) return alert("Enter some value");
  if (list.length >= 4) return alert("Max size reached. Please press display");
  list.push(name.value);
  name.value = "";
};
const displayList = () => {
  list.forEach((ele) => {
    div.innerText += `${ele}\n`;
  });
};
