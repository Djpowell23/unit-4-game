// Setting Variables
var wins = 0;
var losses = 0;
var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
userScoreCounter = 0;

// Image values
var redCrystal = 5;
var blueCrystal = 8;
var yellowCrystal = 11;
var whiteCrystal = 3;
console.log("Red: ", redCrystal);
console.log("Blue: ", blueCrystal);
console.log("Yellow: ", yellowCrystal);
console.log("White: ", whiteCrystal);


$(document).ready(function() {
    $("#targetScore").html(targetScore);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#userScoreCounter").html(userScoreCounter);
    

    // Red Button
    $("button.redBtn").click(function() {
        userScoreCounter += 5;
        $("#userScoreCounter").html(userScoreCounter);
        console.log("User Score: ", userScoreCounter);
        gameLogic();
    });

    // Blue Button
    $("button.blueBtn").click(function() {
        userScoreCounter += 8;
        $("#userScoreCounter").html(userScoreCounter);
        console.log("User Score: ", userScoreCounter);
        gameLogic();
    });

    // Yellow Button
    $("button.yellowBtn").click(function() {
        userScoreCounter += 11;
        $("#userScoreCounter").html(userScoreCounter);
        console.log("User Score: ", userScoreCounter);
        gameLogic();
    });

    // White Button
    $("button.whiteBtn").click(function() {
        userScoreCounter += 3;
        $("#userScoreCounter").html(userScoreCounter);
        console.log("User Score: ", userScoreCounter);
        gameLogic();
    }); 
});

// Generate a random target score
function generateTargetScore() {
    var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $('#targetScore').html(targetScore);
}

function gameLogic() {
    // Winning Statement
    if (userScoreCounter === targetScore) {
        alert("Congratulations! You win!")
        wins++;
        gameReset();
    } else if (userScoreCounter > targetScore) {
        alert("Oops! You lost. You overshot...")
        losses++;
        gameReset();
    }
} 

function gameReset() {
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    userScoreCounter = 0;
    $("#targetScore").html(targetScore);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#userScoreCounter").html(userScoreCounter);
}











