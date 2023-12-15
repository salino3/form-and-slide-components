import { FormField } from "./js/form-field.js";


  // Uso de la clase para crear instancias y agregar campos al formulario
  let nameField = new FormField("Name", "text", "name", "name");
  let surnameField = new FormField("Surname", "surname", "surname", "surname");
  let emailField = new FormField("Email", "email", "email", "email");

  // Supongamos que tienes un formulario con el id "myForm" en tu HTML
  let form = document.getElementById("myForm");
  // Agrega los campos al formulario
  form.appendChild(nameField.render());
  form.appendChild(surnameField.render());
  form.appendChild(emailField.render());

