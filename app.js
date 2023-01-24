function crearCV(a,b,c,d,e) {
  return a+b+c+d+e
}

function getEdad(dateString) {
  let hoy = new Date()
  let fechaNacimiento = new Date(dateString)
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--
  }
  return edad
}

document.getElementById(`crear-cv`).addEventListener(`click`, function () {
  let nombre = document.getElementById(`nombre`).value;
  console.log ("El nombre es: "+nombre)
  let telefono = document.getElementById(`telefono`).value;
  console.log ("El teléfono es: "+telefono)
  let email = document.getElementById(`email`).value;
  console.log ("El Email es: "+email)
  let direccion = document.getElementById(`direccion`).value;
  console.log ("La dirección es: "+direccion)
  let fecha = document.getElementById(`fecha`).value;
  console.log ("La fecha de nacimiento es: "+fecha)
  let datos = crearCV("Nombre: "+nombre, ", ", "Teléfono: "+telefono, ", ", "Email: "+email, ", "
  , "Direción: "+direccion, ", ", "Fecha de Naciemitno: "+fecha);
  console.log ("Los datos de la persona son: "+datos)

  document.getElementById(`contenedor-nombre`).innerHTML = nombre
  document.getElementById(`contenedor-telefono`).innerHTML = telefono
  document.getElementById(`contenedor-email`).innerHTML = email
  document.getElementById(`contenedor-direccion`).innerHTML = nombre
  document.getElementById(`contenedor-edad`).innerHTML = getEdad()
  
});