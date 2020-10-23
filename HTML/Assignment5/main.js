let canvas = document.querySelector("canvas");
let pen = canvas.getContext("2d");

let faceGrad = pen.createRadialGradient(110, 90, 20, 100, 100, 50);
faceGrad.addColorStop(1, "#fdfd00");
faceGrad.addColorStop(0, "#f3eccd");

let leftEyeGrad = pen.createRadialGradient(82, 82, 4, 82, 82, 7);
leftEyeGrad.addColorStop(0, "black");
leftEyeGrad.addColorStop(0.5, "white");
leftEyeGrad.addColorStop(1, "white");

let rigthEyeGrad = pen.createRadialGradient(120, 82, 4, 120, 82, 7);
rigthEyeGrad.addColorStop(0, "black");
rigthEyeGrad.addColorStop(0.5, "white");
rigthEyeGrad.addColorStop(1, "white");

// Face
pen.beginPath();
pen.fillStyle = faceGrad;
pen.arc(100, 100, 50, 0, 2 * Math.PI);
pen.fill();
pen.stroke();
pen.closePath();

// Left Eye
pen.beginPath();
pen.fillStyle = leftEyeGrad;
pen.arc(82, 82, 10, 0, 2 * Math.PI);
pen.fill();
pen.closePath();

// Right Eye
pen.beginPath();
pen.fillStyle = rigthEyeGrad;
pen.arc(122, 82, 10, 0, 2 * Math.PI);
pen.fill();
pen.closePath();

// Smile
pen.strokeStyle = "black";
pen.lineWidth = 5;
pen.beginPath();
pen.moveTo(75, 117);
pen.arcTo(95, 145, 125, 117, 28);
pen.lineTo(125, 117);
pen.stroke();
pen.closePath();
