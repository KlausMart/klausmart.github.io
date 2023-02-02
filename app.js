function crearCV(a,b,c,d,e) {
  return a+b+c+d+e
}

const fechaNacimiento=document.getElementById("fechaNacimiento")
const edad=document.getElementById("contenedor-edad")

const calcularEdad=(fechaNacimiento)=>{
  const fechaActual= new Date();
  const añoActual=parseInt(fechaActual.getFullYear());
  const mesActual=parseInt(fechaActual.getMonth())+1;
  const diaActual=parseInt(fechaActual.getDate());

  const añoNacimiento=parseInt(String(fechaNacimiento).substring(0,4))
  const mesNacimiento=parseInt(String(fechaNacimiento).substring(5,7))
  const diaNacimiento=parseInt(String(fechaNacimiento).substring(8,10))

  let edad=añoActual - añoNacimiento;
  if(mesActual<mesNacimiento){
    edad--;
  } else if(mesActual===mesNacimiento){
    if(diaActual<diaNacimiento){
      edad--;
    }
  }
  return edad
}

window.addEventListener(`click`, function() {

  fechaNacimiento.addEventListener(`change`, function() {
    if(this.value){
      edad.innerText=calcularEdad(this.value)
    }
    
  })
})

document.getElementById(`crear-cv`).addEventListener(`click`, function () {
  let nombre = document.getElementById(`nombre`).value;
  console.log ("El nombre es: "+nombre)
  let telefono = document.getElementById(`telefono`).value;
  console.log ("El teléfono es: "+telefono)
  let email = document.getElementById(`email`).value;
  console.log ("El Email es: "+email)
  let direccion = document.getElementById(`direccion`).value;
  console.log ("La dirección es: "+direccion)
  let fecha = document.getElementById(`fechaNacimiento`).value;
  console.log ("La fecha de nacimiento es: "+fecha)
  let datos = crearCV("Nombre: "+nombre, ", ", "Teléfono: "+telefono, ", ", "Email: "+email, ", "
  , "Direción: "+direccion, ", ", "Fecha de Naciemitno: "+fecha);
  console.log ("Los datos de la persona son: "+datos)

  document.getElementById(`contenedor-nombre`).innerHTML = nombre
  document.getElementById(`contenedor-telefono`).innerHTML = telefono
  document.getElementById(`contenedor-email`).innerHTML = email
  document.getElementById(`contenedor-direccion`).innerHTML = nombre
  document.getElementById(`contenedor-edad`).innerHTML = calcularEdad(this.value)
  
});