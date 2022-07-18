import "./game.css";
import { timer, clearTimer } from "./timer";
import { game } from "./gameBack";
import { imgArr, gameBoardArr } from "../rules/settings";

const rout = document.querySelector(".play-btn");

const cards = document.getElementsByClassName("card");
const cardsGreen = document.getElementsByClassName("card-success");
const cardsRed = document.getElementsByClassName("card-fail");
const row = document.getElementsByClassName("row");
const btnOk = document.getElementsByClassName("btn-ok")[0];
const gameStart = (<HTMLElement>rout).addEventListener("click", () => {
  if (imgArr.length < 18) {
    document.querySelector(".addit-gb").innerHTML = `${gameBoardArr[0]}`;
  } else {
    document.querySelector("#card-container").innerHTML = ``;
    document.querySelector("#card-container").innerHTML = `${gameBoardArr[0]}`;
  }

  imgArr.sort(() => Math.random() - 0.5);
  for (let i = 0; i < imgArr.length; i += 1) {
    (<HTMLElement>(
      document.querySelector(`.card-front${i + 1}`)
    )).style.setProperty(`--img${i + 1}`, imgArr[i]);
  }
  if (imgArr.length === 16) {
    for (let i = 0; i < cards.length; i += 1) {
      (<HTMLElement>cards[i]).style.height = "130px";
      (<HTMLElement>cards[i]).style.width = "130px";
      (<HTMLElement>cardsGreen[i]).style.height = "130px";
      (<HTMLElement>cardsGreen[i]).style.width = "130px";
      (<HTMLElement>cardsRed[i]).style.height = "130px";
      (<HTMLElement>cardsRed[i]).style.width = "130px";
    }
    for (let i = 0; i < row.length; i += 1) {
      (<HTMLElement>row[i]).style.height = "130px";
      (<HTMLElement>row[i]).style.justifyContent = "space-evenly";
    }
  }
  if (imgArr.length === 36) {
    for (let i = 0; i < cards.length; i += 1) {
      (<HTMLElement>cards[i]).style.height = "70px";
      (<HTMLElement>cards[i]).style.width = "70px";
      (<HTMLElement>cardsGreen[i]).style.height = "70px";
      (<HTMLElement>cardsGreen[i]).style.width = "70px";
      (<HTMLElement>cardsRed[i]).style.height = "70px";
      (<HTMLElement>cardsRed[i]).style.width = "70px";
    }
    for (let i = 0; i < row.length; i += 1) {
      (<HTMLElement>row[i]).style.height = "70px";
      (<HTMLElement>row[i]).style.justifyContent = "space-evenly";
    }
  }
});
(<HTMLElement>document.querySelector(".play-btn")).onclick =
  function newTimer(): void {
    clearTimer(0);
    const flag: number[] = [1];
    for (let i = 0; i < cards.length; i += 1) {
      document
        .getElementsByClassName("card")
        [i].addEventListener("click", function startTimer() {
          if (flag[0] === 1) {
            timer();
            flag.splice(0, flag.length);
            flag.push(0);
          }
          if (flag[0] === 0) {
            document
              .getElementsByClassName("card")
              [i].removeEventListener("click", startTimer);
          }
        });
    }

    game();
  };
export  {btnOk,gameStart};
