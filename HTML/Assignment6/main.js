"use strict";

const rainbowColors = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee",
];

const onLoad = () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  drawRainbow(ctx);

  drawPhotos(ctx);

  drawLogo(ctx);
};

const drawLogo = (ctx) => {
  ctx.beginPath();
  ctx.shadowColor = "#c7c7c7";
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 10;
  let gradient = ctx.createLinearGradient(5, 400, 240, 440);
  gradient.addColorStop(0, rainbowColors[0]);
  gradient.addColorStop(0.1, rainbowColors[1]);
  gradient.addColorStop(0.2, rainbowColors[2]);
  gradient.addColorStop(0.4, rainbowColors[3]);
  gradient.addColorStop(0.6, rainbowColors[4]);
  gradient.addColorStop(0.8, rainbowColors[5]);
  gradient.addColorStop(1, rainbowColors[6]);
  ctx.fillStyle = gradient;
  ctx.font = "28px monospace";
  ctx.fillText("OXEM", 35, 400);
  ctx.font = "20px monospace";
  ctx.fillText("Technologies", 5, 420);
  ctx.closePath();
};

const drawRainbow = (ctx) => {
  const rainbowCenter = [240, 380];
  const rainbowRadius = 170;
  ctx.lineWidth = 10;

  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.strokeStyle = rainbowColors[i];
    ctx.arc(
      rainbowCenter[0] - i * 5,
      rainbowCenter[1],
      rainbowRadius - i * 5,
      0,
      Math.PI,
      true
    );
    ctx.stroke();
    ctx.closePath();
  }
};

const drawPhotos = (ctx) => {
  const imgLocation = [
    "./images/laptop.png",
    "./images/phone.jpg",
    "./images/tablet.png",
  ];

  for (let i = 0; i < 3; i++) {
    let img = new Image();

    img.onload = () => {
      ctx.drawImage(img, 250 + i * 50, 200 + i * 60, 50, 50);
    };

    img.src = imgLocation[i];
  }
};
