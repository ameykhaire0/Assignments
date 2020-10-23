let dob = document.getElementById("dob");

const onLoad = () => {
  let welcome = document.getElementById("welcome");
  let totalSeconds = 0;
  dob.addEventListener("keydown", validateDate);
  setInterval(() => {
    ++totalSeconds;
    let sec = padZero(totalSeconds % 60);
    let min = padZero(Math.floor(totalSeconds / 60));
    welcome.innerText = `Welcome! You are on this page since ${min}:${sec} min`;
  }, 1000);
};

const padZero = (val) => {
  let strVal = val + "";
  if (strVal.length < 2) {
    return "0" + strVal;
  }
  return strVal;
};

const validateDate = (ele) => {
  let dateRegex = "(([1-2][0-9])|([1-9])|(3[0-1]))-((1[0-2])|([1-9]))-[0-9]{4}";

  if (ele.key.match("[^0-9-]") !== null) {
    dob.setAttribute("class", "error");
  } else {
    console.log(ele);
    dob.removeAttribute("class");
  }
  // console.log(ele.key.match("^[0-9-]"));
  ele.max = new Date().toISOString().split("T")[0];
  dob.setAttribute("class", "error");
};

const validateForm = (e) => {
  e.preventDefault();
  let hobbies = document.getElementsByName("hobby");
  let flag = false;
  hobbies.forEach((ele) => {
    if (ele.checked === true) {
      flag = true;
      if (ele.name === "reading" && ele.checked) {
      }
      if (flag === true) {
        if (hobbies.check) return true;
      }
      return false;
    }
  });
};

const show = (ele) => {
  if (ele.checked) {
    document.getElementById("writer").style.display = "contents";
  } else {
    document.getElementById("writer").style.display = "none";
  }
};

let emailRegex = "^[a-zA-Z0-9]+@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$";
