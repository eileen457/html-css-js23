const input=document.getElementById("text-input");
const btn=document.getElementById("check-btn");
const rta=document.getElementById("result");

btn.addEventListener("click",()=>{
  if(input.value === ""){
  alert("Please input a value");
  return;
  }

  const original=input.value;
  let limpio = original.toLowerCase().replace(/[^a-z0-9]/g, ""); //Busca todo lo que NO sea una letra ni un número, y bórralo    g busca en todo el texto
  let palin = limpio.split('').reverse().join('');

   if(limpio===palin){
      rta.textContent=`${original} is a palindrome.`;
   }else{
    rta.textContent=`${original} is not a palindrome.`;
   }

});
