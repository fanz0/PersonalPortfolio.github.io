const iconLight = document.getElementById("light-mode");
const iconDark = document.getElementById("dark-mode");
const page = document.querySelector("html");
const githubLogo = document.querySelectorAll(".github-logo");
const websiteLogo = document.querySelectorAll(".website-logo");

iconLight.addEventListener("click", () => {
  iconDark.classList.remove("hidden");
  iconLight.classList.add("hidden");
  page.classList.remove("dark");
  githubLogo.forEach((img) => {
    img.src = "./assets/logos/github-logo-black.png";
  });
  websiteLogo.forEach((img) => {
    img.src = "./assets/logos/website-logo-black.png";
  });
});

iconDark.addEventListener("click", () => {
  iconDark.classList.add("hidden");
  iconLight.classList.remove("hidden");
  page.classList.add("dark");
  githubLogo.forEach((img) => {
    img.src = "./assets/images/github-logo.png";
  });
  websiteLogo.forEach((img) => {
    img.src = "./assets/images/github-logo.png";
  });
});
