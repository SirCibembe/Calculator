// import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier
let monBlocButt = document.getElementsByClassName("numpad digit")
let monInput = document.getElementById("input")               
monInput.setAttribute("readonly",true)

for (let i = 0; i < monBlocButt.length; i++) {
  monBlocButt[i].addEventListener("click", function() {
    monInput.value += monBlocButt[i].innerHTML;
  });
}

let monPlus = document.getElementById("plus");
let monP = document.getElementById("calcul");
monPlus.setAttribute("type", "button");
monPlus.addEventListener("click", function () {
  monP.textContent += monInput.value + " " + monPlus.innerHTML + " ";
  monInput.value = "";
})
let monSub  = document.getElementById("minus")

monSub.setAttribute("type","button")
monSub.addEventListener("click",function(){
  monP.textContent += monInput.value + " " + monSub.innerHTML + " ";
  monInput.value = "";
})
let monMult = document.getElementById("times")
monMult.setAttribute("type","button")
monMult.addEventListener("click",function(){
  monP.textContent += monInput.value + " " + monMult.innerHTML+ " ";
  monInput.value = "";
})
let monDiv = document.getElementById("divideby")
monDiv.setAttribute("type","button")
monDiv.addEventListener("click",function(){
  monP.textContent += monInput.value + " " + monDiv.innerHTML + " ";
  monInput.value = "";
})

let monClearP = document.getElementById("clear");
monClearP.addEventListener("click", function(){
     monInput.value = " ";
  })
let monClearAll = document.getElementById("reset");
  monClearAll.addEventListener("click", function(){
       monInput.value = " ";
       monP.textContent= " ";
    })
let monEgal = document.getElementById("equals");
monEgal.addEventListener("click", function(){
  monEgal.setAttribute("type","button")
  monP.textContent += monInput.value 
  monInput.value = calculate(monP.textContent);
  
})
let monDot = document.querySelector(".numpad dot")
monDot.addEventListener("click", function(){
  monInput.value += ".";

})

function calculate(expression) {
  return eval(expression);
  
}


