var btns = document.querySelectorAll(".drum");

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function (){
        switch(this.innerText){
            case "w" : {playAudio("sounds/tom-1.mp3"); break;}
            case "a" : {playAudio("sounds/tom-2.mp3"); break;}
            case "s" : {playAudio("sounds/tom-3.mp3"); break;}
            case "d" : {playAudio("sounds/tom-4.mp3"); break;}
            case "j" : {playAudio("sounds/snare.mp3"); break;}
            case "k" : {playAudio("sounds/kick-bass.mp3"); break;}
            case "l" : {playAudio("sounds/crash.mp3"); break;}
        }
    });
}

function handleClick(){
    alert("I got clicked");
}

function playAudio(filePath){
    var audio = new Audio(filePath);
    audio.play();
}

