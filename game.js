window.onload=function()
{
//userInfo
let userInfo=document.querySelector("#user_info");
let user=document.querySelector("#user");
let username=localStorage.getItem("username");
if (username) {
  userInfo.style.display= "block";
  user.innerHTML=localStorage.getItem("username")
}
//timer
var timerVariable = setInterval(countUpTimer, 1000);
var totalSeconds = 0;
function countUpTimer() {
  ++totalSeconds;
  var hour = Math.floor(totalSeconds / 3600);
  var minute = Math.floor((totalSeconds - hour * 3600) / 60);
  var seconds = totalSeconds - (hour * 3600 + minute * 60);
  document.getElementById("countup").innerHTML = hour + ":" + minute + ":" + seconds;
}
//bomb
let killed =0;
let count=0;
let score=document.getElementById("score");
let kill=document.getElementById("kill");
let small=document.querySelector(".small");
let meduim=document.querySelector(".medium");
let big =document.querySelector(".big");
let bomb=document.getElementById("bomb");
pos_small=small.getBoundingClientRect();
pos_med=meduim.getBoundingClientRect();
pos_big=big.getBoundingClientRect();
pos_bomb=bomb.getBoundingClientRect();
//move bomb
    setInterval(()=>{

   let bompArray=[];
   bomb.style.width="150px";
   window_Width = window.innerWidth;
   bomb.style.left=0.75*Math.floor(Math.random()*(window_Width-100))+"px";
   bomb.style.top="0px";
   document.querySelector("body").append(bomb);
   bompArray.push(bomb);
moveDown(bomb);
     },500 )
  
function moveDown(bomb)
{
  window_Height = window.innerHeight;
  bomb_Height = parseInt(bomb.style.height);
  bomb_Top=parseInt(bomb.style.top);
  totalhigh = window_Height - bomb_Height;
  let bombtop=parseInt(bomb.style.top);
  if (totalhigh) {
    bomb.style.top=bombtop+3+"px"
  }
  else{
    bomb.remove();
  }
}
setInterval(moveDown,50)

bomb.onclick=function()
{
 
if (pos_small==pos_bomb) 
{
 kill.innerHTML="Bird Killed:"+killed++ ;
score.innerHTML="Score:"+count+5;  
small.style.display="none";
}
else if(pos_med==pos_bomb)
{
  kill.innerHTML="Bird Killed:"+killed++ 
  score.innerHTML="Score:"+count+10;
  meduim.style.display="none";

}
else
{
  if(pos_big=pos_bomb)
  {
  kill.innerHTML="Bird Killed:"+killed++  ;
  score.innerHTML="Score:"+count-10;
  big.style.display="none";
  }
  else
  {
    score.innerHTML="Score:"+count-10;
  }
}
if (score>50)
 {
  
  var modal = document.getElementById("myModal");
  let modall=document.getElementById("modal-content");
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }  
 }
  
}
}

}