const btn = document.querySelectorAll("button");
const inputElement = document.getElementById("result");
for(let i=0; i<btn.length; i++){
  btn[i].addEventListener("click",()=>{
    const btnValue = btn[i].textContent;
    if(btnValue==="C"){
      clearResult();
    } else if(btnValue==="="){
      calculateResult();
    }else{
      appandValue(btnValue);
    }
  })
}
function clearResult(){
  inputElement.value= "";
}
function calculateResult(){
 inputElement.value = eval(inputElement.value)
}
function appandValue(btnValue){
  inputElement.value += btnValue;
}