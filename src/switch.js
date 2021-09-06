const dateCalcBtn = document.querySelector('.dateCalc-btn');
const timerBtn = document.querySelector('.timer-btn');
const dateCalcForm = document.getElementById('dateCalc-form');
const timerForm = document.getElementById('timer');


dateCalcBtn.onclick = function(){
    if(dateCalcForm.classList.contains('invisible')){
        dateCalcForm.classList.toggle('invisible');
        timerForm.classList.toggle('invisible');
    }
}

timerBtn.onclick = function(){
    if(timerForm.classList.contains('invisible')){
        dateCalcForm.classList.toggle('invisible');
        timerForm.classList.toggle('invisible');
    }
}
