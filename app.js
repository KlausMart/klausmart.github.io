function entrevista() {
    let text;
    let contacto = prompt("Dejanos tu número de teléfono o email", "Escribí aquí");
    switch(contacto) {
      default:
        text = "Excelente! En la brevedad me pondré en contacto contigo";
    }
    document.getElementById("demo").innerHTML = text;
  }