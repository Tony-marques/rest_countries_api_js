
const darkMode = document.querySelector(".theme-container");
const theme = document.querySelector(".theme-container .theme");
const i = document.querySelector(".theme-container i");

darkMode.addEventListener("click", setTheme);

function setTheme() {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    i.classList.remove("fa-regular");
    i.classList.add("fa-solid");
    localStorage.removeItem("darkmode");
    localStorage.setItem("darkmode", "light");
  } else {
    i.classList.remove("fa-solid");
    i.classList.add("fa-regular");
    localStorage.removeItem("darkmode");
    localStorage.setItem("darkmode", "dark");
  }
}

function defaultTheme() {
  let themeLS = localStorage.getItem("darkmode");

  if (themeLS === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
}

defaultTheme();

