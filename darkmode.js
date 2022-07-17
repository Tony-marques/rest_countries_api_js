const darkMode = document.querySelector(".theme-container");
const theme = document.querySelector(".theme-container .theme");
const i = document.querySelector(".theme-container i");

console.log(theme);

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    i.classList.remove("fa-solid");
    i.classList.add("fa-regular");
    theme.innerHTML = "Light Mode";
  } else {
    i.classList.remove("fa-regular");
    i.classList.add("fa-solid");
    theme.innerHTML = "Dark Mode";
  }
});
