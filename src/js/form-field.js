export class FormField {
  constructor(labelText, inputType, inputId, inputName) {
    this.labelText = labelText;
    this.inputType = inputType;
    this.inputId = inputId;
    this.inputName = inputName;
  }

  render() {
    let formGroup = document.createElement("div");
    formGroup.classList.add("form-group");

    let label = document.createElement("label");
    label.textContent = this.labelText;
    label.setAttribute("for", this.inputId);

    let input = document.createElement("input");
    input.setAttribute("type", this.inputType);
    input.setAttribute("id", this.inputId);
    input.setAttribute("name", this.inputName);

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    return formGroup;
  }
}


