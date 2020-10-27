let showNav = false;

const navChangeHandler = () => {
  let ham = document.getElementsByClassName("mobile-navbar")[0];
  showNav = !showNav;
  showNav ? (ham.style.display = "contents") : (ham.style.display = "none");
};
