const form = document.querySelector('form');
const p = form.querySelector('p');
 
function showError(msg) {
  p.textContent = msg;
  p.style.color = "red";
}
 
function showSuccess(msg) {
  p.textContent = msg;
  p.style.color = "green";
}
 
const createAccountb = document.querySelector('button')
createAccountb.addEventListener('click', (e) => {
    e.preventDefault()
    const username = form.elements["username"].value.trim();
    const email = form.elements["email"].value.trim();
    const password = form.elements["password"].value.trim();
    const confirmPassword = form.elements["confirm-password"].value.trim();
    if(password !== confirmPassword) {
        showError("password and confirm do not match check again");
        return;
    }
    if(!username || !email || !password || !confirmPassword) {
        showError("missing some values, please try again!");
        return;
    }
    showSuccess("your data complete")
});
