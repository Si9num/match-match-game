import gameBoardEasy from "../gameBoard/gameMarkup(3x4)";
import gameBoardMedium from "../gameBoard/gameMarkup(4x4)";
import gameBoardHard from "../gameBoard/gameMarkup(6x6)";
import { clearTimer } from "../gameBoard/timer";
import accordeon from "./accordeon";

const gameBoardArr: string[] = [""];
const imgArr: string[] = [
  `url(assets/card/front/1.jpg)`,
  `url(assets/card/front/2.jpg)`,
  `url(assets/card/front/3.jpg)`,
  `url(assets/card/front/4.jpg)`,
  `url(assets/card/front/5.jpg)`,
  `url(assets/card/front/6.png)`,
  `url(assets/card/front/1.jpg)`,
  `url(assets/card/front/2.jpg)`,
  `url(assets/card/front/3.jpg)`,
  `url(assets/card/front/4.jpg)`,
  `url(assets/card/front/5.jpg)`,
  `url(assets/card/front/6.png)`,
];

const radios = document.getElementsByName("rad");
(<HTMLElement>document.querySelector(".setting-img")).onclick =
  function settings(): void {
    accordeon();
    clearTimer(0);
    document.querySelector(".btn-apply").addEventListener("click", () => {
      if ((<HTMLInputElement>radios[0]).checked) {
        imgArr.splice(0, imgArr.length);
        for (let i = 1; i < 7; i += 1) {
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
        }
      }
      if ((<HTMLInputElement>radios[1]).checked) {
        imgArr.splice(0, imgArr.length);
        for (let i = 19; i < 25; i += 1) {
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
        }
      }
      if ((<HTMLInputElement>radios[2]).checked) {
        gameBoardArr.splice(0, gameBoardArr.length);
        gameBoardArr.push(gameBoardEasy);
      }
      if (
        (<HTMLInputElement>radios[3]).checked &&
        (<HTMLInputElement>radios[0]).checked
      ) {
        gameBoardArr.splice(0, gameBoardArr.length);
        gameBoardArr.push(gameBoardMedium);

        imgArr.splice(0, imgArr.length);
        for (let i = 1; i < 8; i += 1) {
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
        }
      }
      if (
        (<HTMLInputElement>radios[3]).checked &&
        (<HTMLInputElement>radios[1]).checked
      ) {
        gameBoardArr.splice(0, gameBoardArr.length);
        gameBoardArr.push(gameBoardMedium);

        imgArr.splice(0, imgArr.length);
        for (let i = 19; i < 27; i += 1) {
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
        }
      }
      if (
        (<HTMLInputElement>radios[4]).checked &&
        (<HTMLInputElement>radios[1]).checked
      ) {
        gameBoardArr.splice(0, gameBoardArr.length);
        gameBoardArr.push(gameBoardHard);
        imgArr.splice(0, imgArr.length);
        for (let i = 19; i < 37; i += 1) {
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
        }
      }
      if (
        (<HTMLInputElement>radios[4]).checked &&
        (<HTMLInputElement>radios[0]).checked
      ) {
        gameBoardArr.splice(0, gameBoardArr.length);
        gameBoardArr.push(gameBoardHard);
        imgArr.splice(0, imgArr.length);
        for (let i = 1; i < 19; i += 1) {
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
          imgArr.push(`url(assets/card/front/${i}.jpg)`);
        }
      }
    });
  };
export { imgArr, gameBoardArr };
