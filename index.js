
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const label = document.getElementById("mylabel");

let count = 0;

increase.onclick = function(){
  count++;
  label.textContent=count;
}

decrease.onclick = function(){

  if(count>0){
    count--;  
  label.textContent=count;
}
}

reset.onclick = function(){
  count=0;
  label.textContent=count;
}