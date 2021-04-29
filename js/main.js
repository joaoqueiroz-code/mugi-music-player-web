var audio = document.getElementById("audio");

var music1 = document.getElementById("music1");
var music2 = document.getElementById("music2");
var music3 = document.getElementById("music3");


function mudarAudio () {

    music1.addEventListener("click",  function (){audio.src = "sounds/hit-the-road-jack.mp3"})
    music2.addEventListener("click",  function (){audio.src = "sounds/thats-life.mp3"})
    music3.addEventListener("click",  function (){audio.src = "sounds/fortunate-son.mp3"})

    
}

function controleDoAudio () {

    function pausado() {
        audio.pause();

    }

    music1.addEventListener("click", pausado())
    
}

mudarAudio();
pausarAudio();