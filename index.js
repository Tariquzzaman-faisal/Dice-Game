var rand1 = Math.floor(Math.random()*6 +1);
var string1 = "images/dice" + rand1 + ".png";
//alert(string1 + " " + string2);
document.querySelectorAll("img")[0].setAttribute("src", string1);
var rand2 = Math.floor(Math.random()*6 +1);
var string2 = "images/dice" + rand2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", string2);
if(rand1 > rand2){
    document.querySelector(".winner-text").innerHTML = "Player 1 Wins!";
}
else if(rand1 == rand2){
    document.querySelector(".winner-text").innerHTML = "Tie!";
}
else{
    document.querySelector(".winner-text").innerHTML = "Player 2 Wins!";
}
