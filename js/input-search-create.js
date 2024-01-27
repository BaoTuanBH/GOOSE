const createInput = document.querySelector(".create-input");
const searchInput = document.querySelector(".search-input");
const createButton = document.querySelector(".create-button");
const searchButton = document.querySelector(".search-button");
createButton.addEventListener("click", (e) => {
  createInput.style.display = "block";
  searchInput.style.display = "none";
});
searchButton.addEventListener("click", (e) => {
  createInput.style.display = "none";
  searchInput.style.display = "block";
});
