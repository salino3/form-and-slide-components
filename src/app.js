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



function openModal(item) {
  const modal = document.getElementById(item);
  modal.style.display = "block";
}

function closeModal(item) {
  const modal = document.getElementById(item);
  modal.style.display = "none";
}

submitValue.addEventListener("click", function () {
  let objForm = {
    name: nameValue.value,
    surname: surnameValue.value,
    email: emailValue.value,
  };

  if (!objForm.name || !objForm.surname || !objForm.email) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "Please refill all inputs..";
    errorMessage.style.color = "red";

    openModal("myModal");

    const btnModal = document.getElementById("close");

    btnModal.addEventListener("click", () => {
      closeModal("myModal");
    });
  } else {
    const dialog = document.getElementById("messageData");

    dialog.innerHTML = `
    <span><span>Name:</span> ${objForm.name}</span> <br/>
    <span><span>Surname:</span> ${objForm.surname}</span> <br/>
    <span><span>Email:</span> ${objForm.email}</span>
  `;

    openModal("modalData");

    const btnModal = document.getElementById("closeData");

    btnModal.addEventListener("click", () => {
      closeModal("modalData");
    });

    // type HTMLCollection or type NodeList
    const formGroups = document.getElementsByClassName("form-group");

    const formGroupsArray = Array.from(formGroups);

    formGroupsArray.forEach((formGroup) => {
      const input = formGroup.querySelector("input");

      input.value = "";
    });
  }


});




//

const leftFlagButton = document.querySelector(".left-flag-button");
const rightFlagButton = document.querySelector(".right-flag-button");
const leftFlagSVG = document.querySelector(".svgLeftFlagHorizontal");
const rightFlagSVG = document.querySelector(".svgRightFlagHorizontal");

leftFlagButton.addEventListener("click", () => {
  leftFlagSVG.classList.add("active");
  rightFlagSVG.classList.remove("active");
});

rightFlagButton.addEventListener("click", () => {
  rightFlagSVG.classList.add("active");
  leftFlagSVG.classList.remove("active");
});









