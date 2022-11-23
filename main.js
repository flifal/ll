let menu = document.getElementById("menu");
let closes = document.getElementById("close");
let navMenu = document.getElementById("nav");

menu.onclick = function () {
  menu.style.display = "none";
  closes.style.display = "block";
  navMenu.classList.add("active");
};
closes.onclick = function () {
  menu.style.display = "block";
  closes.style.display = "none";
  navMenu.classList.remove("active");
};
