import * as formField from "./js/form-field.js";




  let form = document.getElementById("myForm");

  form.appendChild(formField.nameField.render());
  form.appendChild(formField.surnameField.render());
  form.appendChild(formField.emailField.render());

