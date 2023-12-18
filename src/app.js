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

let leftButton = document.querySelector(".leftFlagButton");
let rightButton = document.querySelector(".rightFlagButton");

let slider_img = document.querySelector(".slider-img");
let images = [
  "flag-1.jpg",
  "flag-2.jpg",
  "flag-3.jpg",
  "flag-4.jpg",
  "flag-5.jpg",
  "flag-6.jpg",
  "flag-7.jpg",
  "flag-8.jpg",
];
let i = 0;

function prev() {

  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

leftButton.addEventListener('click', () => {
  prev();
});

rightButton.addEventListener('click', () => {
  next()
});

function setImg() {
  return slider_img.setAttribute("src", "./images/" + images[i]);
}





