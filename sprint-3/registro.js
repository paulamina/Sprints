let registros = [];

function obtenerUsername(arreglo){
  let filtroUserName = arreglo.filter((usuario)=>{
      if (/\d/.test(usuario.username)){
        return usuario;
      }
    });
      console.log(filtroUserName);
      return filtroUserName;
}

function filtrarCorreo(arreglo){
  var correosFiltrados = registros.filter(function(x) {
      return x.correo.includes("hotmail.com")
  });
  console.log(correosFiltrados);
  return correosFiltrados;
}

function agregarRegistro(){
  function Usuario(username,correo,contrasena){
  this.username=username;
  this.correo=correo;
  this.contrasena=contrasena;
  }
  var usernameForm = document.getElementById("username").value;
  var correoForm = document.getElementById("correo").value;
  var contrasenaForm = document.getElementById("contrasena").value;
  let nuevoUsuario = new Usuario(usernameForm,correoForm,contrasenaForm);
  registros.push(nuevoUsuario);
  
}

module.exports.registros=registros;
module.exports.filtrarCorreo=filtrarCorreo;
module.exports.obtenerUsername=obtenerUsername;
module.exports.agregarRegistro=agregarRegistro;
