export class FormField {

  static counter = 0;

  constructor(labelText, inputType, inputId, inputName, pl, style = `${inputName}Box`) {
    
    FormField.counter += 1;
    this.id = FormField.counter;
    this.labelText = labelText;
    this.inputType = inputType;
    this.inputId = inputId;
    this.inputName = inputName;
    this.pl = pl;
    this.style = style;
  };

  render() {
    let formGroup = document.createElement("div");
    formGroup.classList.add('form-group');

    formGroup.classList.add(`form-group-${this.id}`);


    let label = document.createElement("label");
    label.textContent = this.labelText;
    label.setAttribute("for", this.inputId);

    let input = document.createElement("input");
    input.setAttribute("type", this.inputType);
    input.setAttribute("id", this.inputId);
    input.setAttribute("name", this.inputName);
    input.setAttribute("class", this.style);
    input.setAttribute('placeholder', this.pl);

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    return formGroup;
  }
};

  let nameField = new FormField("Name", "text", "name", "name", "Text your name..");
  let surnameField = new FormField("Surname", "text", "surname", "surname", "Text your surname..");
  let emailField = new FormField("Email", "email", "email", "email", "Text your email..");


  export {nameField, surnameField, emailField};