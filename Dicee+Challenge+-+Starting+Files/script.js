var Dice_one = Math.floor(Math.random() * 6) + 1;
var Dice_two = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + Dice_one + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + Dice_two + ".png");