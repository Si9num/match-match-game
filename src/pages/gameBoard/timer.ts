const arrForSeconds: number[] = [];
const arrForMinutes: number[] = [0];
let sec = 0;
let min = 0;
function clearTimer(value: number): void {
  sec = value;
  min = value;
}

const timer = function timer(): void {
  setInterval(() => {
    sec += 1;
    arrForSeconds.push(sec);
    if (sec === 60) {
      sec = 0;
      min += 1;
      arrForMinutes.push(min);
    }
    if (sec < 10) {
      document.querySelector("#time").innerHTML = `0${min}:0${sec}`;
    } else {
      document.querySelector("#time").innerHTML = `0${min}:${sec}`;
    }
  }, 1000);
};
export { arrForSeconds, arrForMinutes, timer, clearTimer };
