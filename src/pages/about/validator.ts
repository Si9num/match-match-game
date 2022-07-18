import "./about.css";
import { add, read } from "../db";
import addDb from "./addDb";

const inputField = document.querySelectorAll(".modal-sub");
const btn = <HTMLElement>document.getElementsByClassName("fedb-modal")[0];

const regExpForLength = /^[\w\W\s]{0,30}$/;
const regExpForNum =
  /(?=.*\D)(?=.*\S)|[_-~!@#$%*()_—+=|\-:;"'`<>,.?\\\\^]|^[^0-9](?=.*\S)$/;
const regExpForSymb = /^[^~!@#$%*()_—+=|:;"'`<>,.?\\/\\^]{0,10000}$/;
const regExpForEmail = /\S+@\S+\.\S+/;

export default function validation(): void {
  for (let i = 0; i < 2; i += 1) {
    if (!(<HTMLInputElement>inputField[i]).value.match(regExpForLength)) {
      (<HTMLInputElement>(
        document.querySelectorAll(".formTxt")[i]
      )).style.setProperty(`--visibl1`, `visible`);
      (<HTMLInputElement>inputField[i]).style.borderColor = "red";
    } else {
      (<HTMLInputElement>(
        document.querySelectorAll(".formTxt")[i]
      )).style.setProperty("--visibl1", `hidden`);
      (<HTMLInputElement>inputField[i]).style.borderColor = "green";
    }
    if (
      !(<HTMLInputElement>inputField[i]).value.match(regExpForNum) &&
      (<HTMLInputElement>inputField[i]).value !== ""
    ) {
      (<HTMLInputElement>(
        document.querySelectorAll(".formTxt2")[i]
      )).style.setProperty(`--visibl1`, `visible`);
      (<HTMLInputElement>inputField[i]).style.borderColor = "red";
    } else {
      (<HTMLInputElement>(
        document.querySelectorAll(".formTxt2")[i]
      )).style.setProperty("--visibl1", `hidden`);
      (<HTMLInputElement>inputField[i]).style.borderColor = "green";
    }
    if (
      !(<HTMLInputElement>inputField[i]).value.match(regExpForSymb) &&
      (<HTMLInputElement>inputField[i]).value !== ""
    ) {
      (<HTMLInputElement>(
        document.querySelectorAll(".formTxt3")[i]
      )).style.setProperty(`--visibl1`, `visible`);
      (<HTMLInputElement>inputField[i]).style.borderColor = "red";
    } else {
      (<HTMLInputElement>(
        document.querySelectorAll(".formTxt3")[i]
      )).style.setProperty("--visibl1", `hidden`);
      (<HTMLInputElement>inputField[i]).style.borderColor = "green";
    }
  }
  if (
    !(<HTMLInputElement>inputField[2]).value.match(regExpForEmail) &&
    (<HTMLInputElement>inputField[2]).value !== ""
  ) {
    (<HTMLInputElement>document.querySelector(".form_email")).style.setProperty(
      `--visibl1`,
      `visible`
    );
    (<HTMLInputElement>inputField[2]).style.borderColor = "red";
  } else {
    (<HTMLInputElement>document.querySelector(".form_email")).style.setProperty(
      "--visibl1",
      `hidden`
    );
    (<HTMLInputElement>inputField[2]).style.borderColor = "green";
  }
  if (
    !(<HTMLInputElement>inputField[0]).value.match(regExpForSymb) ||
    !(<HTMLInputElement>inputField[0]).value.match(regExpForNum) ||
    !(<HTMLInputElement>inputField[0]).value.match(regExpForLength) ||
    !(<HTMLInputElement>inputField[1]).value.match(regExpForSymb) ||
    !(<HTMLInputElement>inputField[1]).value.match(regExpForNum) ||
    !(<HTMLInputElement>inputField[1]).value.match(regExpForLength) ||
    !(<HTMLInputElement>inputField[2]).value.match(regExpForEmail)
  ) {
    btn.setAttribute("disabled", "true");
  } else {
    btn.removeAttribute("disabled");
  }
}
const arrForData: string[] = [];
window.onload = () => addDb;

export { arrForData };
