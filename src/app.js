import * as FormField from "./js/form-field.js";
import * as MyButton from './js/button.js';



  let form = document.getElementById("myForm");

  form.addEventListener('click', function(event) {
    event.preventDefault();
  });
  
  
  form.appendChild(FormField.nameField.render());
  form.appendChild(FormField.surnameField.render());
  form.appendChild(FormField.emailField.render());
  form.appendChild(MyButton.submitBtn.render());
  

 let nameValue = document.getElementById("name"); 
 let surnameValue = document.getElementById("surname"); 
 let emailValue = document.getElementById("email"); 
let submitValue = document.querySelector(".btn-1");

//  nameValue.addEventListener('input', function () {
//   console.log(nameValue.value);
//  });



submitValue.addEventListener("click", function () {
  let objForm = {
    name: nameValue.value,
    surname: surnameValue.value,
    email: emailValue.value,
  };

//  if (!objForm.name || !objForm.surname || !objForm.email) {

//    const errorMessage = document.getElementById("error-message");

//    const dialogAlert = document.createElement("span");

//    dialogAlert.innerHTML = "Please refill all inputs..";
//    dialogAlert.setAttribute("class", "msgAlert");
//    dialogAlert.style.color = "red";

//    errorMessage.appendChild(dialogAlert)

//    return errorMessage.outerHTML;
//  }

function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

if (!objForm.name || !objForm.surname || !objForm.email) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.innerHTML = "Please refill all inputs..";
  errorMessage.style.color = "red";

  openModal();

  const btnModal = document.getElementById("close");

  btnModal.addEventListener("click", () => {
    closeModal();
  });
}else{

  const dialog = document.createElement("div");
  dialog.innerHTML = `
    <span>Name: ${objForm.name}</span>
    <span>Surname: ${objForm.surname}</span>
    <span>Email: ${objForm.email}</span>
  `;
  
  alert(dialog.textContent);
}


});










