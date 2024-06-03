const correo = document.querySelector("#correo")
const password = document.querySelector("#password")
const button1 = document.querySelector("#button1")

button1.addEventListener("click", function (event) {
  event.preventDefault()
  if (correo.value == "") {
    correo.classList.add("errorField")
  }
  if (password.value == "") {
    password.classList.add("errorField")
  }
})

correo.addEventListener("keyup", function () {
  correo.classList.remove("errorField")
})
password.addEventListener("keyup", function () {
  password.classList.remove("errorField")
})

