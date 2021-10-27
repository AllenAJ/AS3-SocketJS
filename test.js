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

