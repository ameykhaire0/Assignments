"use strict";

const allowdrop = (ev) => {
  console.log("Drag allowed...");
  ev.preventDefault();
};

const drag = (ev) => {
  console.log("Started dragging...");
  ev.dataTransfer.setData("myData", ev.target.id);
};

const drop = (ev) => {
  console.log("Item dropped......");
  ev.preventDefault();
  let data = ev.dataTransfer.getData("myData");
  ev.target.appendChild(document.getElementById(data));
};
