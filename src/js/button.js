export class MyButton {
    
  static counter = 0;

  constructor(text, type, style = `${text}Btn`) {
    MyButton.counter += 1;
    this.id = MyButton.counter;
    this.text = text;
    this.type = type;
    this.style = style;
  };

  render() {
    let boxBtn = document.createElement("div");

    boxBtn.classList.add("class", "myBtn");
    boxBtn.classList.add("class", `myBtn-${this.id}`);

    let btn = document.createElement("button");

    btn.setAttribute("type", this.type);
    btn.classList.add("class", `btn-${this.id}`);
    btn.textContent = this.text;

    boxBtn.appendChild(btn);

    return boxBtn;
  }
};

let submitBtn = new MyButton("Submit", "submit");


export { submitBtn };