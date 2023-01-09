const checkbox = document.querySelector(".checkbox");
const links = document.querySelector(".links");

checkbox.addEventListener("click", () => {
  links.classList.toggle("active");
});
