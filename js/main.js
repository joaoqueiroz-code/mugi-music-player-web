var audio = document.getElementById("audio");

var music1 = document.getElementById("music1");
var music2 = document.getElementById("music2");
var music3 = document.getElementById("music3");

var musics = document.getElementsByClassName(".titulo");
var playIcon = document.querySelector(".playIcon");
var pauseIcon = document.querySelector(".pauseIcon")



function mudarIcon() {
    playIcon.innerHTML = "&#10074&#10074;"
    console.log("agora ta no pause")
    
}


function mudarAudio () {

   
    music1.addEventListener("click",  function (){
        
        audio.src = "sounds/hit-the-road-jack.mp3"
        audio.style.visibility = "visible";
        mudarIcon();

    })

    music2.addEventListener("click",  function (){
        audio.src = "sounds/thats-life.mp3"
        audio.style.visibility = "visible";
    })

    music3.addEventListener("click",  function (){
        audio.src = "sounds/fortunate-son.mp3"
        audio.style.visibility = "visible";
    })

    
}



mudarAudio();