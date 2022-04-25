// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let div=document.getElementById("movies")
let id;
// let res= await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`)
async function findmovies(){

    try{
        const search=document.getElementById("search").value
        let res=await fetch(`https://www.omdbapi.com/?apikey=a0885521&s=${search}`)
        let data =await res.json();
        // console.log("data:",data)
        const movies=data.Search;
        return movies
        console.log(movies)
    }catch(err){
        console.log("err:",err)
    }


}
function appendmovies(data){
    data.forEach(function(el){
        let p=document.createElement("p")
        p.innerText=el.Title;
        let img=document.createElement("img");
        img.src=el.Poster
        let btn=document.createElement("button")
        btn.innerText="Book now"
        btn.addEventListener("click",function(){
            bookfn(el)

        });
        div.append(img,p,btn)
    })
}
async function main(){
    let data=await findmovies();
    appendmovies(data)
}
let arr=JSON.parse(localStorage.getItem("movies"))||[]
function bookfn(el){
arr.push(el)
// console.log(arr)
localStorage.setItem("movies",JSON.stringify(arr))
window.location="checkout.html"
}
function debouncing(fun,delay){
    if(id){
        clearTimeout(id)
    }
 id=setTimeout(function (){
    fun()
},delay)
}