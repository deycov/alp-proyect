const loginButtom = document.querySelector("#login-btn");

const validateLogin = (email, pass, usersList) => {
  const error = document.getElementById("error-message");

  if(email.includes('@') && email.includes('.com')){
    return usersList.find((user) => (user.email == email && user.password == pass)) || false;
  } else{
    error.innerText = "Debe ingresar su correo electronico";
    return false
  }
}

loginButtom.addEventListener("click", (event)=>{
  event.preventDefault();
  const error = document.getElementById("error-message");
  error.innerText = "";
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const usersList = getLocalStorageInfo();
  let validate = validateLogin(email.value, pass.value, usersList);
  if (validate) {
    const info = document.getElementById("info-message");
    info.innerText = "Login realizado con exito, Bienvenido de nuevo";
    // Redirigir al usuario a la página principal
    window.location.href = "/src/view/layout.html";
 } else {
    // Mostrar mensaje de error si la validación falla
    const error = document.getElementById("error-message");
    error.innerText = "Correo electrónico o contraseña incorrectos";
 }
})