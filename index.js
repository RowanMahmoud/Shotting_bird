console.log(localStorage.setItem("name","Rowan"));

let username=document.querySelector("#username");
let go=document.querySelector("#go");
go.addEventListener("click",function(e)
{
e.preventDefault()
if (username.value==="") 
{
    alert("please fill data");
}
else
{
localStorage.setItem("username",username.value);
  setTimeout(()=>{
  window.location="game.html";
  

},1500)  

}
})