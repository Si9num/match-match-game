import { add } from "../db";

const inputField = document.querySelectorAll(".modal-sub");
const btn = <HTMLElement>document.getElementsByClassName("fedb-modal")[0];
const arrForData: string[] = [];
function addDb() {
  let db: IDBDatabase;
  const dbReg = indexedDB.open("Si9num", 1);
  dbReg.onerror = (error) => {};
  dbReg.onsuccess = (event) => {
    db = (<IDBOpenDBRequest>event.target).result;
  };
  dbReg.onupgradeneeded = (e) => {
    (<IDBOpenDBRequest>e.target).result.createObjectStore("Players", {
      autoIncrement: true,
    });
  };
  btn.addEventListener("click", () => {
    (<HTMLElement>document.querySelector(".reg-btn")).style.setProperty(
      "--visibl-regBtn",
      "hidden"
    );
    (<HTMLElement>document.querySelector(".play-btn")).style.setProperty(
      "--visibl-playBtn",
      "visible"
    );
    (<HTMLElement>document.querySelector(".modal-wrap")).style.setProperty(
      `--visibl`,
      `hidden`
    );

    arrForData.push(
      (<HTMLInputElement>inputField[0]).value,
      (<HTMLInputElement>inputField[1]).value,
      (<HTMLInputElement>inputField[2]).value
    );
    add(db, `${arrForData[0]}`, `${arrForData[1]}`, `${arrForData[2]}`);
  });
}
export default addDb();
