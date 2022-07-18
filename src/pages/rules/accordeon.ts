const arrForCheckState: number[] = [];
const arrow = document.getElementsByClassName("arrow");
function accordeon(): void {
  for (let i = 0; i < arrow.length; i += 1) {
    arrow[i].addEventListener("click", () => {
      if (arrForCheckState.length === 0) {
        (<HTMLElement>(
          document.getElementsByClassName("setting")[i]
        )).style.height = "200px";
        (<HTMLElement>arrow[i]).style.transform = "rotateX(180deg)";
        (<HTMLElement>(
          document.getElementsByClassName("form-for-btn ")[i]
        )).style.visibility = "visible";
        arrow[i].classList.add("check");
        arrForCheckState.push(1);
      } else {
        (<HTMLElement>(
          document.getElementsByClassName("setting")[i]
        )).style.height = "82px";
        (<HTMLElement>arrow[i]).style.transform = "rotateX(0deg)";
        (<HTMLElement>(
          document.getElementsByClassName("form-for-btn ")[i]
        )).style.visibility = "hidden";
        arrow[i].classList.remove("check");
        arrForCheckState.splice(0);
      }
    });
  }
}
export default accordeon;
