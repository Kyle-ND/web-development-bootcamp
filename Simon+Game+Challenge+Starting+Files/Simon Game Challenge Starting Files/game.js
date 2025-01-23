gamePattern = [];
userClickedPattern = []
buttonColours = ["red","blue","green","yellow"];
var level = 0;




console.log(gamePattern);
$(document).keypress(nextSequence);


$(".btn").click(function(){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    console.log(userClickedPattern);

    
})


function nextSequence(){

    
    $("h1").text("Level "+ level);
    level += 1;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    console.log(level);


}


function playSound(name){
    var buttonSound = new Audio("./sounds/"+name+".mp3");
    buttonSound.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },200);
}

function checkAnswer(currentLevel){
    
}