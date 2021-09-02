import {formatError} from "./common.js";

const music = new Audio("./media/music.mp3");
let hoursEl = document.getElementById('hour');
let minEl = document.getElementById('min');
let secEl = document.getElementById('sec');
const errTimer = document.querySelector('.errorTimer');

let timeoutId = null;

export function startTimer(e){
    e.preventDefault();
    errTimer.innerHTML = '';
   
    if (timeoutId) {
        return;
      }
    
    timeoutId = setInterval(function(){
        if (hoursEl.value < 0 || minEl.value < 0 || secEl.value < 0){
               errTimer.innerHTML = formatError('Выберите положительное число!');
            }
      else if (secEl.value > 0){
        secEl.value--
         } else if (minEl.value > 0){
             minEl.value--;
             secEl.value = 59
         } else if (hoursEl.value > 0){
             hoursEl.value--;
            minEl.value = 59
        } else {
             clearInterval(timeoutId);
             music.play();
        }

    },1000)
}

export function stopHandler(e){
    e.preventDefault();
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
        music.pause();
    }
}