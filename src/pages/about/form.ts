import validation from "./validator";
import "./about.css";

const inputField = document.querySelectorAll(".modal-sub");
function form(): void {
  const modWrap: HTMLElement = document.querySelector(".modal-wrap");
  const btnReg: HTMLElement = document.querySelector(".reg-btn");
  const btnCancel: HTMLElement = document.querySelector(".btn-cancel");

  btnReg.addEventListener("click", () => {
    modWrap.style.setProperty(`--visibl`, `visible`);
  });

  modWrap.addEventListener("click", (f) => {
    if (f.target === modWrap) {
      modWrap.style.setProperty(`--visibl`, `hidden`);
      for (let i = 0; i < inputField.length; i += 1)
        (<HTMLInputElement>inputField[i]).value = "";
    }
  });

  btnCancel.addEventListener("click", () => {
    modWrap.style.setProperty(`--visibl`, `hidden`);
    for (let i = 0; i < inputField.length; i += 1)
      (<HTMLInputElement>inputField[i]).value = "";
  });

  setInterval(validation, 1);
}
export { inputField, form };
