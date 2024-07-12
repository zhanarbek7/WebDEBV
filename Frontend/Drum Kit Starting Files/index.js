

// Detecting button click
var btns = document.querySelectorAll(".drum");
for (let i = 0; i < btns.length; i++) { // Use `let` instead of `var`
    btns[i].addEventListener("click", function() {
        var btnInnerHTML = btns[i].innerHTML; // Correctly scoped to each button
        makeSound(btnInnerHTML);
        alert(i);
        buttonAnimation(btnInnerHTML);
    });
}



// Detecting keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});



function makeSound(key){
    switch(key){
        case "w" : {playAudio("sounds/tom-1.mp3"); break;}
        case "a" : {playAudio("sounds/tom-2.mp3"); break;}
        case "s" : {playAudio("sounds/tom-3.mp3"); break;}
        case "d" : {playAudio("sounds/tom-4.mp3"); break;}
        case "j" : {playAudio("sounds/snare.mp3"); break;}
        case "k" : {playAudio("sounds/kick-bass.mp3"); break;}
        case "l" : {playAudio("sounds/crash.mp3"); break;}
    }
}

function playAudio(filePath){
    var audio = new Audio(filePath);
    audio.play();
}

function buttonAnimation(currentKey){
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function (){
        activeBtn.classList.remove("pressed");
    }, 1000);
}
