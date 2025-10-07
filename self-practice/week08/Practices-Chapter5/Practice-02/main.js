const buttons = document.getElementsByTagName("button");
const buttonRed = document.querySelector("button[data-color='red']");
console.log(buttonRed);
buttonRed.addEventListener("click", () => {
  box.style.backgroundColor = "red";
  console.log(box.style.backgroundColor);
});
const buttonBlue = document.querySelector("button[data-color='blue']");
console.log(buttonBlue);
buttonBlue.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
  console.log(box.style.backgroundColor);
});
const buttonGreen = document.querySelector("button[data-color='green']");
console.log(buttonGreen);
buttonGreen.addEventListener("click", () => {
  box.style.backgroundColor = "green";
  console.log(box.style.backgroundColor);
});
