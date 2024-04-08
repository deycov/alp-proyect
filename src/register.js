const registerButton = document.querySelector("#register-btn");

const isUserExist = (email, usersList) => {
  return usersList.find(user => user.email == email);
}

const validateInfo = (name, last, email, pass) => {
  const error = document.getElementById("error-message");
  const usersList = getLocalStorageInfo();

  if(!name || !last || !email || !pass){
    error.innerText = "Favor de llenarlo completamente";
    return false;

  }else if(pass.length < 8){
    error.innerText = "La contraseña debe ser mayor a 8 caracteres";
    return false;

  }else if(!email.includes("@") || !email.includes(".com")){
    error.innerText = "El formato de correo debe ser el indicado, por favor modificar";
    return false;
  }else if(isUserExist(email, usersList)){
    error.innerText = "Esta cuenta ya existe";
    return false;
  }

  return true;
}

registerButton.addEventListener("click",(event)=>{
  event.preventDefault();
  const name = document.getElementById("name");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const isValidate = validateInfo(name.value, last.value, email.value, pass.value);

  if (isValidate){
    const userDate = {
      name: name.value,
      lastName: last.value,
      email: email.value,
      password: pass.value,
    };

    setLocalStorageInfo(userDate);
  }
})

