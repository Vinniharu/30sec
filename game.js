const playerName = document.getElementById("pName");
const playerScore = document.getElementById("score");
const timeCount = document.getElementById("count");
const startTime = document.getElementById("start");
const stopTime = document.getElementById("stop");
const details = document.getElementById("info");
const submit = document.getElementById("submit");
const eName = document.getElementById("eName");
const pause = document.getElementById("pause");
const play = document.getElementById("play");
const countDown = document.getElementById("countDown");
const cover = document.getElementById("cover");
const about = document.getElementById("about");
const countDownStart = document.getElementById("countDownStart");
const border = document.getElementById("border");
const mainDisplay = document.getElementById("mainDisplay");
const options = document.getElementById("options");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
let count = 30;
let counter;
let returner;
let returnGame = 3;

//submit button
submit.addEventListener("click", (e) =>{
   e.preventDefault();
   if(eName.value == ""){
      alert("Enter a name")
   } else{
      playerName.innerHTML = `${eName.value}`;
      details.classList.add("animate");
      setTimeout(() => {
         details.className = "animate";
      }, 2000)
      startTime.style.display = "inline";

      setTimeout(() => {
         details.style.display = "none";
         cover.style.height = "100vh";
         about.className = "animateStart";
      }, 500);
      document.getElementById("playerAbt").innerHTML = eName.value;
   }
});

//Starts the game
startTime.addEventListener("click", () => {
   startTime.style.display = "none";
   counter = setInterval(timer, 1000);
   stopTime.style.display = "inline";
   about.className = "animate";
   border.className = "animateStart";
   border.style.display = "block";
   setTimeout(() => {
      cover.style.height = "0";
   }, 500);
   setTimeout(colors, 500);
});

//pauses the game 
stopTime.addEventListener("click", ()=>{
   clearInterval(counter);
   pause.style.height = "100vh";
   play.style.display = "block";
   countDown.style.display = "none";
   border.style.display = "none";
});

//to return to the game
play.addEventListener("click", () => {
   play.style.display = "none";
   returner = setInterval(() => {
      countDown.style.display = "block";
      countDown.innerHTML = `The game will start in <br> ${returnGame}`;
      returnGame--;
   }, 1000);
   setTimeout(() => {
      pause.style.height = "0";
      counter = setInterval(timer, 1000);
      clearInterval(returner);
      returnGame = 3;
      border.style.display = "block";
   }, 4000);
});

//the function for the timer counting
function timer(){
   if(count !== 0){
      count--;
   }
   if(count == 0){
      border.className = "animate";
      setTimeout(() => {
         border.style.display = "none";
      },500);
      ending();
   }
   let min = Math.floor((count % 3600) / 60);
   let sec = Math.floor(count % 60);
   if(min < 10){
      min = "0" + min;
   }
   if(sec < 10){
      sec = "0" + sec;
   }
   timeCount.innerHTML = `${min}:${sec}`;
}

// main game javascript
let optHolder;
let colorRandom;
let scoreboard = 0;
let colorHolder = [];

function swtichUp(){
   for(let i = 0; i < 10; i++){
      colorHolder[i] = Math.floor(Math.random() * 1000);
   }
}

swtichUp();
function colors(){
   optHolder = Math.floor(Math.random() * 10);
   colorRandom = colorHolder[optHolder];
   mainDisplay.style.backgroundColor = `#${colorRandom}`;
   if(optHolder < 4){
      opt1.style.backgroundColor = `#${colorRandom}`;
      opt2.style.backgroundColor = `#${Math.floor(Math.random() * 1000)}`;
      opt3.style.backgroundColor = `#${Math.floor(Math.random() * 1000)}`;
   } else if(optHolder > 3 && optHolder < 7){
      opt1.style.backgroundColor = `#${Math.floor(Math.random() * 1000)}`;
      opt2.style.backgroundColor = `#${colorRandom}`;
      opt3.style.backgroundColor = `#${Math.floor(Math.random() * 1000)}`;
   } else if(optHolder > 6){
      opt1.style.backgroundColor = `#${Math.floor(Math.random() * 1000)}`;
      opt2.style.backgroundColor = `#${Math.floor(Math.random() * 1000)}`;
      opt3.style.backgroundColor = `#${colorRandom}`;
   }
   console.log(optHolder);
}

opt1.addEventListener("click", () => {
   let holder = event.target.style.backgroundColor;
   if(holder == mainDisplay.style.backgroundColor){
      scoreboard = scoreboard + 10;
      playerScore.innerHTML = scoreboard;
   }
   colors();
});
opt2.addEventListener("click", () => {
   let holder = event.target.style.backgroundColor;
   if(holder == mainDisplay.style.backgroundColor){
      scoreboard = scoreboard + 10;
      playerScore.innerHTML = scoreboard;
   }
   colors();
});
opt3.addEventListener("click", () => {
   let holder = event.target.style.backgroundColor;
   if(holder == mainDisplay.style.backgroundColor){
      scoreboard = scoreboard + 10;
      playerScore.innerHTML = scoreboard;
   }
   colors();
});

const endName = document.getElementById("scoreName");
const scored = document.getElementById("scored");
let ended = document.getElementById("endGame");
const rants = document.getElementById("rants");
let endCounter;
let endCount = 0;


function ending(){
   ended.style.display = "block";
   ended.className = "animateStart";
   setTimeout(() => {
      rants.style.display = "none";
      endName.innerHTML = eName.value;
      scored.innerHTML = `>>  ${scoreboard}  <<`;
   }, 8000)
}
