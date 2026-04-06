function makeBubble (){
    var clutter = "";

for (var i = 1; i<=84; i++){
    let a = Math.floor(Math.random()*10);
    clutter += `<div id="bbl">${a}</div>`;
}

document.querySelector("#panelbtm").innerHTML = clutter;
}
makeBubble();

var timer = 60;
function runTimer (){
    var timerInt = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector("#panelbtm").innerHTML = `<h1>Game Over!<h1>`;
        }
    },1000);
}
runTimer();

var hitrn = 0;
function getNewHit (){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitElm").innerHTML = hitrn
}
getNewHit();

var score = 0;
function incScore (){
    score += 10;
    document.querySelector("#scoreElm").innerHTML = score;
    
}

pbtmEvnt = document.querySelector("#panelbtm")
pbtmEvnt.addEventListener("click", function(divDetail){
    var clickedNumber = Number(divDetail.target.innerHTML);
    if (clickedNumber===hitrn){
        incScore();
        getNewHit();
        makeBubble();
    }
});
