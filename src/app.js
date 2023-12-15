import * as FormField from "./js/form-field.js";
import * as MyButton from './js/button.js';



  let form = document.getElementById("myForm");

  form.appendChild(FormField.nameField.render());
  form.appendChild(FormField.surnameField.render());
  form.appendChild(FormField.emailField.render());
  form.appendChild(MyButton.submitBtn.render());

