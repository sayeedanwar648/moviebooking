
// Store the wallet amount to your local storage with key "amount"

let nav=document.getElementById("navbar")
let amountArr=JSON.parse(localStorage.getItem("amount"))||[]
 function addtowallet(){
     event.preventDefault()
     let amount=document.getElementById("amount").value;

     let obj={
         amount1:Number(amount)
     }
     
     
     amountArr.push(obj)
     console.log(amountArr)
     localStorage.setItem("amount",JSON.stringify(amountArr))
    
     


     

 }
 amountArr.forEach(function(el){
     let h=document.createElement("h1");
     h.innerText=el.amount1
     nav.append(h)
 })
