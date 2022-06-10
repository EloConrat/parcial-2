let nombre = document.getElementById("nombre");
let email = document.getElementById("correo");
let espacios = false;
let cont = 0;

function comprobar() {
    let userName = nombre.value
    let userEmail = email.value

  while (!espacios && cont < userName.length) {
    if (userName.charAt(cont) == " ") espacios = true;
    cont++;
  }
  if (espacios) {
    alert("El campo no puede contener espacios en blanco");
    return false;
  } 

  if (!userEmail.includes('@')) {
    alert("El formato de email es invalido");
    return false;
  }
}


