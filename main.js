let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();


  function validateForm() {
    // obtener los valores de los campos
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
  
    // validar que los campos no estén vacíos
    if (email == "" || name == "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }
  
    // validar que el campo de correo electrónico tenga un formato válido
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      return false;
    }
  
    // si los campos son válidos, permitir enviar el formulario
    return true;
  }



