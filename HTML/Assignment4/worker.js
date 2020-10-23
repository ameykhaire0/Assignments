onmessage = (e) => {
  console.log("In WORKER, message recieved");
  console.log(e);
  postMessage(`Welcome to Cybage, ${e.data}`);
  console.log("In WORKER, message sent back to main.js");
};
