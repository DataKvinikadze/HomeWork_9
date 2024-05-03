let button = document.querySelector(".hidden");
let pop_up = document.querySelector(".pop_up");
let header = document.querySelector("#heading");

button.addEventListener("click", function (event) {
  pop_up.style.display = "flex";
  header.style.display = "none";
});
