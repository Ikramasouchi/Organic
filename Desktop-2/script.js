let updateValue = document.querySelector (".value")

let plusValue = document.querySelector (".plus")

let minusValue = document.querySelector (".minus")

let count = 1;

plusValue.addEventListener("click",()=>{
   count++
   updateValue.innerHTML = count + "kg";
   document.querySelector (".minus").style.color="black"


})

minusValue.addEventListener("click",()=>{
   if(count > 1){
     count--
     updateValue.innerHTML = count + "kg";
    
   }else{
    document.querySelector (".minus").style.color="red"

   }
})