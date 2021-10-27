let buttonColours = ["red","green","yellow","blue"];
let level = 0;

let randomChosenColour = buttonColours[nextSequence()];
let gamePattern = [];
let userClickedPattern = [];
gamePattern.push(randomChosenColour);

function nextSequence(){
    level++;
    $("h1").text("level "+level);
    randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

$("."+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio('sounds/'+randomChosenColour+'.mp3');
audio.play();

$('.btn').click(function(e){
    console.log(e.target.id);
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer();
})

function playSound(name){
    var audio1 = new Audio('sounds/'+name+'.mp3');
    audio1.play();
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){ 
        $("."+currentColour).removeClass("pressed");
    }, 100);
}

$(document).keypress(function(){
    $("h1").text("level 0");
    nextSequence();
});

function checkAnswer(currentLevel){

}
