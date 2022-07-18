import about from "./about/about";
import gameBoard from "./gameBoard/gameMarkupMain";
import rules from "./rules/rules";
import header from "./header";
import score from "./score/score";
import creater from "./creatHeader";

const createElem: HTMLElement = document.getElementById("app");
createElem.appendChild(creater(header));
function router() {
  interface Iroutes {
    [index: string]: string;
  }
  const routes: Iroutes = {
    "/about": about,
    "/game": gameBoard,
    "/rules": rules,
    "/score": score,
  };
  const rootDiv = document.querySelector(".main");
  rootDiv.innerHTML = routes["/about"];

  function onNavigate(pathname: string) {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname];
  }
  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
  };
  document.querySelector(".about-img").addEventListener("click", () => {
    onNavigate("/about");
    (<HTMLElement>document.querySelector(".about-img")).style.setProperty(
      "--aboutImg",
      "url(assets/active.png)"
    );
    (<HTMLElement>document.querySelector(".best-img")).style.setProperty(
      "--bestImg",
      "url(assets/inactive2.png)"
    );
    (<HTMLElement>document.querySelector(".setting-img")).style.setProperty(
      "--setImg",
      "url(assets/inactive.png)"
    );
  });
  document.querySelector(".play-btn").addEventListener("click", () => {
    onNavigate("/game");
    (<HTMLElement>document.querySelector(".stop-btn")).style.visibility =
      "visible";
    (<HTMLElement>document.querySelector(".play-btn")).style.visibility =
      "hidden";
  });
  document.querySelector(".setting-img").addEventListener("click", () => {
    onNavigate("/rules");
    (<HTMLElement>document.querySelector(".about-img")).style.setProperty(
      "--aboutImg",
      "url(assets/unactive_about.png)"
    );
    (<HTMLElement>document.querySelector(".best-img")).style.setProperty(
      "--bestImg",
      "url(assets/inactive2.png)"
    );
    (<HTMLElement>document.querySelector(".setting-img")).style.setProperty(
      "--setImg",
      "url(assets/act.png)"
    );
  });
  document.querySelector(".best-img").addEventListener("click", () => {
    onNavigate("/score");
    (<HTMLElement>document.querySelector(".about-img")).style.setProperty(
      "--aboutImg",
      "url(assets/unactive_about.png)"
    );
    (<HTMLElement>document.querySelector(".best-img")).style.setProperty(
      "--bestImg",
      "url(assets/active_score.png)"
    );
    (<HTMLElement>document.querySelector(".setting-img")).style.setProperty(
      "--setImg",
      "url(assets/inactive.png)"
    );
  });
  document.querySelector(".btn-ok").addEventListener("click", () => {
    onNavigate("/score");
    (<HTMLElement>document.querySelector(".congrats")).style.visibility =
      "hidden";
    (<HTMLElement>document.querySelector(".play-btn")).style.visibility =
      "visible";
    (<HTMLElement>document.querySelector(".stop-btn")).style.visibility =
      "hidden";
  });
  document.querySelector(".stop-btn").addEventListener("click", () => {
    onNavigate("/about");
    (<HTMLElement>document.querySelector(".play-btn")).style.visibility =
      "visible";
    (<HTMLElement>document.querySelector(".stop-btn")).style.visibility =
      "hidden";
  });
}
export default router();
