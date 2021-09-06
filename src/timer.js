import { startTimer, stopHandler } from "./timerCalc.js";

const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');

startEl.addEventListener('click', startTimer);

stopEl.addEventListener('click', stopHandler);

