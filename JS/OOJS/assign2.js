let display = document.getElementById("display");

let open = false;

const onClick = (e) => {
  display.value += e.target.textContent;
};

const openScientificCal = () => {
  open = !open;
  document
    .getElementsByName("sci")
    .forEach((ele) => (ele.style.display = open ? "contents" : "none"));
};

const cube = () => {
  display.value = Math.pow(eval(display.value), 2);
};

const sqrt = () => {
  display.value = Math.sqrt(eval(display.value));
};

const square = () => {
  display.value = Math.pow(eval(display.value), 2);
};
