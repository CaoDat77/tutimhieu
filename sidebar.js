function open() {
  document.querySelector(".molda").style.marginLeft = "0";
  document.querySelector("main").style.marginLeft = "250px";
}

function close() {
  document.querySelector(".molda").style.marginLeft = "-250px";
  document.querySelector("main").style.marginLeft = "0";
}

const openNav = document.querySelector("span");
openNav.addEventListener("click", open);

const closeNav = document.querySelector(".close");
closeNav.addEventListener("click", close);
