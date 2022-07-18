import { arrForSeconds, arrForMinutes } from "./timer";
import { imgArr } from "../rules/settings";

const arrForComparingURl: string[] = [];
const arrForCardRevers: Element[] = [];
const arrForGreenCover: Element[] = [];
const arrForRedCover: Element[] = [];
const arrForCountingCardPairs: Element[] = [];

const cards = document.getElementsByClassName("card");
const game = function game(): void {
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].addEventListener("click", () => {
      (<HTMLElement>cards[i]).style.transform = "rotateY(180deg)";

      const style = getComputedStyle(
        document.querySelector(`.card-front${i + 1}`)
      );

      const greenCol = document.getElementsByClassName(`card-success`);
      const redCol = document.getElementsByClassName(`card-fail`);

      arrForComparingURl.push(style.backgroundImage);
      arrForCardRevers.push(cards[i]);
      arrForGreenCover.push(greenCol[i]);
      arrForRedCover.push(redCol[i]);

      if (arrForComparingURl[0]) {
        (<HTMLElement>arrForCardRevers[0]).style.pointerEvents = "none";
        setTimeout(() => {
          (<HTMLElement>arrForCardRevers[0]).style.pointerEvents = "auto";
        }, 1000);
      }
      if (arrForComparingURl[0] && arrForComparingURl[1]) {
        (<HTMLElement>(
          document.getElementsByClassName("plug")[0]
        )).style.visibility = "visible";
        setTimeout(() => {
          (<HTMLElement>(
            document.getElementsByClassName("plug")[0]
          )).style.visibility = "hidden";
        }, 1000);
      }

      if (arrForComparingURl[0] === arrForComparingURl[1]) {
        (<HTMLElement>arrForGreenCover[0]).style.visibility = "visible";
        (<HTMLElement>arrForGreenCover[1]).style.visibility = "visible";
        (<HTMLElement>arrForCardRevers[0]).style.pointerEvents = "none";
        (<HTMLElement>arrForCardRevers[1]).style.pointerEvents = "none";
        arrForComparingURl.splice(0, arrForComparingURl.length);
        arrForCardRevers.splice(0, arrForCardRevers.length);
        arrForGreenCover.splice(0, arrForGreenCover.length);
        arrForRedCover.splice(0, arrForRedCover.length);
        arrForCountingCardPairs.push(arrForCardRevers[0], arrForCardRevers[1]);

        if (arrForCountingCardPairs.length === imgArr.length) {
          (<HTMLElement>(
            document.getElementsByClassName("congrats")[0]
          )).style.visibility = "visible";
          document.querySelector(
            ".congr-text"
          ).innerHTML = `Congratulations! You successfully found all matches on ${
            arrForMinutes[arrForMinutes.length - 1]
          }.${arrForSeconds[arrForSeconds.length - 1]} minutes.`;
          arrForCountingCardPairs.splice(0, arrForCountingCardPairs.length);
        }
      } else if (
        arrForComparingURl[0] !== arrForComparingURl[1] &&
        arrForComparingURl.length > 1
      ) {
        (<HTMLElement>arrForRedCover[0]).style.visibility = "visible";
        (<HTMLElement>arrForRedCover[1]).style.visibility = "visible";

        setTimeout(() => {
          (<HTMLElement>arrForCardRevers[0]).style.transform = "rotateY(0deg)";
          (<HTMLElement>arrForCardRevers[1]).style.transform = "rotateY(0deg)";
          (<HTMLElement>arrForRedCover[0]).style.visibility = "hidden";
          (<HTMLElement>arrForRedCover[1]).style.visibility = "hidden";
          arrForComparingURl.splice(0, arrForComparingURl.length);
          arrForCardRevers.splice(0, arrForCardRevers.length);
          arrForGreenCover.splice(0, arrForGreenCover.length);
          arrForRedCover.splice(0, arrForRedCover.length);
        }, 1000);
      }
    });
  }
};
export { cards, game };
