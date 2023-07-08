"use strict";
document.getElementById("enter").addEventListener("click",(e)=>{
  e.preventDefault();
  let a = 0 ,b = 1 ,c = 0;
  let rep = document.getElementById("ingreso").value;
  let esp = document.querySelector(".esp");
  esp.textContent="";
  for (let i = 0; i < rep; i++) {
    if(rep==i+1){
      esp.innerHTML+=a+".";
      break; 
    }
    esp.textContent+=a+", ";
    c=a+b;
    a=b;
    b=c;    
  }
})