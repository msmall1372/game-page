function dice(){
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;
    var totalDie = dice1 + dice2;
    
    
    if (totalDie==7|| totalDie==11){
        document.getElementById("diceOutput").innerHTML = "You rolled " + totalDie + ".You win!";
    } else if (totalDie==2|| totalDie==3|| totalDie==12){
        document.getElementById("diceOutput").innerHTML = "You rolled " + totalDie + ".You lose.";
    }else{
        document.getElementById("diceOutput").innerHTML = "You rolled " + totalDie + ".You need to roll again.";
    }
}
