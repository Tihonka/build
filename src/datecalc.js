import { formatError } from "./common.js";
import { diffDate, diffToHtml } from "./diff.js";

const formEl = document.getElementById('dateCalc-form');
const resultEl = document.getElementById('dateCalc-result');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    resultEl.innerHTML='';

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if (firstDate && secondDate){

     const result = diffToHtml(diffDate(firstDate, secondDate));
     resultEl.innerHTML = result;
    } 
    else resultEl.innerHTML=formatError('Для расчета введите обе даты');

   }