let registros = [];
let correos = ["juan@gmail.com", "carlos2@gmail.com"]
let contraseñas = ["SecurePassword123", "SecurePassword123"]

// Función 1
function login() {

  var email = document.getElementById("form-login").elements[0].value;
  var password = document.getElementById("form-login").elements[1].value;
  var captcha = document.getElementById("form-login").elements[2].value;
    console.log("Prueba", correos.includes(email), contraseñas.includes(password), validarCAPTCHA(captcha));
  if (
    correos.includes(email) &&
    contraseñas.includes(password) &&
    validarCAPTCHA(captcha)
  ) {
    //alert("Sesión Iniciada");
    return true;
  } else {
    //alert("Correo, constraseña o captcha invalido")
    return false;
  }
  
}

// Función 2
function agregarRegistro() {
  function Usuario(username, correo, contrasena) {
    this.username = username;
    this.correo = correo;
    this.contrasena = contrasena;
  }
  var usernameForm = document.getElementById("username").value;
  var correoForm = document.getElementById("correo").value;
  var contrasenaForm = document.getElementById("contrasena").value;
  
  let nuevoUsuario = new Usuario(usernameForm, correoForm, contrasenaForm);
  registros.push(nuevoUsuario);
  
}

// Función 3
function validarCAPTCHA(valor) {
  var nosimbol = valor.replace(/[!|$&+,:;=?[\]@#|{}'<>.^*()%!\-\/_]/g, "");
  var lower = nosimbol.toLowerCase();
  return lower === "budapest" ? true: false
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;
