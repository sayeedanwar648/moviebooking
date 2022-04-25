// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let mov=document.getElementById("movie")
let arr=JSON.parse(localStorage.getItem("movies"))||[]
arr.forEach(function(el){
    let p=document.createElement("p")
        p.innerText=el.Title;
        let img=document.createElement("img");
        img.src=el.Poster
        // let btn=document.createElement("button")
        // btn.innerText="Book now"
        mov.append(img,p)
        

})