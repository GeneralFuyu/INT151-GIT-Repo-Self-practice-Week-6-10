const buttons = document.getElementsByTagName("button");
const buttonAddBorder = document.querySelector("button[id='add']");
console.log(buttonAddBorder);
buttonAddBorder.addEventListener("click", () => {
  box.classList.add("bordered");
  console.log(box.style.backgroundColor);
});
const buttonRemoveBorder = document.querySelector("button[id='remove']");
console.log(buttonRemoveBorder);
buttonRemoveBorder.addEventListener("click", () => {
  box.classList.remove("bordered");
  console.log(box.style.backgroundColor);
});
const buttonToggleBorder = document.querySelector("button[id='toggle']");
console.log(buttonToggleBorder);
buttonToggleBorder.addEventListener("click", () => {
  box.classList.toggle("bordered");
  console.log(box.style.backgroundColor);
});
