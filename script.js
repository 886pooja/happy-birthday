// ==============================
// HAPPY BIRTHDAY RAJ ❤️
// JAVASCRIPT STEP 1
// ==============================

// Get all pages
const pages = document.querySelectorAll(".page");

// Current page
let currentPage = 0;

// Progress Bar
const progress = document.querySelector(".progress");

// ------------------------------
// Show Page
// ------------------------------

function showPage(index){

pages.forEach((page)=>{

page.classList.remove("active");

});

pages[index].classList.add("active");

// Progress Bar

let percent=((index+1)/pages.length)*100;

progress.style.width=percent+"%";

}

// ------------------------------
// Next Page
// ------------------------------

function nextPage(){

if(currentPage<pages.length-1){

currentPage++;

showPage(currentPage);

}

}

// ------------------------------
// Previous Page
// ------------------------------

function previousPage(){

if(currentPage>0){

currentPage--;

showPage(currentPage);

}

}

// ------------------------------
// Start Journey
// ------------------------------

function startJourney(){

playMusic();

nextPage();

}

// ------------------------------
// Auto Slideshow
// ------------------------------

setInterval(()=>{

if(currentPage<pages.length-1){

currentPage++;

showPage(currentPage);

}

},15000);

// ------------------------------
// Show First Page
// ------------------------------

showPage(currentPage);
// ==========================================
// LOVE LETTER
// ==========================================

function openLetter(){

const letter=document.getElementById("letter");

letter.classList.toggle("show");

}


// ==========================================
// BIRTHDAY CAKE
// ==========================================

function blowCandles(){

const cake=document.querySelector(".cake");

cake.innerHTML="🎂✨";

document.getElementById("cakeMessage").innerHTML=

"🎉 Happy Birthday Raj!<br>May all your dreams come true ❤️";

createConfetti();

createFireworks();

}


// ==========================================
// GIFT BOX
// ==========================================

function openGift(){

const gift=document.querySelector(".gift");

gift.innerHTML="💝";

document.getElementById("giftMessage").innerHTML=

"❤️ Surprise! ❤️<br><br>I may not always find the perfect words, but I hope you always feel how deeply you are loved.<br><br>Happy Birthday Raj 🤎";

createConfetti();

}


// ==========================================
// PLAY MUSIC
// ==========================================

function playMusic(){

const music=document.getElementById("music");

music.play().catch(()=>{

console.log("Music will start after user interaction.");

});

}


// ==========================================
// PAUSE MUSIC
// ==========================================

function pauseMusic(){

const music=document.getElementById("music");

music.pause();

}


// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

document.addEventListener("keydown",(event)=>{

if(event.key==="ArrowRight"){

nextPage();

}

if(event.key==="ArrowLeft"){

previousPage();

}

if(event.key==="m" || event.key==="M"){

playMusic();

}

});


// ==========================================
// DOUBLE CLICK CELEBRATION
// ==========================================

document.addEventListener("dblclick",()=>{

createConfetti();

createFireworks();

});
// ==========================================
// FIREWORKS EFFECT
// ==========================================

function createFireworks(){

for(let i=0;i<40;i++){

let fire=document.createElement("div");

fire.innerHTML="✨";

fire.style.position="fixed";

fire.style.left=Math.random()*100+"vw";

fire.style.top=Math.random()*100+"vh";

fire.style.fontSize=(15+Math.random()*30)+"px";

fire.style.pointerEvents="none";

fire.style.zIndex="9999";

fire.style.transition="1s";

document.body.appendChild(fire);

setTimeout(()=>{

fire.style.transform="scale(3)";

fire.style.opacity="0";

},100);

setTimeout(()=>{

fire.remove();

},1200);

}

}


// ==========================================
// CONFETTI EFFECT
// ==========================================

function createConfetti(){

const colors=["❤️","💛","💙","💚","💜","🤎","🎉","✨"];

for(let i=0;i<80;i++){

let confetti=document.createElement("div");

confetti.innerHTML=colors[Math.floor(Math.random()*colors.length)];

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-50px";

confetti.style.fontSize=(18+Math.random()*20)+"px";

confetti.style.pointerEvents="none";

confetti.style.transition="4s linear";

confetti.style.zIndex="9999";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform="translateY(120vh) rotate(720deg)";

confetti.style.opacity="0";

},100);

setTimeout(()=>{

confetti.remove();

},4200);

}

}


// ==========================================
// FLOATING HEARTS
// ==========================================

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="🤎";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.transition="8s linear";

heart.style.zIndex="999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

},700);


// ==========================================
// BALLOONS
// ==========================================

setInterval(()=>{

let balloon=document.createElement("div");

balloon.innerHTML="🎈";

balloon.style.position="fixed";

balloon.style.bottom="-100px";

balloon.style.left=Math.random()*100+"vw";

balloon.style.fontSize=(35+Math.random()*25)+"px";

balloon.style.transition="10s linear";

balloon.style.pointerEvents="none";

balloon.style.zIndex="998";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.style.transform="translateY(-130vh)";

},100);

setTimeout(()=>{

balloon.remove();

},10000);

},3500);


// ==========================================
// AUTO FIREWORKS ON LAST PAGE
// ==========================================

setInterval(()=>{

if(currentPage===pages.length-1){

createFireworks();

}

},3000);


// ==========================================
// FINAL MESSAGE
// ==========================================

window.onload=function(){

showPage(0);

console.log("❤️ Happy Birthday Raj Website Loaded ❤️");

}