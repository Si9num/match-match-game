import "./index.css";
import router from "./rout";
import { form } from "./about/form";
import { gameStart } from "./gameBoard/gameProcess";

window.onload = () => gameStart;
window.onload = () => router;
form();
