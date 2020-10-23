"use strict";

const name = document.querySelector("input");
const msg = document.querySelector("#message");

if (window.Worker) {
  const worker = new Worker("worker.js");

  name.onchange = () => {
    worker.postMessage(name.value);
    console.log("Name sent to WORKER.!");
  };

  worker.onmessage = (e) => {
    console.log(e);
    msg.innerHTML = e.data;
    console.log("Message recieved from the worker");
  };
} else {
  msg.innerHTML = "Your browser doesn't support web workers";
}
